import React from "react";
import { BRAND_NAME } from "../../utils/utils";
import Button from "../../UI/Button";

function Hero() {
  return (
    <section className="min-h-[80vh] bg-cover bg-center bg-no-repeat dark:bg-gray-900 dark:text-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-8 px-4 py-10 sm:flex-row sm:px-8 lg:px-20">
        {/* Text Section */}
        <div className="flex flex-1 flex-col items-start gap-6 text-left text-sm text-stone-700 sm:text-lg md:text-xl dark:text-gray-50">
          <p className="leading-relaxed">
            Welcome to <span className="font-semibold">{BRAND_NAME}</span>,
            where Modesty meets Modernity.
          </p>

          <h1 className="text-xl font-bold sm:text-2xl md:text-4xl">
            Discover Quality Fabrics
          </h1>

          <Button
            to="/products"
            className="mt-4 inline-block rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold capitalize text-white transition-transform duration-300 hover:scale-105 hover:bg-indigo-700 md:text-lg"
          >
            Shop Now
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex flex-1 justify-center">
          <img
            src="./hero-illustra.jpg"
            alt="Hero Illustration"
            className="w-full max-w-[400px] rounded-md object-cover shadow-lg sm:max-w-[500px] md:max-w-[600px] dark:brightness-75"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
