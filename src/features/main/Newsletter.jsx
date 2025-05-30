import React from "react";
import Button from "../../UI/Button";

function Newsletter() {
  return (
    <form className="w-full bg-gray-50 px-4 py-10 sm:px-8 md:px-16 lg:px-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-2xl font-bold text-indigo-600 sm:text-3xl md:text-4xl">
          Subscribe to our newsletter
        </h1>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            className="w-full max-w-lg rounded-md border border-gray-300 p-3 placeholder:text-sm placeholder:font-medium placeholder:text-stone-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:flex-1 sm:placeholder:text-base md:placeholder:text-lg"
            type="email"
            placeholder="Enter your email to subscribe"
          />
          <Button className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold capitalize text-white shadow-md hover:bg-indigo-700 sm:w-auto">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Newsletter;
