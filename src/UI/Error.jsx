/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="mt-20 space-y-2 text-center">
      <h2 className="mb-4 text-2xl font-bold">Something went wrong 😱</h2>
      <p className="font-semibold">{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Error;
