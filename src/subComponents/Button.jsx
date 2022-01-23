import React, { useContext, useCallback } from "react";
import { CursorContext } from "../store/CursorContextProvider";
export const Button = () => {
  const [, setCursor] = useContext(CursorContext);
  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });
  return (
    <button
      type="button"
      style={{ padding: "1rem" }}
      onMouseEnter={toggleCursor}
      onMouseLeave={toggleCursor}
    >
      HOVER ME
    </button>
  );
};
