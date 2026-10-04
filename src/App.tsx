import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Projects />
        <WhatIDo />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}