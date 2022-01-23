import { useContext, useCallback } from "react";
import { CursorContext } from "../hooks/CursorContextProvider";
import isTouchDevice from "./isTouchDevice";

const useCursorHandlers = (options = {}) => {
  if (isTouchDevice) {
    return options;
  }

  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = () => {
    setCursor(({ active }) => ({ active: !active }));
  };

  const onMouseEnter = useCallback((event) => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    toggleCursor();
  });

  const onMouseLeave = useCallback((event) => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    toggleCursor();
  });

  return { onMouseEnter, onMouseLeave };
};
