import React from "react";
import { useNavigate } from "react-router-dom";

const latestProducts = [
  {
    name: "colored tent fabrics ",
    id: "2198645379",
    image: "./fullblue-abaya.jpg",
  },
  {
    name: "Stack of colorful clothe",
    id: "2014848305",
    image: "./men-whitejalab.jpg",
  },
  {
    name: "palette of soft fabric",
    id: "2300005813",
    image: "/carton-color-abaya.jpg",
  },
  {
    name: " fabrics with a pantone ",
    id: "2320518005",
    image: "/men-jalab-thick-brown.jpg",
  },
];

function LatestProducts() {
  return (
    <div className="bg-gray-0 min-h-screen pt-6">
      <div className="px-20 py-10">
        <h1 className="mb-10 text-3xl font-bold capitalize text-indigo-600">
          Latest products
        </h1>
        <ul className="min-h-[500px grid w-full max-w-6xl grid-cols-1 place-content-center gap-y-6 bg-gray-50 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {latestProducts.map((latest) => (
            <Latest key={latest.id} item={latest} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Latest({ item }) {
  const navigate = useNavigate();

  const { name, image, id } = item;
  return (
    <li
      onClick={() => navigate("/products")}
      className="relative w-full cursor-pointer items-center rounded-lg px-6 py-3 duration-300 hover:scale-105"
    >
      <div className="relative flex flex-col items-center gap-2">
        <p className="absolute left-3 top-2 text-xl font-bold capitalize italic text-stone-900">
          {name}
        </p>
        <div className="h-96 max-w-[320px]">
          <img
            src={image}
            alt={name}
            className="h-full rounded-md object-cover object-center"
          />
        </div>
      </div>
    </li>
  );
}
export default LatestProducts;
