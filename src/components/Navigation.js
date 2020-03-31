import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../images/hamburger.svg";
import { ReactComponent as CloseIcon } from "../images/closeicon.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  function handleTogglerClick() {
    setIsOpen(s => !s);
  }
  return (
    <nav>
      <button
        className={isOpen ? "nav-toggler is-open" : "nav-toggler"}
        onClick={handleTogglerClick}
      >
        <MenuIcon className="menu-icon" />
        <CloseIcon className="close-icon" />
      </button>
      <ul className={isOpen ? "is-open" : null}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}
