import React from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Pasos from "./components/Pasos/Pasos";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <main className="hero-home">
        <Header></Header>
        <div className="background-blur"></div>
        <Hero></Hero>
      </main>
      <About></About>
      <Services></Services>
      <Pasos></Pasos>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
