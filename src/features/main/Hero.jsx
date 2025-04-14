import React from "react";

function Hero() {
  return (
    <section className="flex h-full items-center gap-6 px-5 py-4 sm:gap-28">
      <div className="sm:mt-15 space-y-6 pl-10 sm:pt-12 sm:text-xl sm:font-medium">
        <p className="">
          Welcome to Modish Dynamics, welcome to <br />
          our wall of modest fashion where style meets sophistication.
        </p>

        <h1 className="mb-10">Modish Dynamics</h1>
        <button className="border bg-orange-300 sm:inline-block">
          shop now
        </button>
      </div>
      <div className="h-400px">
        <img
          src="./bundle-yard-here.webp"
          className="h-[300px] w-[450px] object-contain sm:h-[300px] sm:object-cover md:object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
