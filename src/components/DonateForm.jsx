import React from 'react';

function DonateForm() {
  return (
    <div className="max-w-xl mx-auto mt-8 px-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex flex-wrap items-center">
          <div className="w-full lg:w-2/4 lg:pr-2 mb-4 lg:mb-0">
            <input
              className="shadow appearance-none border rounded w-full lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneEmail"
              type="text"
              placeholder="Phone or Email"
            />
          </div>
          <div className="w-full lg:w-1/4 lg:pl-2 mb-4 lg:mb-0">
            <input
              className="shadow appearance-none border rounded w-full lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="donationAmount"
              type="number"
              placeholder="Amount"
            />
          </div>
          <div className="w-full lg:w-1/4 lg:pl-2 mb-4 lg:mb-0">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Donate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DonateForm;
