import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaLaptopCode, FaServer, FaCloud, FaRocket, FaStar, FaHeart, FaLightbulb } from "react-icons/fa";

const timelineData = [
  { 
    year: "2019", 
    icon: <FaGraduationCap />, 
    title: "First Steps", 
    description: "Started my journey with HTML, CSS, and JavaScript fundamentals.",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    year: "2020", 
    icon: <FaBook />, 
    title: "Full-Stack Learning", 
    description: "Built my first complete React & Node.js application.",
    color: "from-purple-500 to-pink-500"
  },
  { 
    year: "2021", 
    icon: <FaServer />, 
    title: "Backend Mastery", 
    description: "Deep dive into databases, APIs, and server-side development.",
    color: "from-green-500 to-emerald-500"
  },
  { 
    year: "2022", 
    icon: <FaCloud />, 
    title: "Cloud & DevOps", 
    description: "Explored AWS, Docker, and modern deployment practices.",
    color: "from-orange-500 to-red-500"
  },
  { 
    year: "2023", 
    icon: <FaLaptopCode />, 
    title: "Advanced Frontend", 
    description: "Mastered React optimization and modern web technologies.",
    color: "from-indigo-500 to-purple-500"
  },
  { 
    year: "2024", 
    icon: <FaRocket />, 
    title: "Scaling Solutions", 
    description: "Building high-performance, scalable web applications.",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    year: "2025+", 
    icon: <FaStar />, 
    title: "Future Vision", 
    description: "Leading innovative projects and mentoring the next generation.",
    color: "from-pink-500 to-rose-500"
  },
];

const About = () => (
  <section
    id="about"
    className="w-full min-h-screen bg-gradient-to-br from-purple-700 via-black to-blue-700 py-20 relative"
    aria-labelledby="about-heading"
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
          id="about-heading"
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A passionate Full-Stack Developer with a love for creating innovative solutions and turning ideas into reality.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Side - Personal Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaHeart className="text-red-400" />
              My Passion
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm passionate about solving complex problems and creating user-centric applications that make a difference. 
              Every line of code I write is driven by the desire to build something meaningful and impactful.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaLightbulb className="text-yellow-400" />
              My Approach
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Clean, maintainable code with best practices</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">User-first design with exceptional UX</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Scalable architecture for future growth</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Performance optimization and testing</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Profile Image */}
            <motion.div
              className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://github.com/ebrahimbeiati.png"
                alt="Ebrahim Beiati-Asl"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-lg">⚛️</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <span className="text-white text-lg">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            My Journey
          </span>
        </h3>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8 + index * 0.1,
                duration: 0.6
              }}
              whileHover={{ y: -10 }}
            >
              {/* Timeline Card */}
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl">{item.icon}</span>
                  </div>

                  {/* Year */}
                  <div className="text-2xl font-bold text-white mb-2">{item.year}</div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              </div>

              {/* Connection Line (for desktop) */}
              {index < timelineData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
