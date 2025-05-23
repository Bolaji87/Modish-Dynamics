import React, { useState } from "react";

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
    <div className="min-h-screen bg-gray-50 pt-6">
      <div className="px-20 py-10">
        <h1 className="mb-10 text-3xl font-bold capitalize text-yellow-600">
          Latest products
        </h1>
        <ul className="grid h-[500px] grid-cols-4 gap-4">
          {latestProducts.map((latest) => (
            <Latest key={latest.id} item={latest} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Latest({ item }) {
  const [isShow, setIsShow] = useState(false);

  const { name, image, id } = item;
  return (
    <li
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="relative w-fit items-center rounded-lg bg-gray-50 px-6 py-3 shadow-lg"
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
        {isShow && (
          <button className="absolute left-14 top-52 z-50 w-52 rounded-xl bg-yellow-600 px-6 py-4 text-xl font-medium capitalize text-gray-50">
            Shop now
          </button>
        )}
      </div>
    </li>
  );
}
export default LatestProducts;
