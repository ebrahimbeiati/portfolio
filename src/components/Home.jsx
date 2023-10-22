import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-800">
      {/*Container */}
   <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-yellow-600 py-17">Hi, my name is</p>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
        <h1 className="text-[#162541] text-4xl sm:text-7xl font-bold text-center py-12">
          Ebrahim Beiati-Asl
        </h1>
      </div>

      <h2 className="text-[#e3e5e9] text-4xl sm:text-7xl font-bold text-center">
        I am a Full Stack Developer.
      </h2>
      <p className="text-[#dbdee2] py-4 mx-w-[700px] text-center">
        I am a passionate Fullstack Developer with expertise in front-end and
        back-end technologies. My portfolio demonstrates dynamic web apps and
        UI mastery using HTML, CSS, and JavaScript with frameworks like
        React, Angular, or Vue.js. I am proficient in server-side programming and
        database management, creating robust APIs and ensuring seamless
        communication between systems.
      </p>
    </div>
          <button
            className="text-white  group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500"
            type="button"
          >
            View Projects{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      
  );
}

export default Home;