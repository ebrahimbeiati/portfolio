// import React from "react";
// import Shopping  from '../assets/screenshots/Shopping.png';
// import Todo  from '../assets/screenshots/Todo.png';
// import Article from '../assets/screenshots/Article.png';
// import Movie from '../assets/screenshots/Movie.png';
// import Nature from '../assets/screenshots/Nature.png';
// import Portfolio from '../assets/screenshots/Portfolio.png';



// const Projects = () => {
   
//     return (
//       // <div
//       //   name="project"
//       //   className="w-full h-screen project-card text-white bg-slate-800 flex flex-col justify-center items-center"
//       // >
//       //   <div className="max-w-[1000px] max-auto p-4 flex flex-col  w-full h-full">
//       <div
//         name="project"
//         className="w-full h-screen text-white bg-slate-800 flex flex-col justify-center items-center"
//       >
//         <div className="max-w-[1000px] max-auto p-4 flex flex-col w-full h-full">
//           <div className=" py-12 text-center my-4">
//             {" "}
//             {/* Added text-center class */}
//             <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-700  text-center">
//               Projects
//             </p>
//             <p className=" text-center my-4 py-1">
//               Check out some of my recent projects
//             </p>
//           </div>

//           {/*container*/}

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
//             {/* Grid Item */}
//             <div
//              style={{ backgroundImage: `url(${Shopping})` }}
//               className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center text-bold items-center max-auto content-div"
//             >
//               <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
//                 <span className=" text-black tracking-wider text-3xl font-bold inline border-b-4 border-blue-700 text-center">
//                   Online-Shopping
//                 </span>
//                 <div className="pt-8 text-center">
//                   <div>
//                     <a href="https://chimerical-sopapillas-8538be.netlify.app/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Demo
//                       </button>
//                     </a>
//                     <a href="/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Code
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Grid Item */}
//             <div
             
//               style={{ backgroundImage: `url(${Todo})` }}
//               className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
//             >
//               {/*hover effects*/}

//               <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
//                 <span className=" text-black tracking-wider text-3xl font-bold inline border-b-4 border-blue-700 text-center">
//                   Todo List
//                 </span>
//                 <div className="pt-8 text-center">
//                   <div>
//                     <a href="https://creative-puffpuff-4663eb.netlify.app/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Demo
//                       </button>
//                     </a>
//                     <a href="/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Code
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Grid Item */}
//             <div
              
//               style={{ backgroundImage: `url(${Nature})` }}
//               className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
//             >
//               {/*hover effects*/}

//               <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
//                 <span className=" text-black tracking-wider text-3xl font-bold inline border-b-4 border-blue-700 text-center">
//                   About Nature
//                 </span>
//                 <div className="pt-8 text-center">
//                   <div>
//                     <a href="https://jocular-kitsune-c374b8.netlify.app/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Demo
//                       </button>
//                     </a>
//                     <a href="/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Code
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Grid Item */}
//             <div
//               style={{ backgroundImage: `url(${Movie})` }}
//               className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
//             >
//               {/*hover effects*/}

//               <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
//                 <span className=" text-black tracking-wider text-2xl font-bold inline border-b-4 border-blue-700 text-center">
//                   Movie app
//                 </span>
//                 <div className="pt-8 text-center">
//                   <div>
//                     <a href="https://chipper-valkyrie-4ac46b.netlify.app/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Demo
//                       </button>
//                     </a>
//                     <a href="/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Code
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Grid Item */}
//             <div
//               style={{ backgroundImage: `url(${Portfolio})` }}
//               className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
//             >
//               {/*hover effects*/}

//               <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
//                 <span className=" text-black tracking-wider text-2xl font-bold inline border-b-4 border-blue-700 text-center">
//                   Portfolio
//                 </span>
//                 <div className="pt-8 text-center">
//                   <div>
//                     <a href="/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Demo
//                       </button>
//                     </a>
//                     <a href="/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Code
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Grid Item */}
//             <div className="card">
//         <div 
//              style={{ backgroundImage: `url(${Article})` }}
//               className=" card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
//             >
//               {/*hover effects*/}
//               <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
//                 <span className="text-black tracking-wider text-2xl font-bold inline border-b-4 border-blue-700 text-center">
//                   Article
//                 </span>
//                 <div className="pt-8 text-center">
//                   <div>
//                     <a href="https://stirring-hotteok-e04dc2.netlify.app/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Demo
//                       </button>
//                     </a>
//                     <a href="/">
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
//                         Code
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Projects;
import React from "react";
import Shopping from "../assets/screenshots/Shopping.png";
import Todo from "../assets/screenshots/Todo.png";
import Article from "../assets/screenshots/Article.png";
import Movie from "../assets/screenshots/Movie.png";
import Nature from "../assets/screenshots/Nature.png";
import Portfolio from "../assets/screenshots/Portfolio.png";

const projects = [
  {
    title: "Online Shopping",
    description:
      "An e-commerce platform where users can explore and purchase a variety of products. Enjoy a seamless shopping experience with easy navigation and user-friendly features.",
    image: Shopping,
    demoLink: "https://chimerical-sopapillas-8538be.netlify.app/",
    codeLink: "/",
  },
  {
    title: "Todo List",
    description:
      "A simple and intuitive to-do list application that helps you stay organized. Add, edit, and delete tasks with ease, ensuring you never forget important items on your agenda.",
    image: Todo,
    demoLink: "https://creative-puffpuff-4663eb.netlify.app/",
    codeLink: "/",
  },
  {
    title: "Photos of nature",
    description:
      "Explore the beauty of nature through a collection of stunning photographs. Immerse yourself in the wonders of the natural world and appreciate the artistry captured in each image.",
    image: Nature,
    demoLink: "https://jocular-kitsune-c374b8.netlify.app/",
    codeLink: "/",
  },
  {
    title: "Movie finder",
    description:
      "Discover and explore a vast collection of movies with this movie finder app. Search for your favorite films, get details, and enjoy a personalized movie-watching experience.",
    image: Movie,
    demoLink: "https://chipper-valkyrie-4ac46b.netlify.app/",
    codeLink: "/",
  },
  {
    title: "Article summarizer",
    description:
      "Effortlessly summarize lengthy articles and get key insights with this article summarizer. Save time and focus on essential information without reading through extensive content.",
    image: Article,
    demoLink: "https://stirring-hotteok-e04dc2.netlify.app/",
    codeLink: "/",
  },
  {
    title: "Portfolio",
    description:
      "A showcase of my portfolio as a software engineer. Explore the projects I've worked on and learn more about my skills and expertise in the field of software development.",
    image: Portfolio,
    demoLink: "/",
    codeLink: "/",
  },
];

const Projects = () => {
  return (
    <div
      name="project"
      className="w-full mx-auto bg-slate-800  shadow-md overflow-hidden "
    >
      <div className="md:flex">
        <div className="md:shrink-1 rounded-lg">
          <div className=" mt-28 text-center text-white ">
            <p className="text-4xl font-bold inline border-b-4 border-blue-700 text-center ">
              Projects
            </p>
            <p className="text-center   py-2">
              Check out some of my recent projects
            </p>
          </div>

          <div className="  grid m-2 p-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-3   gap-4 ">
            {projects.map((project, index) => (
              <div
                key={index}
                className=" object-cover rounded-lg md:h-full m-1 md:w-full  content-div group container"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center  bg-white p-6 rounded-md shadow-md">
                  <span className="text-black tracking-wider mt-3 text-xl font-semibold inline border-b-4 border-blue-700 text-center">
                    {project.title}
                  </span>
                  <p className="text-gray-800 text-center">
                    {project.description}
                  </p>
                  <div className="pt-4 text-center">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="rounded-lg px-2 py-2 m-2 bg-black text-white font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="rounded-lg px-2 py-2 bg-black text-white font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;