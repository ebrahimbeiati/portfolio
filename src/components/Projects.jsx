import React from "react";
import Shopping  from '../assets/screenshots/Shopping.png';
import Todo  from '../assets/screenshots/Todo.png';
import Article from '../assets/screenshots/Article.png';
import Movie from '../assets/screenshots/Movie.png';
import Nature from '../assets/screenshots/Nature.png';
import Portfolio from '../assets/screenshots/Portfolio.png';



const Projects = () => {
   
    return (
      // <div
      //   name="project"
      //   className="w-full h-screen project-card text-white bg-slate-800 flex flex-col justify-center items-center"
      // >
      //   <div className="max-w-[1000px] max-auto p-4 flex flex-col  w-full h-full">
      <div
        name="project"
        className="w-full h-screen text-white bg-slate-800 flex flex-col justify-center items-center"
      >
        <div className="max-w-[1000px] max-auto p-4 flex flex-col w-full h-full">
          <div className=" py-16 text-center">
            {" "}
            {/* Added text-center class */}
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-700 text-center">
              Projects
            </p>
            <p className=" text-center">
              Check out some of my recent projects
            </p>
          </div>

          {/*container*/}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {/* Grid Item */}
            <div
             
              style={{ backgroundImage: `url(${Shopping})` }}
              className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center text-bold items-center max-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                <span className=" text-black tracking-wider text-3xl font-bold inline border-b-4 border-blue-700 text-center">
                  Online-Shopping
                </span>
                <div className="pt-8 text-center">
                  <div>
                    <a href="https://chimerical-sopapillas-8538be.netlify.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Item */}
            <div
             
              style={{ backgroundImage: `url(${Todo})` }}
              className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
            >
              {/*hover effects*/}

              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                <span className=" text-black tracking-wider text-3xl font-bold inline border-b-4 border-blue-700 text-center">
                  Todo List
                </span>
                <div className="pt-8 text-center">
                  <div>
                    <a href="https://creative-puffpuff-4663eb.netlify.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid Item */}
            <div
              
              style={{ backgroundImage: `url(${Nature})` }}
              className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
            >
              {/*hover effects*/}

              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                <span className=" text-black tracking-wider text-3xl font-bold inline border-b-4 border-blue-700 text-center">
                  About Nature
                </span>
                <div className="pt-8 text-center">
                  <div>
                    <a href="https://jocular-kitsune-c374b8.netlify.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${Movie})` }}
              className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
            >
              {/*hover effects*/}

              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                <span className=" text-black tracking-wider text-2xl font-bold inline border-b-4 border-blue-700 text-center">
                  Movie app
                </span>
                <div className="pt-8 text-center">
                  <div>
                    <a href="https://chipper-valkyrie-4ac46b.netlify.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${Portfolio})` }}
              className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
            >
              {/*hover effects*/}

              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                <span className=" text-black tracking-wider text-2xl font-bold inline border-b-4 border-blue-700 text-center">
                  Portfolio
                </span>
                <div className="pt-8 text-center">
                  <div>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Item */}
            <div className="card">
        <div 
             style={{ backgroundImage: `url(${Article})` }}
              className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
            >
              {/*hover effects*/}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                <span className="text-black tracking-wider text-2xl font-bold inline border-b-4 border-blue-700 text-center">
                  Article
                </span>
                <div className="pt-8 text-center">
                  <div>
                    <a href="https://stirring-hotteok-e04dc2.netlify.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Projects;
