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
import { FaGraduationCap, FaGithub, FaBookReader, FaCloud, FaStar } from "react-icons/fa";
import freecodecamp from "../assets/freecodecamp.svg";
import udemy from "../assets/udemy.svg";
import cyf from "../assets/cyf.png";
import github from "../assets/github.png";  

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-br from-purple-700 via-black to-blue-700 py-16 sm:py-28 text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-800 opacity-40 z-[-1]" />

      <div className="w-full max-w-screen-xl mx-auto mt-14 px-4 sm:px-8">

        {/* Hero Section */}
        <motion.section
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            My Journey in Tech 🚀
          </h2>
          <p className="text-xl sm:text-2xl max-w-xl mx-auto text-gray-200">
            From my first line of code to exploring cloud technologies—this journey is all about learning, creating, and evolving.
          </p>
        </motion.section>

        {/* Timeline Around Image */}
        <section className="py-16 relative">
          <div className="flex flex-col items-center justify-center">
            
            {/* Image Section */}
            <motion.div
              className="w-48 h-48 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://github.com/ebrahimbeiati.png"
                alt="Ebrahim Beiati-Asl"
                className="w-full h-full object-cover rounded-full border-4 border-gray-700"
              />
            </motion.div>

            {/* Timeline Entries */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 sm:px-12">
              {/* 2019 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center sm:justify-between">
                  <FaGraduationCap className="text-4xl text-purple-400" />
                  <span className="text-lg font-semibold text-gray-300">2019: The First Line of Code</span>
                </div>
                <p className="text-gray-400 mt-3 text-center">Started learning basic HTML, CSS, and JavaScript, building small static websites for fun.</p>
              </motion.div>

              {/* 2020 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center sm:justify-between">
                  <FaBookReader className="text-4xl text-purple-400" />
                  <span className="text-lg font-semibold text-gray-300">2020: Full-Stack Development</span>
                </div>
                <p className="text-gray-400 mt-3 text-center">Joined CodeYourFuture and built my first full-stack web app using React, Node.js, and PostgreSQL.</p>
              </motion.div>

              {/* 2021 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center sm:justify-between">
                  <FaCloud className="text-4xl text-purple-400" />
                  <span className="text-lg font-semibold text-gray-300">2021: Cloud & DevOps Exploration</span>
                </div>
                <p className="text-gray-400 mt-3 text-center">Started working with AWS, Docker, and CI/CD pipelines to deploy cloud applications.</p>
              </motion.div>

              {/* 2022 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center sm:justify-between">
                  <FaStar className="text-4xl text-purple-400" />
                  <span className="text-lg font-semibold text-gray-300">2022: Mastering JavaScript & React</span>
                </div>
                <p className="text-gray-400 mt-3 text-center">Refined my JavaScript and React skills, focusing on component-driven architecture and modern JS practices.</p>
              </motion.div>

              {/* 2023 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center sm:justify-between">
                  <FaGraduationCap className="text-4xl text-purple-400" />
                  <span className="text-lg font-semibold text-gray-300">2023: Expanding Backend Knowledge</span>
                </div>
                <p className="text-gray-400 mt-3 text-center">Focused on expanding backend skills with Express.js, PostgreSQL, and Node.js, learning advanced server-side architecture.</p>
              </motion.div>

              {/* 2024 */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center sm:justify-between">
                  <FaCloud className="text-4xl text-purple-400" />
                  <span className="text-lg font-semibold text-gray-300">2024: Current Focus - Cloud & Full Stack</span>
                </div>
                <p className="text-gray-400 mt-3 text-center">Currently honing my expertise in Next.js, GraphQL, and AWS to deliver scalable, high-performance applications.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learning Tools and Resources */}
        <section className="py-16 bg-gradient-to-r from-purple-700 via-black to-blue-700">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8 text-center">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              Tools & Resources That Shaped My Learning
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div>
                <img
                  src={freecodecamp}
                  alt="freeCodeCamp"
                  className="mx-auto w-24 h-24"
                />
                <p className="text-white mt-3">freeCodeCamp</p>
              </div>
              <div>
                <img
                  src={udemy}
                  alt="Udemy"
                  className="mx-auto w-24 h-24"
                />
                <p className="text-white mt-3">Udemy</p>
              </div>
              <div>
                <img
                  src={cyf}
                  alt="CodeYourFuture"
                  className="mx-auto w-24 h-24"
                />
                <p className="text-white mt-3">CodeYourFuture</p>
              </div>
              <div>
                <img
                  src={github}
                  alt="React"
                  className="mx-auto w-24 h-24"
                />
                <p className="text-white mt-3">GitHub</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
