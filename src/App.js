 import React from "react";
 import Navbar from "./components/Navbar";
 import Home from "./components/Home";
 import About from "./components/About";
 import Skills from "./components/Skills";
 import Projects from "./components/Projects.jsx";
 import Contact from "./components/Contact";
 import Footer from "./components/Footer.jsx";
// import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
 import './index.css'
 import { useEffect } from "react";
 import { animateScroll as scroll } from "react-scroll";



 function App() {

  useEffect(() => {
    scroll.scrollToTop();
  }, []);
   return (
     <div>
       <Navbar />

       <Home />

       <About />

       <Skills />

       <Projects />

       <Contact />

       <Footer />
       <ScrollToTopButton />
     </div>
   );
 }

 export default App;
