import React from "react";
import { useNavigate } from "react-router-dom";

const latestProducts = [
  {
    name: "Colored tent fabrics",
    id: "2198645379",
    image: "./fullblue-abaya.jpg",
  },
  {
    name: "Stack of colorful clothe",
    id: "2014848305",
    image: "./men-whitejalab.jpg",
  },
  {
    name: "Palette of soft fabric",
    id: "2300005813",
    image: "/carton-color-abaya.jpg",
  },
  {
    name: "Fabrics with a Pantone",
    id: "2320518005",
    image: "/men-jalab-thick-brown.jpg",
  },
];

function LatestProducts() {
  return (
    <section className="min-h-screen bg-gray-50 py-10 dark:bg-gray-900 dark:text-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-20">
        <h1 className="mb-10 text-center text-3xl font-bold capitalize text-indigo-600">
          Latest Products
        </h1>
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {latestProducts.map((latest) => (
            <Latest key={latest.id} item={latest} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Latest({ item }) {
  const navigate = useNavigate();
  const { name, image } = item;

  return (
    <li
      onClick={() => navigate("/products")}
      className="transform cursor-pointer rounded-lg bg-white p-3 shadow-md transition duration-300 hover:scale-105"
    >
      <div className="relative mb-4 h-64 w-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center dark:brightness-75"
        />
        <p className="absolute left-3 top-3 max-w-[90%] rounded bg-white/70 px-2 py-1 text-sm font-semibold italic text-stone-900 backdrop-blur-sm sm:text-base">
          {name}
        </p>
      </div>
    </li>
  );
}

export default LatestProducts;
