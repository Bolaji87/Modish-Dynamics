import React from "react";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  deleteCartItem,
  increaseCartQuantity,
} from "./cartSlice";
import { HiTrash } from "react-icons/hi2";
function UpdateCartQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this?",
    );
    if (confirmDelete) {
      dispatch(deleteCartItem(id));
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onclick={() => dispatch(decreaseCartQuantity(id))}
        className="h-8 w-8 rounded bg-gray-200 font-bold hover:bg-gray-300 dark:bg-gray-600"
      >
        -
      </Button>
      <span className="text-md font-bold">{quantity}</span>
      <Button
        onclick={() => dispatch(increaseCartQuantity(id))}
        className="h-8 w-8 rounded bg-gray-200 font-bold hover:bg-gray-300 dark:bg-gray-600"
      >
        +
      </Button>

      <Button
        onclick={handleDelete}
        className="ml-28 inline-flex items-center justify-center rounded-md bg-red-50 p-2 text-red-600 transition hover:bg-red-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
      >
        <HiTrash className="text-2xl" />
      </Button>
    </div>
  );
}

export default UpdateCartQuantity;
