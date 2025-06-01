import { useState } from "react";

export function useToggleHamburger() {
  const [toggleShowMenu, setToggleShowMenu] = useState(false);

  function handleToggleShowMenu() {
    setToggleShowMenu((toggleShow) => !toggleShow);
  }

  return { toggleShowMenu, onToggleShow: handleToggleShowMenu };
}
