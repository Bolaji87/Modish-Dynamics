import React, { useState } from "react";
import Modal from "../UI/Modal";

function SignIn() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-400">
      <h2>SignIn</h2>

      <button onClick={() => setIsOpenModal((is) => !is)}>
        {isOpenModal ? "Close" : "Open form"}
      </button>
      {isOpenModal && (
        <Modal>
          <form action="">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
          </form>
        </Modal>
      )}
    </div>
  );
}

export default SignIn;
