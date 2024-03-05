import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DonateForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phoneEmail: "",
    donationAmount: "",
    txId: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [onSubmitting, setOnSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleDonate = () => {
    if (!formData.phoneEmail || !formData.donationAmount) {
      setError1("Please fill in all fields.");
      return;
    } else {
      setShowModal(true);
      setError1(null);
    }
  };

  const handleSubmit = async () => {
    if (!formData.phoneEmail || !formData.donationAmount || !formData.txId) {
      setError("Please fill in all fields.");
      return;
    }

    setOnSubmitting(true);

    try {
      const response = await fetch("https://spaf0.vercel.app/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data.");
      }

      setFormData({
        phoneEmail: "",
        donationAmount: "",
        txId: "",
      });

      setShowModal(false);
      navigate("/thank-you");
      setOnSubmitting(false);
    } catch (error) {
      setError("Failed to submit data. Please try again later.");
      setOnSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex flex-wrap items-center">
          <div className="w-full lg:w-2/4 lg:pr-2 mb-4 lg:mb-0">
            <input
              className="shadow appearance-none border rounded w-full lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneEmail"
              type="text"
              placeholder="Phone or Email"
              value={formData.phoneEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full lg:w-1/4 lg:pl-2 mb-4 lg:mb-0">
            <input
              className="shadow appearance-none border rounded w-full lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="donationAmount"
              type="number"
              placeholder="Amount"
              value={formData.donationAmount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full lg:w-1/4 lg:pl-2 mb-4 lg:mb-0">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={handleDonate}
            >
              Donate
            </button>
          </div>
        </div>
      </form>
      {error1 && <div className="text-center text-red-500">{error1}</div>}
      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                <button
                  className="text-white text-3xl font-bold leading-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              <div className="modal-content py-4 text-left px-6">
                <div className="mb-4">
                  <p>
                    Email/Phone: <strong>{formData.phoneEmail}</strong>
                  </p>
                  <p>
                    Amount: <strong>{formData.donationAmount}</strong>
                  </p>
                </div>
                <p className="mt-2 text-blue-500">
                  Donate to <strong>01788262433</strong> (BKash/Nagad)
                </p>
                <p className="mt-2 text-blue-500">
                  Please provide Transaction ID below.
                </p>
                <div className="mt-4 mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="txId"
                    type="text"
                    placeholder="Transaction ID"
                    value={formData.txId}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Display error message */}
                {error && <div className="text-red-500">{error}</div>}
                {/* Display submitting message */}
                {onSubmitting && (
                  <div className="text-blue-500">Submitting...</div>
                )}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                  onClick={handleSubmit}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonateForm;
