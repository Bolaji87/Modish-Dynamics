import React from "react";
import Hero from "../features/main/Hero";
import Newsletter from "../features/main/Newsletter";
import LatestProducts from "../features/main/LatestProducts";

function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <LatestProducts />
      <Newsletter />
    </div>
  );
}

export default Home;
