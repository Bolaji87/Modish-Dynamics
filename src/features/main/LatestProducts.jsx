import React from "react";
import { useNavigate } from "react-router-dom";

const latestProducts = [
  {
    name: "colored tent fabrics ",
    id: "2198645379",
    image: "./f-1.png",
  },
  {
    name: "Stack of colorful clothe",
    id: "2014848305",
    image: "/f-2.png",
  },
  {
    name: "palette of soft fabric",
    id: "2300005813",
    image: "/f-3.png",
  },
  {
    name: " fabrics with a pantone ",
    id: "2320518005",
    image: "/f-4.png",
  },
];

function LatestProducts() {
  return (
    <div className="bg-gray-0 min-h-screen pt-6">
      <div className="px-20 py-10">
        <h1 className="mb-10 text-3xl font-bold capitalize text-yellow-600">
          Latest products
        </h1>
        <ul className="grid min-h-[500px] place-content-center gap-4 gap-y-9 sm:grid-cols-4">
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
      className="relative w-fit cursor-pointer items-center rounded-lg px-6 py-3 duration-300 hover:scale-105"
    >
      <div className="relative flex flex-col items-center gap-2">
        <p className="absolute left-3 top-2 text-xl font-bold capitalize italic text-orange-50">
          {name}
        </p>
        <div className="h-96 w-[288px]">
          <img
            src={image}
            alt={name}
            className="rounded-md object-cover object-center"
          />
        </div>
      </div>
    </li>
  );
}
export default LatestProducts;
