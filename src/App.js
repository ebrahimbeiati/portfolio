import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import SEO from "./components/SEO.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import './index.css'
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

function App() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEO />
        <div className="min-h-screen">
          <header>
            <Navbar />
          </header>
          
          <main role="main">
            <section id="home" aria-label="Home">
              <Home />
            </section>

            <section id="about" aria-label="About">
              <About />
            </section>

            <section id="skills" aria-label="Skills">
              <Skills />
            </section>

            <section id="projects" aria-label="Projects">
              <Projects />
            </section>

            <section id="contact" aria-label="Contact">
              <Contact />
            </section>
          </main>

          <footer>
            <Footer />
          </footer>
          
          <ScrollToTopButton />
        </div>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
