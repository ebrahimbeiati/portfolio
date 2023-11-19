import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-800 flex flex-col justify-center items-center "
    >
      <div className=" text-center m-24 p-33">
        <p className="text-4xl font-bold inline border-b-4 border-blue-700 text-white">
          Contact
        </p>
        <p className="text-white py-6 text-xl">Get in touch</p>
        <h1 className="text-3xl font-bold inline border-b-4 border-blue-500 text-white ">
          ebrahimbeiaty@gmail.com
        </h1>
        <div>
          <ul className="flex space-x-4 py-6">
            <li className="w-[130px] h-[50px] bg-blue-600">
              <a
                className="flex justify-between items-center p-2 text-white text-l"
                href="https://www.linkedin.com/in/ebrahim-beiati-asl-834216105/"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[130px] h-[50px] bg-[#565f69] text-white">
              <a className="flex justify-between items-center p-2" href="/">
                CV <BsFillPersonLinesFill size={30} />
              </a>
            </li>
            <li className="w-[130px] h-[50px] bg-[#333333] text-white">
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

    <div className="bg-gray-900 text-white py-6 mt-auto w-full">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-2xl font-bold">Portfolio</div>
       
          <p className="text-sm">&copy; {new Date().getFullYear()} Ebrahim Beiati-Asl. All rights reserved.</p>
        
      </div>
    </div>


    </div>
  );
};

export default Contact;
