import React, { useState, useEffect, useCallback, useRef } from "react";
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
  id: i,
  alt: "portfolio item",
  featured: false,
  title: "Project Name",
  desc: "A short description could go right here",
  subtitle: "Subtitle goes here"
}));

imageObjects[0].featured = true;

// Modal is always mounted with Portfolio (Only contents changes dynamically)
function PortfolioModal({
  src,
  title,
  subtitle,
  alt,
  closeModal,
  isModalOpen
}) {
  const [fadeStarted, setFadeStarted] = useState(false);

  const modalFadeOut = useCallback(() => {
    setFadeStarted(true);
  }, []);

  useEffect(() => {
    function handleKeydown(e) {
      if (!isModalOpen) return; // don't run if modal is not opened
      if (e.keyCode === 27) {
        modalFadeOut();
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [modalFadeOut, isModalOpen]);

  function handleAnimationEnd() {
    if (fadeStarted) closeModal(); // Only close modal on fadeOut (don't close it when fadeIn animation ends)
    setFadeStarted(false); // Reset fadeStarted to false so that modal won't get closed on revisit
  }

  const headerStyle = {
    backgroundImage: `url(${src})` // no dq, no semicolon
  };

  const modalClass = isModalOpen
    ? "portfolio-modal is-open"
    : "portfolio-modal";

  const modalStyle =
    isModalOpen && fadeStarted
      ? {
          animation: "modalOut 300ms forwards"
        }
      : null;

  return (
    <div
      className={modalClass}
      style={modalStyle}
      onAnimationEnd={handleAnimationEnd}
    >
      <button className="modal-close" onClick={modalFadeOut}>
        <CloseIcon />
      </button>
      <div className="portfolio-header" style={headerStyle}>
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
        <p>{lorem.words(30)}</p>
        <p>{lorem.words(20)}</p>
      </div>
    </div>
  );
}

export default function Portfolio({ openModal, closeModal, isModalOpen }) {
  const [modalIndex, setModalIndex] = useState(0);

  function handleLinkClick(id) {
    setModalIndex(id);
    openModal();
  }

  const portfolioItems = imageObjects.map(obj => (
    <figure
      key={obj.id}
      className={`portfolio-item ${obj.featured ? "featured" : null}`}
    >
      <img src={obj.src} alt={obj.alt} />
      <figcaption>
        <h2 className="portfolio-title">{obj.title}</h2>
        <p className="portfolio-desc">{obj.desc}</p>
        <button
          onClick={() => handleLinkClick(obj.id)}
          className="portfolio-link"
        >
          More info
        </button>
      </figcaption>
    </figure>
  ));
  return (
    <section className="portfolio" id="portfolio">
      <h1>My Work</h1>
      <div className="portfolio-items">{portfolioItems}</div>
      <PortfolioModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        src={imageObjects[modalIndex].src}
        title={imageObjects[modalIndex].title}
        subtitle={imageObjects[modalIndex].subtitle}
        alt={imageObjects[modalIndex].alt}
      />
    </section>
  );
}
