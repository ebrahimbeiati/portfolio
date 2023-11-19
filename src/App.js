// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from './components/Skills';
// import Projects from './components/Projects.jsx'
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import './App.css'

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
 import React from "react";
 import { Element } from "react-scroll";
 import Navbar from "./components/Navbar";
 import Home from "./components/Home";
 import About from "./components/About";
 import Skills from "./components/Skills";
 import Projects from "./components/Projects.jsx";
 import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
 import './index.css'


 function App() {
   return (
     <div>
       <Navbar />
       <Element name="home">
         <Home />
       </Element>
       <Element name="about">
         <About />
       </Element>
       <Element name="skills">
         <Skills />
       </Element>
       <Element name="projects">
         <Projects />
       </Element>
       <Element name="contact">
         <Contact />
       </Element>
       {/* <Footer /> */}
       <ScrollToTopButton />
     </div>
   );
 }

 export default App;
