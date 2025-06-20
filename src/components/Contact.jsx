import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaGlobe, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Lottie from "lottie-react";
import contactAvatar from "../assets/contactAvatar.json";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ebrahimbeiaty@gmail.com",
      link: "mailto:ebrahimbeiaty@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Send me an email anytime"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-green-500 to-emerald-500",
      description: "Call or text me directly"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Remote / Worldwide",
      link: null,
      color: "from-purple-500 to-pink-500",
      description: "Available for remote work"
    },
    {
      icon: <FaGlobe />,
      title: "Timezone",
      value: "EST / UTC-5",
      link: null,
      color: "from-orange-500 to-red-500",
      description: "My working hours"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ebrahim-beiatiasl/",
      color: "from-blue-600 to-blue-700",
      description: "Connect professionally"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/ebrahimbeiati",
      color: "from-gray-800 to-gray-900",
      description: "Check out my code"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/ebrahimbeiati",
      color: "from-sky-500 to-blue-500",
      description: "Follow my updates"
    },
    {
      icon: <BsFillPersonLinesFill />,
      name: "Resume",
      url: "https://docs.google.com/document/d/1irEjxDuGbjoot0QqgylYygHa9Ent04D4Deh6ulPIrHw/edit?usp=sharing",
      color: "from-orange-500 to-red-500",
      description: "Download my resume"
    }
  ];

  return (
    <section
      name="contact"
      className="w-full min-h-screen bg-gradient-to-br from-purple-700 via-black to-blue-700 py-12 md:py-20 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Lottie Animation - Above Header */}
      <motion.div
        className="flex justify-center mb-8 md:mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Lottie
          animationData={contactAvatar}
          loop={true}
          className="w-32 h-32 md:w-48 md:h-48"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-0">
        {/* Section Header */}
        <motion.div
          className="text-center text-white mb-8 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to bring your ideas to life? I'm always excited to collaborate on new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Left Side - Contact Information */}
          <motion.div
            className="space-y-4 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                <FaEnvelope className="text-purple-400" />
                Get In Touch
              </h3>
              
              <div className="grid gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base md:text-lg font-semibold text-white mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm md:text-lg font-medium block mb-1 break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm md:text-lg font-medium mb-1">{info.value}</p>
                        )}
                        <p className="text-gray-400 text-xs md:text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Social Links & Animation */}
          <motion.div
            className="space-y-4 md:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Social Links */}
            <div className="glass-card rounded-2xl p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                <FaDownload className="text-green-400" />
                Connect & Follow
              </h3>
              
              <div className="grid gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-3 md:p-4 bg-gradient-to-r ${social.color} text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                      <div>
                        <span className="font-semibold text-sm md:text-lg block">{social.name}</span>
                        <span className="text-xs md:text-sm opacity-80">{social.description}</span>
                      </div>
                    </div>
                    <span className="text-sm md:text-lg opacity-80 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Contact Card */}
            <motion.div
              className="glass-card rounded-2xl p-4 md:p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Ready to Start a Project?</h3>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                Let's discuss your ideas and bring them to life together.
              </p>
              <motion.a
                href="mailto:ebrahimbeiaty@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Send Email
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
