/* eslint-disable react/prop-types */
import React from "react";
import UpdateCartQuantity from "./UpdateCartQuantity";

// function CartItem({ item }) {
//   const { title, image, id, price, description } = item;

//   return (
//     <li className="max-w[1100px] flex w-[900px] items-center gap-10 rounded-3xl bg-slate-100">
//       <img
//         className="h-52 w-48 max-w-56 rounded-3xl bg-inherit bg-cover object-cover"
//         src={image}
//         alt={title}
//       />
//       <div className="flex flex-col justify-between gap-7">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <div>
//           <p>{price}</p>
//         </div>
//       </div>
//     </li>
//   );
// }

// export default CartItem;
/* eslint-disable react/prop-types */

function CartItem({ item }) {
  const { title, image, id, price, description } = item;

  return (
    <li className="flex w-full max-w-[1100px] items-center gap-10 rounded-3xl bg-slate-100 p-4">
      <div className="flex h-52 w-48 items-center justify-center rounded-3xl bg-slate-100">
        <img className="h-full w-full object-contain" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center gap-2">
          <p className="text-base font-medium">${price}</p>
          <UpdateCartQuantity />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
