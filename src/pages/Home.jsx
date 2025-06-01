import React from "react";
import Hero from "../features/main/Hero";
import Newsletter from "../features/main/Newsletter";
import LatestProducts from "../features/main/LatestProducts";
import Footer from "../UI/Footer";

function Home() {
  return (
    <div className="min-h-[100dvh]">
      <Hero />
      <LatestProducts />
      <Newsletter />
    </div>
  );
}

export default Home;
