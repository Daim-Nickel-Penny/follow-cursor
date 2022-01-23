import React, { useState, useContext, useEffect } from "react";
import isTouchDevice from "../hooks/isTouchDevice";
import useMousePosition from "../hooks/useMousePosition";
import { CursorContext } from "../store/CursorContextProvider";
import "./Cursor.css";
export const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",

          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? "black" : "white",
          strokeWidth: 1,
          fill: cursor.active ? "rgba(255,255,255,.5)" : "black",
          transition: "transform .2s ease-in-out",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};
