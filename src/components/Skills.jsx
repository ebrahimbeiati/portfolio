// import React from 'react';
// import aws from "../assets/aws.png";
// import github from "../assets/github.png";
// import HTML from "../assets/html.png";
// import CSS from "../assets/css.png";
// import JavaScript from "../assets/javascript.png";
// import react from "../assets/react.png";
// import node from "../assets/node.png";
// import tailwind from "../assets/tailwind.png";
// import nextjs from "../assets/nextjs.svg";
// import typescript from "../assets/typescript.svg";
// import figma from "../assets/figma.svg";
// import webflow from "../assets/webflow.jpg";

// const Skills = () => {
//   return (
//     <div
//       id="skills"
//       className="w-full min-h-screen  bg-gradient-to-br  from-black via-blue-700 to-purple-700 py-28 px-4 relative"
//     >
//       {/* Centralized Title */}
//       <div className="max-w-[1200px] mx-auto text-center mb-12">
//         <p className="text-4xl font-extrabold text-white border-b-4 border-blue-500 inline-block pb-2 mb-4">
//           My Skills
//         </p>
//         <p className="text-lg md:text-xl text-gray-300 font-medium">
//           Technologies I've mastered and frequently use:
//         </p>
//       </div>

//       {/* Circular Layout */}
//       <div className="absolute top-52 inset-0 flex justify-center items-center">
//         <div className="relative w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-800 via-slate-600 to-slate-800 shadow-lg p-6">
//           {/* Circle Content */}
//           <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center text-white z-10">
//             <h2 className="text-2xl font-bold mb-2">Technologies</h2>
//             <p className="text-sm opacity-80">Mastered Technologies</p>
//           </div>
          
//           {/* Skills Circulating Around */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
//             <div className="absolute top-[40%] left-[40%] transform translate-x-[-50%] translate-y-[-50%]  ">
//               {[
//                 { name: 'HTML', icon: HTML },
//                 { name: 'AWS', icon: aws },
//                 { name: 'GitHub', icon: github },
//                 { name: 'CSS', icon: CSS },
//                 { name: 'JavaScript', icon: JavaScript },
//                 { name: 'React', icon: react },
//                 { name: 'Node.js', icon: node },
//                 { name: 'Tailwind', icon: tailwind },
//                 { name: 'Next.js', icon: nextjs },
//                 { name: 'TypeScript', icon: typescript },
//                 { name: 'Figma', icon: figma },
//                 { name: 'Webflow', icon: webflow }
//               ].map((skill, index) => (
//                 <div
//                   key={index}
//                   className="absolute"
//                   style={{
//                     transform: `rotate(${(index * 30)}deg) translateY(-220px)` // Increased translateY for more space
//                   }}
//                 >
//                   <div className="group relative p-6 rounded-full shadow-lg hover:scale-110 transition-all duration-300 transform hover:rotate-8  hover:shadow-blue-600">
//                     <img className="w-12 h-12" src={skill.icon} alt={`${skill.name} Icon`} />
//                     <p className="text-center mt-4 text-white">{skill.name}</p>
//                     {/* Tooltip with Skill Description */}
//                     <div className="group-hover:block hidden absolute top-[-50px] left-[-50%] transform translate-x-[-50%] bg-black text-white text-xs rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                       {skill.name} Skill
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

// import React from "react";
// import aws from "../assets/aws.png";
// import github from "../assets/github.png";
// import HTML from "../assets/html.png";
// import CSS from "../assets/css.png";
// import JavaScript from "../assets/javascript.png";
// import react from "../assets/react.png";
// import node from "../assets/node.png";
// import tailwind from "../assets/tailwind.png";
// import nextjs from "../assets/nextjs.svg";
// import typescript from "../assets/typescript.svg";
// import figma from "../assets/figma.svg";
// import webflow from "../assets/webflow.jpg";

// const skills = [
//   { name: "HTML", icon: HTML },
//   { name: "AWS", icon: aws },
//   { name: "GitHub", icon: github },
//   { name: "CSS", icon: CSS },
//   { name: "JavaScript", icon: JavaScript },
//   { name: "React", icon: react },
//   { name: "Node.js", icon: node },
//   { name: "Tailwind", icon: tailwind },
//   { name: "Next.js", icon: nextjs },
//   { name: "TypeScript", icon: typescript },
//   { name: "Figma", icon: figma },
//   { name: "Webflow", icon: webflow },
// ];

// const Skills = () => {
//   return (
//     <div
//       id="skills"
//       className="w-full min-h-screen bg-gradient-to-br from-black via-blue-700 to-purple-700 py-20 px-4 relative"
//     >
//       {/* Title */}
//       <div className="max-w-[1200px] mx-auto text-center mb-12">
//         <p className="text-3xl sm:text-4xl font-extrabold text-white border-b-4 border-blue-500 inline-block pb-2">
//           My Skills
//         </p>
//         <p className="text-md sm:text-lg text-gray-300 mt-2">
//           Technologies I've mastered and frequently use:
//         </p>
//       </div>

//       {/* Skills Circle */}
//       <div className="flex justify-center items-center">
//         <div className="relative w-[90vw] max-w-xs sm:max-w-md md:max-w-lg aspect-square bg-gradient-to-br from-gray-800 via-slate-600 to-slate-800 shadow-lg rounded-full flex justify-center items-center p-6">
//           {/* Center Text */}
//           <div className="absolute text-white text-center">
//             <h2 className="text-lg sm:text-2xl font-bold">Technologies</h2>
//             <p className="text-xs sm:text-sm opacity-80">Mastered Technologies</p>
//           </div>

//           {/* Icons Positioned Around the Circle */}
//           {skills.map((skill, index) => {
//             const angle = (index * (360 / skills.length)) * (Math.PI / 180);
//             const radius = window.innerWidth < 640 ? 100 : 150; // Dynamic radius based on screen size
//             const x = Math.cos(angle) * radius;
//             const y = Math.sin(angle) * radius;

//             return (
//               <div
//                 key={index}
//                 className="absolute flex flex-col items-center"
//                 style={{
//                   transform: `translate(${x}px, ${y}px)`,
//                 }}
//               >
//                 <div className="group relative p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 transform hover:rotate-8 hover:shadow-blue-600">
//                   <img className="w-10 sm:w-12 h-10 sm:h-12" src={skill.icon} alt={skill.name} />
//                 </div>
//                 <p className="text-xs sm:text-sm text-white mt-2">{skill.name}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from "react";
import { motion } from "framer-motion";
import aws from "../assets/aws.png";
import github from "../assets/github.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.svg";
import typescript from "../assets/typescript.svg";
import figma from "../assets/figma.svg";
import webflow from "../assets/webflow.jpg";

const skills = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "React", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "Node.js", icon: node },
  { name: "TypeScript", icon: typescript },
  { name: "AWS", icon: aws },
  { name: "GitHub", icon: github },
  { name: "Tailwind", icon: tailwind },
  { name: "Figma", icon: figma },
  { name: "Webflow", icon: webflow },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-gradient-to-br from-black via-blue-700 to-purple-700 py-20 px-4 relative"
    >
          <div className="text-center mt-16 flex flex-col items-start justify-center">
        <div className="text-5xl text-white border-b-4 border-blue-500">
          My Skills
        </div>
        <p className="text-lg text-gray-300 mt-2">
          Technologies I work with:
        </p>
      </div>
  
      {/* Desktop - Circular Skill Layout */}
      <div className="hidden md:flex justify-center relative w-full h-[600px]">
        {/* Background Circle for Skills */}
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-gray-700 via-slate-600 to-slate-800 shadow-lg rounded-full">
          
          {/* Circle Content (Skills) */}
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="absolute w-40 h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-es-3xl flex justify-center items-center shadow-lg group"
              style={{
                top: `${50 + 50 * Math.sin((index / skills.length) * 2 * Math.PI)}%`,
                left: `${50 + 50 * Math.cos((index / skills.length) * 2 * Math.PI)}%`,
                transform: `translate(-50%, -50%)`,
              }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(255, 255, 255, 0.4)",
                  "0 0 30px rgba(255, 255, 255, 0.8)",
                  "0 0 15px rgba(255, 255, 255, 0.4)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut", // Smooth transition for shining
              }}
            >
              
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
              {/* Name Visible on Shine */}
              <motion.div
                className="absolute top-[70%] left-[50%] transform -translate-x-1/2 text-center text-white opacity-0 group-hover:opacity-100"
                style={{
                  fontSize: "14px",
                  padding: "4px",
                  whiteSpace: "nowrap",
                }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                {skill.name}
              </motion.div>
            </motion.div>
            
          ))}
        </div>
        
      </div>

      {/* Mobile - Floating Cards with Shine Effect */}
      <div className="md:hidden grid grid-cols-2 gap-8 max-w-3xl relative">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-xl bg-gray-900/80 border border-blue-500 hover:shadow-blue-500 transition-all duration-300 backdrop-blur-lg group"
            animate={{
              boxShadow: [
                "0 0 10px rgba(255, 255, 255, 0.4)",
                "0 0 20px rgba(255, 255, 255, 1)",
                "0 0 10px rgba(255, 255, 255, 0.4)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-3"
            />
            {/* Name Visible on Shine */}
            <motion.div
              className="text-center text-white opacity-0 group-hover:opacity-100 mt-4 text-sm"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              {skill.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
