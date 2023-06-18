import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
