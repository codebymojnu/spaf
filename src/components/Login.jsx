import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(false);
    // Send login credentials to backend for authentication
    fetch("https://pg-backend-nine.vercel.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        // Store JWT token in localStorage
        localStorage.setItem("token", data.token);
        // Redirect user to Finished Challenges page
        setIsSubmitting(false);
        navigate("/admin");
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Error:", error);
        setError("ভুল তথ্য দিয়েছেন। আবার চেষ্টা করুন।");
      });
  };

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="flex justify-center mt-5">
          <span className="text-sm text-black-500 mb-5">
            সঠিক তথ্য দিয়ে লগইন করুন
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setError(false);
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setError(false);
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {isSubmitting && (
            <p className=" text-green-500 transition-opacity duration-300 opacity-100 mt-4 mb-3">
              তথ্য চেকিং হচ্ছে। দয়া করে অপেক্ষা করুন...
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
