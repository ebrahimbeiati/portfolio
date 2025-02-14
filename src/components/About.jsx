import { motion } from "framer-motion";
import { HiOutlineCode } from "react-icons/hi";

const About = () => {
  return (
    <div name="about" className="w-full  min-h-screen bg-black py-16 sm:py-28 bg-gradient-to-br from-purple-700 via-black to-blue-700">
      {/* Gradient Background for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-800 opacity-50 z-[-1]" />
      
      {/* Main Content Container */}
      <div className="w-full max-w-screen-xl mx-auto mt-14 flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-8">
        
        {/* Left Side - About Info */}
        <motion.div
          className="flex-1 text-white space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300">I’m</h2>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Ebrahim Beiati-Asl
          </h2>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-200">
            The Developer Behind the Code
          </h2>

          <p className="text-gray-300 text-sm sm:text-lg">
            Passionate about solving problems and transforming ideas into reality, I’m a Full Stack Developer who thrives on the challenge of creating intuitive, scalable applications.
          </p>

          <p className="text-gray-200 text-sm sm:text-lg">
            Development isn’t just about writing code—it’s about crafting experiences. Whether it’s a seamless UI or a robust backend, my goal is to create meaningful and impactful products.
          </p>

          <div className="flex justify-center md:justify-start mt-6">
            <motion.button
              className="w-full sm:w-auto bg-blue-600 text-white text-base sm:text-lg py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <HiOutlineCode className="mr-2" />
              Let's Build Something Great
            </motion.button>
          </div>
        </motion.div>
        
        {/* Right Side - Profile Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://github.com/ebrahimbeiati.png"
              alt="Ebrahim Beiati-Asl"
              className="w-full h-full object-cover rounded-full border-4 border-gray-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
