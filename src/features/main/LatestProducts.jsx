import React from "react";

const latestProducts = [
  {
    name: "colored tent fabrics in selective focus",
    id: "2198645379",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2198645379/display_1500/stock-photo-samples-of-colored-tent-fabrics-in-selective-focus-a-large-assortment-of-high-quality-and-2198645379.jpg",
  },
  {
    name: "Stack of colorful clothes texture",
    id: "2014848305",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2014848305/display_1500/stock-photo-stack-of-colorful-clothes-texture-background-2014848305.jpg",
  },
  {
    name: "palette of soft fabric",
    id: "2300005813",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2300005813/display_1500/stock-photo-background-of-test-palette-of-soft-fabric-2300005813.jpg",
  },
  {
    name: " fabrics with a pantone color palette",
    id: "2320518005",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2320518005/display_1500/stock-photo-different-types-of-fabrics-with-a-pantone-color-palette-2320518005.jpg",
  },
];

function LatestProducts() {
  return (
    <div className="h-screen">
      <div>
        <h1>Latest products</h1>
        <ul>
          {latestProducts.map((latest) => (
            <Latest key={latest.id} item={latest} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Latest({ item }) {
  const { name, image, id } = item;
  return (
    <li>
      <p>{name}</p>
      <div className="w-[500px]">
        <img src={image} alt={name} />
      </div>
      <button>Shop now</button>
    </li>
  );
}
export default LatestProducts;
