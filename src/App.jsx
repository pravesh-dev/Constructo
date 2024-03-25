import React from "react";
import Hero from "./Components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./Components/Header";
import About from "./Components/About";
import Parallex1 from "./Components/Parallex1";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Parallex1 />
      <Service />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
