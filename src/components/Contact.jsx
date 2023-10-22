import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-800 flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] ">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-yellow-500 
         text-white"
          >
            Contact
          </p>

          <p className="text-white py-6">Get in touch</p>
          <ul>
            <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px]   bg-blue-600">
              <a
                className="flex justify-between items-center "
                href="https://www.linkedin.com/in/ebrahim-beiati-asl-834216105/"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
              <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px]  bg-[#565f69] ">
                <a className="flex justify-between items-center " href="/">
                  CV <BsFillPersonLinesFill size={30} />
                </a>
              </li>
              <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] bg-[#333333]">
                <a className="flex justify-between items-center " href="/">
                  Github <FaGithub size={30} />
                </a>
              </li>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Contact;