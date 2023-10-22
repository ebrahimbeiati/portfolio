import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-white  text-4xl font-bold inline border-b-4 border-yellow-500">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-white">
            <p className="text-white">Hi, my name is </p>
            <h1 className="text-white text-2xl sm:text-4xl font-bold">
              Ebrahim Beiati-Asl
            </h1>
            <h2 className="text-[#dbdce0] text-2xl sm:text-4xl font-bold">
              I am Full Stack Developer.
            </h2>
          </div>
          <div className="text-white ">
            <p>
              Welcome to my portfolio! I'm a dedicated full-stack developer with
              a strong passion for coding and innovation. My projects reflect my
              problem-solving skills, creativity, and attention to detail. I'm
              excited about my next tech career adventure and the opportunities
              to contribute my expertise to your team!
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;