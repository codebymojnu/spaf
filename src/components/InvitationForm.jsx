// InvitationForm.js
import React from 'react';

function InvitationForm() {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">সদস্য আহ্বান</h2>
        <p className="text-gray-700 text-base mb-4">
          আস-সুন্নাহ ফাউন্ডেশনের নীতি ও আদর্শের সঙ্গে একমত এরকম যে কেউ আজীবন সদস্য ও দাতা সদস্য হওয়ার জন্য আবেদন করতে পারবেন।
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          {/* Add other form fields (father's name, address, phone number, email) here */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvitationForm;
