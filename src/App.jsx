import React from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/3-skills/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/1-header/Header";
import Intro from "./components/2-intro/Intro";
import Portfolio from "./components/4-portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
