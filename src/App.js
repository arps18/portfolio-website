import React from "react";
import About from "./components/About";
import Card from "./components/Card";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skils";

function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <Card />
      <About />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
