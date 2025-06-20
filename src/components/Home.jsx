import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight, HiDownload, HiMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Lottie from "lottie-react";
import avatarAnimation from "../assets/avatarAnimation.json"; // Your waving animation

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "Full-Stack Developer";
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse tracking
  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, fullText]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / innerWidth;
    const y = (clientY - innerHeight / 2) / innerHeight;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      name="home"
      className="relative flex flex-col-reverse md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-black text-white px-4 sm:px-6 md:px-16 py-8 md:py-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Left Section - Enhanced Text Content */}
      <motion.div
        className="text-center md:text-left md:w-1/2 relative z-10 w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 md:mb-4"
        >
          <span className="text-blue-400 font-medium text-sm md:text-base">Welcome to my world</span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 md:mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Hello, I'm{" "}
          </span>
          <span className="text-white">Ebrahim</span>
          <motion.span
            role="img"
            className="text-yellow-400 ml-1 md:ml-2"
            aria-label="waving-hand"
            animate={{ rotate: [0, 14, -8, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            👋
          </motion.span>
        </h1>

        <div className="h-6 md:h-8 lg:h-12 mb-3 md:mb-4">
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-200">
            I'm a{" "}
          </span>
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            {text}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </div>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Passionate about creating smooth and intuitive applications. I specialize in transforming ideas into high-performance solutions using cutting-edge technologies.
        </motion.p>

        {/* Enhanced Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105 duration-300 group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover My Work
              <HiArrowNarrowRight className="ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>

          <motion.button
            className="flex items-center justify-center bg-transparent border-2 border-white text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg hover:bg-white hover:text-black transition-all duration-300 group w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload className="mr-2 md:mr-3 group-hover:translate-y-1 transition-transform duration-300" />
            Download CV
          </motion.button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="flex justify-center md:justify-start gap-4 md:gap-8 mt-6 md:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-blue-400">6+</div>
            <div className="text-xs md:text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-purple-400">3+</div>
            <div className="text-xs md:text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-cyan-400">12+</div>
            <div className="text-xs md:text-sm text-gray-400">Technologies</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section - 3D Interactive Avatar */}
      <motion.div
        className="mt-6 md:mt-10 lg:mt-0 md:ml-8 lg:ml-12 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 flex justify-center items-center relative"
        style={{
          perspective: 1000,
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Lottie 
            animationData={avatarAnimation} 
            loop={true}
            className="w-full h-full"
          />
          
          {/* Floating elements around avatar */}
          <motion.div
            className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white text-xs">⚛️</span>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-purple-500 rounded-full flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <span className="text-white text-xs">🚀</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        
      </motion.div>
    </div>
  );
};

export default Home;
