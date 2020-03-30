import React from "react";
import { lorem } from "faker";

import introLeft from "../images/welcome-01.png";
import introRight from "../images/welcome-02.png";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-left">
        <img src={introLeft} alt="a laptop on a wood table" />
      </div>
      <div className="intro-middle">
        <h2>Making it happen</h2>
        <p>{lorem.words(20)}</p>
      </div>
      <div className="intro-right">
        <img src={introRight} alt="a laptop on a wood table" />
      </div>
    </section>
  );
}
