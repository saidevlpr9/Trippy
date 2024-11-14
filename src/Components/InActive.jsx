import React from "react";
import { Link } from "react-router-dom";

const InActive = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <div className="mb-6">
          <svg
            className="w-20 h-20 text-blue-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1l22 22M9.172 9.172A4 4 0 0112 8h4a4 4 0 014 4v2m0 4a4 4 0 01-1.172 2.828M15 15H5a2 2 0 00-2 2v2m3 0h.01"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! It looks like you lost your internet connection
        </h1>
        <p className="text-gray-600 mb-6">
          Please check your network settings and try again.
        </p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </div>
    </section>
  );
};

export default InActive;
