import React, { useState } from "react";

function InvitationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneEmail: "",
    whyMember: "",
    address: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://spaf0.vercel.app/api/member-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      setSuccessMessage("Form submitted successfully!");
      setError(null);
      setFormData({ name: "", phoneEmail: "", whyMember: "", address: "" });
    } catch (error) {
      setError("Failed to submit form data. Please try again later.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">সদস্য আহ্বান</h2>
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <p className="text-black text-base mb-4">
            Safe and Poverty Alleviation Foundation এর নীতি ও আদর্শের সঙ্গে একমত
            এরকম যে কেউ আজীবন সদস্য ও দাতা সদস্য হওয়ার জন্য আবেদন করতে পারবেন।
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneEmail"
              >
                Phone/Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneEmail"
                type="text"
                placeholder="Phone/Email"
                value={formData.phoneEmail}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                id="whyMember"
                name="whyMember"
                value={formData.whyMember}
                onChange={handleChange}
                placeholder="কেন সদস্য হতে চান?"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InvitationForm;
