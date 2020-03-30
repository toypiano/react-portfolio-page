import React from "react";
import { lorem } from "faker";
import { ReactComponent as CloseIcon } from "../images/closeicon.svg";

// dynamically import images and store them in an array.
const requireImages = require.context(
  "../images/",
  false,
  /portfolio-\d+\.jpg$/ // leading ^ doesn't work for some reason..
);
const images = requireImages.keys().map(path => requireImages(path));
const imageObjects = images.map((src, i) => ({
  src,
  id: i + 1,
  alt: "portfolio item",
  featured: false,
  title: "Project Name",
  desc: "A short description could go right here",
  subtitle: "Subtitle goes here"
}));

imageObjects[0].featured = true;

function PortfolioModal({ src, title, subtitle, alt }) {
  return (
    <div className="portfolio-modal">
      <button className="modal-close">
        <CloseIcon />
      </button>
      <div className="portfolio-header">
        <div className="portfolio-title-box">
          <h2 className="portfolio-title">{title}</h2>
          <p className="portfolio-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="portfolio-content">
        <p>{lorem.words(30)}</p>
        <img className="portfolio-full-width" src={src} alt={alt} />
        <p>{lorem.words(30)}</p>
        <p>{lorem.words(30)}</p>
        <img className="portfolio-pull-left" src={src} alt={alt} />
        <p>{lorem.words(30)}</p>
        <p>{lorem.words(30)}</p>
        <img className="portfolio-pull-right" src={src} alt={alt} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const portfolioItems = imageObjects.map(obj => (
    <figure
      key={obj.id}
      className={`portfolio-item ${obj.featured ? "featured" : null}`}
    >
      <img src={obj.src} alt={obj.alt} />
      <figcaption>
        <h2 className="portfolio-title">{obj.title}</h2>
        <p className="portfolio-desc">{obj.desc}</p>
        <button className="portfolio-link">More info</button>
      </figcaption>
      <PortfolioModal
        src={obj.src}
        title={obj.title}
        subtitle={obj.subtitle}
        alt={obj.alt}
      />
    </figure>
  ));
  return (
    <section className="portfolio" id="portfolio">
      <h1>My Work</h1>
      <div className="portfolio-items">{portfolioItems}</div>
    </section>
  );
}
