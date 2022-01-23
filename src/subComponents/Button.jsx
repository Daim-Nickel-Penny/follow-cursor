import React, { useContext, useCallback } from "react";
import { CursorContext } from "../store/CursorContextProvider";
import "./Button.css";
export const Button = () => {
  const [, setCursor] = useContext(CursorContext);
  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });
  return (
    <div class="wrapper">
      <button
        type="button"
        style={{ padding: "1rem" }}
        onMouseEnter={toggleCursor}
        onMouseLeave={toggleCursor}
        className="button"
      >
        HOVER ME
      </button>
    </div>
  );
};
