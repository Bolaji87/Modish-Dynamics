import React from "react";

function Hero() {
  return (
    <section
      className="h-[80vh] bg-orange-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('ssshttps://www.shutterstock.com/shutterstock/photos/1759277513/display_1500/stock-photo-rolls-of-fabric-and-textiles-in-a-factory-shop-multi-different-colors-and-patterns-on-the-market-1759277513.jpg')",
      }}
    >
      <div className="flex items-center justify-between px-20 py-12">
        <div className="sm:mt-15 space-y-6 text-stone-700 sm:pt-12 sm:text-xl sm:font-medium">
          <p className="">
            Welcome to Modish Dynamics, welcome to <br />
            our wall of modest fashion where style meets sophistication.
          </p>

          <h1 className="my-12 text-3xl font-semibold">
            Discover Quality Fabrics
          </h1>
          <button className="mt-8 rounded-md border bg-yellow-600 px-8 py-3 text-xl font-semibold capitalize text-stone-50 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-yellow-700 hover:text-stone-100 sm:inline-block">
            shop now
          </button>
        </div>
        <div className="">
          <img
            src="./bundle-yard-here.webp"
            className="dur w-[500px] rounded-md object-contain shadow-md transition-all ease-in-out hover:scale-105 sm:h-[300px] sm:object-cover md:h-[400px] md:object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
