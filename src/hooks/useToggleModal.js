import { useState } from "react";

export function useToggleModal() {
  const [toggleShowModalMenu, setToggleShowModalMenu] = useState(false);

  function handleToggleShowModalMenu() {
    setToggleShowModalMenu((toggleShow) => !toggleShow);
  }

  return { toggleShowModalMenu, onToggleModal: handleToggleShowModalMenu };
}
