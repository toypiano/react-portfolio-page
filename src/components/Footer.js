import React from "react";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Github } from "../images/github.svg";

export default function Footer() {
  return (
    <footer>
      <p>Follow me on social media</p>
      <div className="social-icons">
        <Twitter />
        <Instagram />
        <Github />
      </div>
      <p className="copyright">
        Copyright {"\u{00A9}"}2020 Joe Portfolio {"\u{1F9D4}"}
      </p>
    </footer>
  );
}
