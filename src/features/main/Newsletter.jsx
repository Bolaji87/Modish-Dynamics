import React from "react";

function Newsletter() {
  return (
    <form className="flex min-h-72 flex-col items-center justify-center bg-gray-300">
      <h1 className="mb-6 text-center text-4xl font-bold text-yellow-600">
        Subscribe for our newsletter
      </h1>
      <div className="sm:px6 mt-4 flex flex-wrap justify-center gap-4 px-4 py-2 sm:flex-nowrap sm:py-4">
        <input
          className="p-2 placeholder:text-xl placeholder:font-semibold placeholder:text-stone-700 sm:w-[500px]"
          type="text"
          placeholder="Input your email to susbscribe"
        />
        <button className="rounded-md bg-yellow-600 px-6 py-3 text-xl font-semibold capitalize text-gray-50 shadow-md">
          submit
        </button>
      </div>
    </form>
  );
}

export default Newsletter;
