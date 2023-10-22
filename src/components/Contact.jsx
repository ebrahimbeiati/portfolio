import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-800 flex flex-col justify-center items-center p-4"
    >
      <div className="pb-8 text-center">
        <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-white">
          Contact
        </p>
        <p className="text-white py-6">Get in touch</p>
        <div>
          <ul className="flex space-x-4">
            <li className="w-[150px] h-[50px] bg-blue-600">
              <a
                className="flex justify-between items-center p-2"
                href="https://www.linkedin.com/in/ebrahim-beiati-asl-834216105/"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[150px] h-[50px] bg-[#565f69]">
              <a className="flex justify-between items-center p-2" href="/">
                CV <BsFillPersonLinesFill size={30} />
              </a>
            </li>
            <li className="w-[150px] h-[50px] bg-[#333333]">
              <a
                className="flex justify-between items-center p-2"
                href="https://github.com/ebrahimbeiati"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
