import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader"; // Import the Loader component
import ContactMessageList from "./ContactMessageList";
import DonationList from "./DonationList";
import MemberRequestList from "./MemberRequestList";

function AdminDashboard() {
  const [donations, setDonations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [memberRequests, setMemberRequests] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("donation");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login page if token is not available
      navigate("/login");
    } else {
      // Fetch donations data from backend using JWT token
      fetch(`https://spaf0.vercel.app/api/donations`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch donations data");
          }
          return response.json();
        })
        .then((data) => {
          setDonations(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching donations:", error);
          setError("Failed to fetch donations data. Please try again later.");
          setIsLoading(false);
        });

      // Fetch messages data from backend using JWT token
      fetch(`https://spaf0.vercel.app/api/messages`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch messages data");
          }
          return response.json();
        })
        .then((data) => {
          setMessages(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
          setError("Failed to fetch messages data. Please try again later.");
          setIsLoading(false);
        });

      // Fetch member requests data from backend using JWT token
      fetch(`https://spaf0.vercel.app/api/member-requests`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch member requests data");
          }
          return response.json();
        })
        .then((data) => {
          setMemberRequests(data);
          setIsLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching member requests:", error);
          setError(
            "Failed to fetch member requests data. Please try again later."
          );
          setIsLoading(false);
        });
    }
  }, [navigate]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="flex mb-4">
        <button
          className={`mr-4 focus:outline-none ${
            selectedCategory === "donation" ? "underline" : ""
          }`}
          onClick={() => handleCategoryClick("donation")}
        >
          ডোনেশনের তালিকা
        </button>
        <button
          className={`mr-4 focus:outline-none ${
            selectedCategory === "message" ? "underline" : ""
          }`}
          onClick={() => handleCategoryClick("message")}
        >
          মেসেজের তালিকা
        </button>
        <button
          className={`focus:outline-none ${
            selectedCategory === "request" ? "underline" : ""
          }`}
          onClick={() => handleCategoryClick("request")}
        >
          মেম্বার রিকুয়েস্টের তালিকা
        </button>
      </div>
      {isLoading ? ( // Render the Loader component while loading
        <Loader />
      ) : (
        <>
          {selectedCategory === "donation" && (
            <DonationList donations={donations} />
          )}
          {selectedCategory === "message" && (
            <ContactMessageList messages={messages} />
          )}
          {selectedCategory === "request" && (
            <MemberRequestList memberRequests={memberRequests} />
          )}
        </>
      )}
    </div>
  );
}

export default AdminDashboard;
