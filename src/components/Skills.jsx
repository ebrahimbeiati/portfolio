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
    <div
      id="skills"
      className="w-full bg-slate-700 text-gray-300 text-center text-bold py-28"
    >
      {/*container*/}
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center w-ful h-full ">
        <div className="text-center my-4">
          <p className="text-4xl font-bold inline border-b-4 text-white border-blue-700  text-center">
            Skills
          </p>
          <p className="text-lg text-center mb-8 block  leading-tight font-medium text-white my-6">
            These are the technologies I've worked with:
          </p>
        </div>
      </div>
      <div className="w-full px-4 grid grid-cols-4 sm:grid-cols-4 gap-4 text-center pt-2 pb-14">
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