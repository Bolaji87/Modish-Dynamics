import React from "react";

function Modal({ children }) {
  return (
    <div className="flex h-72 w-72 items-center justify-center border-gray-200 bg-gray-50">
      {children}
    </div>
  );
}

export default Modal;
