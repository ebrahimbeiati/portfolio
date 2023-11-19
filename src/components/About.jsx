import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full  h-screen px-4  mx-auto bg-slate-800">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div
          className="max-w-[1000px] w-full grid grid-cols-2 
         gap-8 shadow-2xl "
        >
          <div className="sm:text-right pb-8 pl-4">
            <div className=" p-4 rounded-lg">
              <p className="text-white text-4xl font-bold">About</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold text-white shadow-2xl ">
            <div className=" p-4 rounded-lg">
              <p className="text-white">My name is</p>
              <h1 className="text-white text-2xl sm:text-4xl font-bold">
                Ebrahim Beiati-Asl
              </h1>
              <h2 className="text-white text-lg text-center mb-8 block mt-1 leading-tight font-medium sm:text-4xl ">
                I am Full Stack Developer
              </h2>
            </div>
          </div>
          <div className="text-white shadow-2xl">
            <div className=" p-4 rounded-lg">
              <p>
                Welcome to my portfolio! I'm a dedicated full-stack developer
                with a strong passion for coding and innovation. My projects
                reflect my problem-solving skills, creativity, and attention to
                detail. I'm excited about my next tech career adventure and the
                opportunities to contribute my expertise to your team!
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;