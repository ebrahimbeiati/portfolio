import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  h-[80vh] pt-14 bg-slate-800 flex flex-col justify-center items-center "
    >
      <div className="text-center m-24 p-33">
        <p className="text-4xl font-bold inline border-b-4 border-blue-700 text-white">
          Contact
        </p>
        <p className="text-white py-6 text-xl">Get in touch</p>
        <h1 className="text-xl md:text-3xl font-bold inline border-b-4 border-blue-500 text-white ">
          ebrahimbeiaty@gmail.com
        </h1>
        <div className="max-w-[480px] flex flex-col">
          <ul className="flex  flex-col items-center  md:flex-row py-6">
            <li className="w-[200px] h-[50px] bg-blue-600">
              <a
                className="flex justify-between p-2 text-white"
                href="https://www.linkedin.com/in/ebrahim-beiatiasl/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[200px] h-[50px] bg-[#565f69] text-white">
              <a
                className="flex justify-between p-2"
                href="https://docs.google.com/document/d/1tSgkNb036hnInrYva7vp6EmWnA9EMXr8Fu53hBh9U7E/edit"
                target="_blank"
                rel="noreferrer"
              >
                CV <BsFillPersonLinesFill size={30} />
              </a>
            </li>
            <li className="w-[200px] h-[50px] bg-[#333333] text-white">
              <a
                className="flex justify-between  p-2"
                href="https://github.com/ebrahimbeiati"
                target="_blank"
                rel="noreferrer"
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
