import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaRocket, FaFilter } from "react-icons/fa";
import Shopping from "../assets/screenshots/Shopping.png";
import Article from "../assets/screenshots/Article.png";
import CodeFlash from "../assets/screenshots/CodeFlash.png";
import Portfolio from "../assets/screenshots/Portfolio.png";
import Realestate from "../assets/screenshots/Realestate.png";
import foodLover from "../assets/screenshots/foodLover.png";

const projects = [
  {
    title: "Online Shopping",
    description:
      "A modern e-commerce platform with seamless user experience, secure payments, and responsive design.",
    image: Shopping,
    demoLink: "https://chimerical-sopapillas-8538be.netlify.app/",
    codeLink: "https://github.com/ebrahimbeiati/online-shopping",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "E-commerce",
    featured: true
  },
  {
    title: "Real-Estate Platform",
    description:
      "Full-stack real estate application with property listings, search functionality, and user authentication.",
    image: Realestate,
    demoLink: "https://real-estate-app-fsub.onrender.com/",
    codeLink: "https://github.com/ebrahimbeiati/real-estate-app",
    technologies: ["Vite", "TailwindCSS", "MongoDB", "Firebase"],
    category: "Real Estate",
    featured: true
  },
  {
    title: "Code Flash",
    description:
      "Interactive coding platform for learning and practicing programming challenges with real-time feedback.",
    image: CodeFlash,
    demoLink: "https://codeflash1.netlify.app/",
    codeLink: "https://github.com/ebrahimbeiati/codeFlash",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    category: "Education"
  },
  {
    title: "Great Restaurant",
    description:
      "Restaurant discovery and booking platform with reviews, menus, and location-based recommendations.",
    image: foodLover,
    demoLink: "https://great-restaurant-me.netlify.app/",
    codeLink: "https://github.com/ebrahimbeiati/great-restaurant",
    technologies: ["React", "CSS3", "JavaScript", "HTML5"],
    category: "Food & Dining"
  },
  {
    title: "AI Article Summarizer",
    description:
      "Intelligent article summarization tool using AI to extract key insights and save reading time.",
    image: Article,
    demoLink: "https://article-summarizer-ai2.netlify.app/",
    codeLink: "https://github.com/ebrahimbeiati/article-summarizer",
    technologies: ["React", "AI Integration", "JavaScript", "CSS3"],
    category: "AI Tools"
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio showcasing projects, skills, and professional experience with interactive elements.",
    image: Portfolio,
    demoLink: "/",
    codeLink: "https://github.com/ebrahimbeiati/portfolio",
    technologies: ["React", "TailwindCSS", "Framer Motion", "JavaScript"],
    category: "Portfolio"
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            ⭐ Featured
          </motion.div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEye />
            Live Demo
          </motion.a>
          
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCode />
            Code
          </motion.a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.article>
  );
};

const Projects = React.memo(() => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section
      name="project"
      className="w-full min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-black py-20"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center text-white mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and creative solutions that showcase my passion for building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all" ? "All Projects" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket />
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
