import React from 'react';
import aws from "../assets/aws.png";
import github from "../assets/github.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.svg";
import typescript from "../assets/typescript.svg";
import figma from "../assets/figma.svg";
import webflow from "../assets/webflow.jpg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen  bg-gradient-to-br  from-black via-blue-700 to-purple-700 py-28 px-4 relative"
    >
      {/* Centralized Title */}
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <p className="text-4xl font-extrabold text-white border-b-4 border-blue-500 inline-block pb-2 mb-4">
          My Skills
        </p>
        <p className="text-lg md:text-xl text-gray-300 font-medium">
          Technologies I've mastered and frequently use:
        </p>
      </div>

      {/* Circular Layout */}
      <div className="absolute top-52 inset-0 flex justify-center items-center">
        <div className="relative w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-800 via-slate-600 to-slate-800 shadow-lg p-6">
          {/* Circle Content */}
          <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center text-white z-10">
            <h2 className="text-2xl font-bold mb-2">Technologies</h2>
            <p className="text-sm opacity-80">Mastered Technologies</p>
          </div>
          
          {/* Skills Circulating Around */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="absolute top-[40%] left-[40%] transform translate-x-[-50%] translate-y-[-50%]  ">
              {[
                { name: 'HTML', icon: HTML },
                { name: 'AWS', icon: aws },
                { name: 'GitHub', icon: github },
                { name: 'CSS', icon: CSS },
                { name: 'JavaScript', icon: JavaScript },
                { name: 'React', icon: react },
                { name: 'Node.js', icon: node },
                { name: 'Tailwind', icon: tailwind },
                { name: 'Next.js', icon: nextjs },
                { name: 'TypeScript', icon: typescript },
                { name: 'Figma', icon: figma },
                { name: 'Webflow', icon: webflow }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `rotate(${(index * 30)}deg) translateY(-220px)` // Increased translateY for more space
                  }}
                >
                  <div className="group relative p-6 rounded-full shadow-lg hover:scale-110 transition-all duration-300 transform hover:rotate-8  hover:shadow-blue-600">
                    <img className="w-12 h-12" src={skill.icon} alt={`${skill.name} Icon`} />
                    <p className="text-center mt-4 text-white">{skill.name}</p>
                    {/* Tooltip with Skill Description */}
                    <div className="group-hover:block hidden absolute top-[-50px] left-[-50%] transform translate-x-[-50%] bg-black text-white text-xs rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {skill.name} Skill
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
