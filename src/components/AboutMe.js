import React from "react";
import { lorem } from "faker";
import AboutImg from "../images/joe-portfolio.png";

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <img src={AboutImg} alt="Joe Portfolio" />
      <h1 className="about-title">Joe Portfolio</h1>
      <h2 className="about-subtitle">Designer &amp; Developer</h2>
      <div className="div-text">
        <p>{lorem.words(30)}</p>
        <p>{lorem.words(30)}</p>
      </div>
    </section>
  );
}
