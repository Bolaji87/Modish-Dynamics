import React from "react";
import Button from "../../UI/Button";

function Newsletter() {
  return (
    <form className="mt-4 flex min-h-72 flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-6 text-center text-4xl font-bold text-indigo-600">
        Subscribe our newsletter
      </h1>
      <div className="sm:px6 mt-4 flex flex-col justify-center gap-4 px-4 py-2 sm:flex-row sm:py-4">
        <input
          className="p-2 placeholder:text-xs placeholder:font-medium placeholder:text-stone-700 sm:w-[500px] sm:placeholder:text-xl sm:placeholder:font-semibold"
          type="text"
          placeholder="Input your email to susbscribe"
        />
        <Button className="rounded-md bg-indigo-600 px-6 py-3 text-xl font-semibold capitalize text-gray-50 shadow-md hover:bg-indigo-700">
          submit
        </Button>
      </div>
    </form>
  );
}

export default Newsletter;
