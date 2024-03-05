import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://spaf0.vercel.app/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
      <h1 className="mt-8 text-3xl font-bold">যোগাযোগের ফর্ম</h1>
      {error && <div className="text-red-600">{error}</div>}
      {success && (
        <div className="text-green-600">Form submitted successfully!</div>
      )}
      <div className="lg:flex lg:justify-between py-8 gap-8">
        {/* Contact Form */}
        <div className="lg:w-1/2 rounded-lg bg-gray-100 shadow-lg p-6">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="আপনার নাম"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Other form fields... */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="আপনার ইমেইল"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="যোগাযোগের বিষয়"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="আপনার বার্তা"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                প্রেরণ করুন
              </button>
            </div>
          </form>
        </div>
        {/* Detailed Address Information */}
        <div className="lg:w-1/2 rounded-lg bg-gray-200 shadow-lg p-6">
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">বিস্তারিত ঠিকানা</h2>
            <p>
              <strong>ঠিকানা:</strong> নাগেশ্বরী, কুড়িগ্রাম, বাংলাদেশ।
            </p>
            <p>
              <strong>মোবাইল:</strong> +88-09610-001089
            </p>
            <p>
              <strong>ফেসবুক:</strong>{" "}
              <a href="www.facebook.com">www.facebook.com/spaf</a>
            </p>
            <p>
              <strong>ইমেইল:</strong> spaf@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
