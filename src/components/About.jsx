import { motion } from "framer-motion";
import { HiOutlineCode } from "react-icons/hi";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen relative bg-black px-6 py-20 bg-gradient-to-br  from-purple-700 via-black to-blue-700 ">
      {/* Gradient Background for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-800 opacity-50 z-[-1]" />
      
      {/* Main Content Container */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left Side - About Info */}
        <motion.div
          className="flex-1 text-white space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-300">  I’m</h2>
           <h2 className="text-4xl sm:text-5xl ml-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
           Ebrahim Beiati-Asl
          </h2>
          <h2 className="text-3xl ml-14 sm:text-3xl font-bold text-gray-200">
          the Developer Behind the Code
          </h2>

          <p className="text-xl text-gray-300">
            Passionate about solving problems and transforming ideas into reality, I’m a Full Stack Developer who thrives on the challenge of creating intuitive, scalable applications.
          </p>

          <p className="text-gray-200">
            For me, development is about more than just writing code. It’s about crafting experiences — whether it’s a seamless user interface or a robust backend that powers it all. It’s about balance, functionality, and above all, <strong>impact</strong>.
          </p>

          <p className="text-gray-300 font-semibold">
            I take pride in building products that work for the user and for the problem at hand. My goal is simple: create things that are not only functional but meaningful. That’s where I believe the true power of technology lies.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <motion.button
              className="bg-blue-600 text-white text-lg py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <HiOutlineCode className="mr-2" />
              Let's Make Something Great Together
            </motion.button>
          </div>
        </motion.div>
        
        {/* Right Side - Profile Image & Animation */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-60 z-[-1]" />
            <img
  src="https://github.com/ebrahimbeiati.png"  // GitHub profile picture URL
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
