import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-slate-900 h-full relative">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <button
        className="text-slate-900 bg-white hover:bg-[#ddd] rounded-full p-3 fixed hidden md:block right-10 bottom-10"
        onClick={top}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;
