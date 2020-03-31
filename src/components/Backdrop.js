import React from "react";

export default function Backdrop({ isOpen, clicked }) {
  return (
    <div
      className={isOpen ? "backdrop is-open" : "backdrop"}
      onClick={clicked}
    ></div>
  );
}
