import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Lottie from "lottie-react";
import contactAvatar from "../assets/contactAvatar.json"; // Assuming contactAvatar.json is in your assets

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex flex-col-reverse md:flex-row justify-center items-center h-screen bg-gradient-to-br from-purple-700 via-black to-blue-700 text-white px-6 md:px-16"
    >
      <div className="text-center p-8 md:p-12">
        <div className="flex justify-center items-center mb-6">
          {/* Lottie Animation */}
          <Lottie
            animationData={contactAvatar}
            loop={true}
            className="w-40 h-40 md:w-56 md:h-56"
          />
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect!</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Feel free to reach out for collaboration or just to say hi. I'm always open to new opportunities and connections!
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold text-white border-b-4 border-blue-500 inline-block pb-2 mb-8">
          ebrahimbeiaty@gmail.com
        </h1>

        {/* Social Links */}
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-6">
          <a
            className="flex items-center justify-center w-48 h-12 bg-blue-600 text-white font-bold rounded-lg shadow-lg transform transition-all hover:bg-blue-700 hover:scale-105"
            href="https://www.linkedin.com/in/ebrahim-beiatiasl/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} className="mr-3" />
            LinkedIn
          </a>
          <a
            className="flex items-center justify-center w-48 h-12 bg-gray-700 text-white font-bold rounded-lg shadow-lg transform transition-all hover:bg-gray-600 hover:scale-105"
            href="https://drive.google.com/file/d/1Sd60qvCK2cqbgmY5Dt_vOtV_v2mki4yr/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            <BsFillPersonLinesFill size={30} className="mr-3" />
            CV
          </a>
          <a
            className="flex items-center justify-center w-48 h-12 bg-gray-900 text-white font-bold rounded-lg shadow-lg transform transition-all hover:bg-black hover:scale-105"
            href="https://github.com/ebrahimbeiati"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} className="mr-3" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
