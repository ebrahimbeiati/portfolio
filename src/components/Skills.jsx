import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaPalette, FaCloud, FaDatabase } from "react-icons/fa";
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

const skillCategories = [
  {
    name: "Frontend Development",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", icon: HTML, level: 95, description: "Semantic markup and web structure" },
      { name: "CSS", icon: CSS, level: 90, description: "Styling and responsive design" },
      { name: "JavaScript", icon: JavaScript, level: 88, description: "Dynamic web functionality" },
      { name: "React", icon: react, level: 92, description: "Component-based UI development" },
      { name: "Next.js", icon: nextjs, level: 85, description: "Full-stack React framework" },
      { name: "TypeScript", icon: typescript, level: 80, description: "Typed JavaScript superset" },
    ]
  },
  {
    name: "Backend & Database",
    icon: <FaDatabase />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: node, level: 85, description: "Server-side JavaScript runtime" },
      { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", level: 82, description: "NoSQL database management" },
      { name: "Express.js", icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg", level: 80, description: "Web application framework" },
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: <FaCloud />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS", icon: aws, level: 78, description: "Cloud computing services" },
      { name: "GitHub", icon: github, level: 90, description: "Version control and collaboration" },
      { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker.svg", level: 75, description: "Containerization platform" },
    ]
  },
  {
    name: "Design & Tools",
    icon: <FaPalette />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", icon: tailwind, level: 88, description: "Utility-first CSS framework" },
      { name: "Figma", icon: figma, level: 85, description: "Design and prototyping tool" },
      { name: "Webflow", icon: webflow, level: 80, description: "No-code web design platform" },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6
      }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Skill Icon */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {skill.name}
          </h4>
          <p className="text-sm text-gray-400">{skill.description}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-sm text-gray-300 mb-2">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{
              delay: 0.5 + index * 0.1,
              duration: 1,
              ease: "easeOut"
            }}
          />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-br from-black via-blue-700 to-purple-700 py-20 relative"
      aria-labelledby="skills-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center text-white mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              My Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              My passion for learning drives me to explore new frameworks, tools, and methodologies 
              to deliver the best possible solutions for every project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
