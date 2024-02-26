import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactMessageList from "./ContactMessageList";
import DonationList from "./DonationList";
import MemberRequestList from "./MemberRequestList";

function AdminDashboard() {
  const [selectedCategory, setSelectedCategory] = useState("donation");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login page if token is not available
      navigate("/login");
    }
  }, [navigate]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Hard-coded data for testing
  const donations = [
    {
      date: "20-02-2023",
      time: "7.15 PM",
      phoneEmail: "123-456-7890",
      donationAmount: 100,
      txId: "ABC123",
    },
    {
      date: "20-02-2023",
      time: "7.15 PM",
      phoneEmail: "456-789-1230",
      donationAmount: 200,
      txId: "DEF456",
    },
  ];

  const messages = [
    {
      date: "20-02-2023",
      time: "7.15 PM",
      name: "John Doe",
      email: "john@example.com",
      subject: "Query",
      message: "Hello, I have a question.",
    },
    {
      date: "20-02-2023",
      time: "7.15 PM",
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Feedback",
      message: "Great website!",
    },
  ];

  const memberRequests = [
    {
      date: "20-02-2023",
      time: "7.15 PM",
      name: "Alice",
      phoneOrEmail: "alice@example.com",
      address: "123 Main St",
    },
    {
      date: "20-02-2023",
      time: "7.15 PM",
      name: "Bob",
      phoneOrEmail: "bob@example.com",
      address: "456 Elm St",
    },
  ];

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
      {selectedCategory === "donation" && (
        <DonationList donations={donations} />
      )}
      {selectedCategory === "message" && (
        <ContactMessageList messages={messages} />
      )}
      {selectedCategory === "request" && (
        <MemberRequestList memberRequests={memberRequests} />
      )}
    </div>
  );
}

export default AdminDashboard;
