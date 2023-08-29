import React from 'react'
import aws from "../assets/aws.png";
import github from "../assets/github.png"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full  bg-slate-700  text-gray-300 ">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-ful h-full">
        <div>
          <p className="text-4xl  inline border-b-4 border-yellow-500">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with:</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
          <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={aws} alt="HTML Icon" />
          <p className="my-4">AWS</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={github} alt="HTML Icon" />
          <p className="my-4">GITHUB</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={CSS} alt="HTML Icon" />
          <p className="my-4">CSS</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={JavaScript} alt="HTML Icon" />
          <p className="my-4">JAVASCRIPT</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={react} alt="HTML Icon" />
          <p className="my-4">REACT</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={node} alt="HTML Icon" />
          <p className="my-4">NODE</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={tailwind} alt="HTML Icon" />
          <p className="my-4">TAILWIND</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;