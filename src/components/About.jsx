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
          <div className='sm:text-right text-4xl font-bold text-white'>
            <p>Hi, I'm Ebrahim, nice to meet you. Please take a look around</p>
          </div>
          <div className='text-white '>
            <p>
              I am a Fullstack Developer, passionate about creating dynamic and
              user-friendly web applications. My portfolio showcases my
              expertise in both front-end and back-end technologies.On the
              front-end, I excel at crafting visually appealing and
              user-friendly interfaces using HTML, CSS, and JavaScript. I
              leverage popular frameworks and libraries like React, Angular, or
              Vue.js to build responsive and intuitive user experiences. In the
              back-end, I am well-versed in server-side programming and database
              management. Whether it's working with Node.js, Python, Ruby on
              Rails, or other backend technologies, I can design robust APIs,
              handle data processing, and ensure smooth communication between
              the front-end and back-end systems. Summaries this
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;