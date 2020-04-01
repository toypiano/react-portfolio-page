import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Backdrop from "./components/Backdrop";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleTogglerClick() {
    setIsOpen(s => !s);
  }
  function closeSideNav() {
    setIsOpen(false);
  }
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <Navigation clicked={handleTogglerClick} isOpen={isOpen} />
      <Backdrop isOpen={isOpen || isModalOpen} clicked={closeSideNav} />
      <Welcome />
      <Intro />
      <AboutMe />
      <Portfolio
        openModal={openModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
