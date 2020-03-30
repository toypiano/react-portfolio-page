import React from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
      <Intro />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
