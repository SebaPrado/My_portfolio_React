import React from "react";
import Contact from "./components/5-contact/Contact";
import Skills from "./components/3-skills/Skills";
import Footer from "./components/7-footer/Footer";
import Header from "./components/1-header/Header";
import Intro from "./components/2-intro/Intro";
import Portfolio from "./components/4-portfolio/Portfolio";
import Testimonials from "./components/6-testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
