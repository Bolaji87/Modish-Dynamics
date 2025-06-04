/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

function Error({ error }) {
  const navigate = useNavigate();
  return (
    <div className="mt-20 space-y-2 text-center">
      <h2 className="mb-4 text-2xl font-bold">Something went wrong 😱</h2>
      <p className="font-semibold">{error.data || error.message}</p>
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer rounded bg-indigo-600 px-8 py-3 text-lg text-gray-50"
      >
        Go back
      </button>
    </div>
  );
}

export default Error;
