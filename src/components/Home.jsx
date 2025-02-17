// import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div name="home" className="flex flex-col justify-center  items-center h-screen bg-gradient-to-r from-blue-600 to-purple-800 text-white px-4">
//       <h1 className="text-4xl leading-tight hover:underline  font-bold mb-6 text-center">
//         Hi there, I'm <span className="text-blue-400">Ebrahim</span>
//       </h1>
//       <p className="text-lg text-center mb-8 block mt-1 leading-tight font-medium text-white hover:underline">
//         As a passionate Software Engineer, I create innovative solutions to
//         real-world problems.
//       </p>

//       <div className="w-full flex justify-center ">
//         <Link to={"project"} smooth={true} duration={100}>
//           <button
//             className="text-white font-bold  border-2 px-6 py-4 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800"
//             type="button"
//           >
//             View Projects{" "}
//             <span className="hover:rotate-90 duration-100 hover:cursor-s-resize">
//               <HiArrowNarrowRight className="ml-3" />
//             </span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import avatarAnimation from "../assets/avatarAnimation.json"; 

const Home = () => {
  return (
    <div
      name="home"
      className="flex flex-col-reverse md:flex-row justify-center items-center h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-black text-white px-6 md:px-16"
    >
      {/* Left Section - Text Content */}
      <motion.div
        className="text-center md:text-left md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Hey there, I'm <span className="text-white">Ebrahim</span> <span role="img" className="text-yellow-400" aria-label="waving-hand">👋</span>
        </h1>
        <p className="text-lg md:text-2xl font-medium text-gray-200 mb-6">
          I'm a Software Engineer passionate about creating fast, scalable, and intuitive applications. <br />
          I specialize in turning complex ideas into smooth, user-friendly experiences that make a real impact.
        </p>

        {/* Button */}
        <Link to="project" smooth={true} duration={500}>
          <motion.button
            className="flex items-center justify-center bg-white text-black font-bold px-6 py-3 rounded-full text-lg shadow-lg transition-all hover:bg-blue-600 hover:text-white hover:scale-105 duration-300 group"
            whileHover={{ scale: 1.1 }}
          >
            Explore My Work
            <HiArrowNarrowRight className="ml-3 group-hover:rotate-90 transition-transform duration-300" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Section - Avatar Image */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-12 w-64 h-64 md:w-80 md:h-80 flex justify-center items-center rounded-full overflow-hidden shadow-2xl border-4 border-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
         <div className="w-64 h-64 md:w-80 md:h-80 flex justify-center items-center">
           {/* Add Lottie animation with hand waving */}
           <Lottie animationData={avatarAnimation} loop={true} />
         </div>
      </motion.div>
    </div>
  );
};

export default Home;
