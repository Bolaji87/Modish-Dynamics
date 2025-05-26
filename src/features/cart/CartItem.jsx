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
    <li className="flex w-full max-w-[1100px] flex-col items-center gap-4 rounded-3xl bg-slate-100 p-4 sm:flex-row sm:gap-10">
      <div className="flex h-52 w-full items-center justify-center rounded-2xl bg-slate-200 sm:w-48">
        <img
          className="h-full max-h-52 w-full object-contain object-center sm:object-cover"
          src={image}
          alt={title}
        />
      </div>

      <div className="flex w-full flex-col justify-between gap-3">
        <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
        <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">${price}</p>
          <UpdateCartQuantity />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
