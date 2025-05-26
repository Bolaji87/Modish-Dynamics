import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../UI/OAuth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignIn() {
  const [showPassword, setShowPassword] = useState(true);

  function handleShowPassword() {
    setShowPassword((show) => !show);
  }

  return (
    <section className="flex min-h-screen flex-col bg-gray-100 px-4 sm:px-6 lg:px-8">
      <h1 className="mt-6 text-center text-xl font-semibold sm:text-2xl">
        Sign In
      </h1>

      <div className="mx-auto flex w-full max-w-md items-center justify-center py-8 sm:max-w-lg lg:max-w-xl">
        <div className="w-full rounded-md bg-white px-6 py-8 shadow-md">
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="rounded border border-gray-300 px-4 py-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded border border-gray-300 px-4 py-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 cursor-pointer text-xl text-gray-600"
                  onClick={handleShowPassword}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 cursor-pointer text-xl text-gray-600"
                  onClick={handleShowPassword}
                />
              )}
            </div>

            <div className="flex flex-col text-sm sm:flex-row sm:items-center sm:justify-between sm:text-base">
              <p className="mb-2 sm:mb-0">
                Don&apos;t have an account?{" "}
                <Link className="text-red-600 hover:underline" to="/sign-up">
                  Register
                </Link>
              </p>
              <Link
                className="text-blue-600 hover:underline"
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
              Sign In
            </button>

            <div className="my-4 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
              <p className="mx-4 text-center font-semibold text-gray-600">OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
