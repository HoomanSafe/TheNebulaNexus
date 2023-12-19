import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Mics from "./components/MIcs";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="min-h-screen w-full relative bg-purple text-white">
      <Header />
      <Hero />
      <About />
      <Mics />
      <Footer />
    </section>
  );
}

export default App;
