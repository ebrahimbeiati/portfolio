// import { motion } from "framer-motion";
// import { HiOutlineCode } from "react-icons/hi";

// const About = () => {
//   return (
//     <div name="about" className="w-full  min-h-screen bg-black py-16 sm:py-28 bg-gradient-to-br from-purple-700 via-black to-blue-700">
//       {/* Gradient Background for Depth */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-800 opacity-50 z-[-1]" />
      
//       {/* Main Content Container */}
//       <div className="w-full max-w-screen-xl mx-auto mt-14 flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-8">
        
//         {/* Left Side - About Info */}
//         <motion.div
//           className="flex-1 text-white space-y-6 text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300">I’m</h2>
//           <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//             Ebrahim Beiati-Asl
//           </h2>
//           <h2 className="text-lg sm:text-2xl font-bold text-gray-200">
//             The Developer Behind the Code
//           </h2>

//           <p className="text-gray-300 text-sm sm:text-lg">
//             Passionate about solving problems and transforming ideas into reality, I’m a Full Stack Developer who thrives on the challenge of creating intuitive, scalable applications.
//           </p>

//           <p className="text-gray-200 text-sm sm:text-lg">
//             Development isn’t just about writing code—it’s about crafting experiences. Whether it’s a seamless UI or a robust backend, my goal is to create meaningful and impactful products.
//           </p>

//           <div className="flex justify-center md:justify-start mt-6">
//             <motion.button
//               className="w-full sm:w-auto bg-blue-600 text-white text-base sm:text-lg py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 flex items-center justify-center"
//               whileHover={{ scale: 1.05 }}
//             >
//               <HiOutlineCode className="mr-2" />
//               Let's Build Something Great
//             </motion.button>
//           </div>
//         </motion.div>
        
//         {/* Right Side - Profile Image */}
//         <motion.div
//           className="flex-1 flex justify-center items-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="relative w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 rounded-full overflow-hidden shadow-lg">
//             <img
//               src="https://github.com/ebrahimbeiati.png"
//               alt="Ebrahim Beiati-Asl"
//               className="w-full h-full object-cover rounded-full border-4 border-gray-700"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaLaptopCode, FaServer, FaCloud, FaRocket } from "react-icons/fa";

const timelineData = [
  { year: "2019", icon: <FaGraduationCap />, title: "First Code", description: "Started with HTML, CSS, and JavaScript." },
  { year: "2020", icon: <FaBook />, title: "Full-Stack Journey", description: "Built first React & Node.js app." },
  { year: "2021", icon: <FaServer />, title: "Backend Focus", description: "Exploring databases and APIs." },
  { year: "2022", icon: <FaCloud />, title: "Cloud & DevOps", description: "Worked with AWS, Docker, and CI/CD." },
  { year: "2023", icon: <FaLaptopCode />, title: "Advanced React", description: "Optimized React apps for performance." },
  { year: "2024", icon: <FaRocket />, title: "Scaling Up", description: "Building high-performance web apps." },
];

const About = () => (
  <div
    id="about"
    className="w-full min-h-screen bg-gradient-to-br from-purple-700 via-black to-blue-700 py-20 px-4 relative flex flex-col justify-center"
  >
    {/* Section Title */}
    <div className="text-left mt-16 ">
      <div className="text-5xl text-white border-b-4  border-blue-500 inline-block">
        About Me
      </div>
      <p className="text-lg text-gray-300 mt-2">
        My Journey as a Developer
      </p>
    </div>

    {/* Desktop - Timeline Around Profile Image */}
    <div className="hidden md:flex justify-center relative w-full h-[600px]">
      {/* Profile Image as the Center */}
      <motion.div
        className="relative w-40 h-40 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://github.com/ebrahimbeiati.png"
          alt="Ebrahim Beiati-Asl"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Timeline Items Around the Image */}
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="absolute mt-10 w-40 h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex flex-col justify-center items-center shadow-lg group"
          style={{
            transform: `translate(${220 * Math.cos((index / timelineData.length) * 2 * Math.PI)}px, 
                                  ${220 * Math.sin((index / timelineData.length) * 2 * Math.PI)}px)`,
          }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(255, 255, 255, 0.3)",
              "0 0 20px rgba(255, 255, 255, 0.6)",
              "0 0 10px rgba(255, 255, 255, 0.3)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          {/* Icon */}
          <div className="text-3xl text-purple-400 mb-2">{item.icon}</div>
          {/* Year and Description */}
          <h3 className="text-lg font-semibold text-gray-300">{item.year}</h3>
          <p className="text-gray-400 text-sm text-center">{item.description}</p>
        </motion.div>
      ))}
    </div>

    {/* Mobile - Grid Layout */}
    <div className="md:hidden grid grid-cols-1 gap-6 mt-10">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-xl bg-gray-900/80 border border-blue-500 hover:shadow-blue-500 transition-all duration-300 backdrop-blur-lg group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl text-purple-400 mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold text-white">{item.year} - {item.title}</h3>
          <p className="text-gray-300 text-sm text-center">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default About;
