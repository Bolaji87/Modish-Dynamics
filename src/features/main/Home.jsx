import React from "react";
import Hero from "./Hero";
import CategoriesBar from "./CategoriesBar";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <div className="h-full">
      <Hero />
      <CategoriesBar />
      <Newsletter />
    </div>
  );
}

export default Home;
