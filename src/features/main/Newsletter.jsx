import React from "react";

function Newsletter() {
  return (
    <form className="flex h-72 flex-col items-center justify-center bg-yellow-800">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Subscribe for our newsletter
      </h1>
      <div className="sm:px6 mt-4 flex flex-wrap justify-center gap-4 px-4 py-2 sm:flex-nowrap sm:py-4">
        <input
          className="p-2 sm:w-[400px]"
          type="text"
          placeholder="Enter your email address"
        />
        <button className="bg-slate-600 px-5 py-3 text-lg">submit</button>
      </div>
    </form>
  );
}

export default Newsletter;
