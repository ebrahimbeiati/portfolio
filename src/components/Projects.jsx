import React from "react";
import bg from "../assets/bg.png";
import shopping from "../assets/shopping.png";
const Projects = () => {
   
    return (
    <div name="project" className="w-full h-screen text-white bg-slate-800 flex flex-col justify-center items-center">
      <div className="max-w-[1000px] max-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center"> {/* Added text-center class */}
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500 text-center"> {/* Added text-center class */}
            Projects
          </p>
          <p className="py-6 text-center">
            Check out some of my recent projects
          </p>
        </div>

         {/*container*/}

         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
           {/* Grid Item */}
           <div
             style={{ backgroundImage: `url(${shopping})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center text-bold items-center max-auto content-div"
           >
             {/*hover effects*/}

             <div className="opacity-0 group-hover:opacity-100">
               <span className="text-2xl font-bold text-white tracking-wider">
                 Online-Shopping
               </span>
               <div className="pt-8 text-center">
                 <div>
                   <a href="https://chimerical-sopapillas-8538be.netlify.app/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Demo
                     </button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Code
                     </button>
                   </a>
                 </div>
               </div>
             </div>
           </div>

           {/* Grid Item */}
           <div
             style={{ backgroundImage: `url(${shopping})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
           >
             {/*hover effects*/}

             <div className="opacity-0 hover:opacity-100">
               <span className="text-2xl font-bold text-center text-white tracking-wider">
                 Todo List
               </span>
               <div className="pt-8 text-center">
                 <div>
                   <a href="https://creative-puffpuff-4663eb.netlify.app/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Demo
                     </button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Code
                     </button>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           {/* Grid Item */}
           <div
             style={{ backgroundImage: `url(${shopping})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
           >
             {/*hover effects*/}

             <div className="opacity-0 group-hover:opacity-100">
               <span className="text-2xl font-bold text-white tracking-wider">
                 About Nature
               </span>
               <div className="pt-8 text-center">
                 <div>
                   <a href="https://jocular-kitsune-c374b8.netlify.app/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Demo
                     </button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Code
                     </button>
                   </a>
                 </div>
               </div>
             </div>
           </div>

           {/* Grid Item */}
           <div
             style={{ backgroundImage: `url(${bg})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
           >
             {/*hover effects*/}

             <div className="opacity-0 group-hover:opacity-100">
               <span className="text-2xl font-bold text-center text-white tracking-wider">
                 Movie app
               </span>
               <div className="pt-8 text-center">
                 <div>
                   <a href="https://chipper-valkyrie-4ac46b.netlify.app/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Demo
                     </button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Code
                     </button>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           {/* Grid Item */}
           <div
             style={{ backgroundImage: `url(${shopping})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
           >
             {/*hover effects*/}

             <div className="opacity-0 group-hover:opacity-100">
               <span className="text-2xl font-bold text-white tracking-wider">
                 Online-Shopping
               </span>
               <div className="pt-8 text-center">
                 <div>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Demo
                     </button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Code
                     </button>
                   </a>
                 </div>
               </div>
             </div>
           </div>

           {/* Grid Item */}
           <div
             style={{ backgroundImage: `url(${shopping})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div"
           >
             {/*hover effects*/}

             <div className="opacity-0 group-hover:opacity-100">
               <span className="text-2xl font-bold text-center text-white tracking-wider">
                 Project
               </span>
               <div className="pt-8 text-center">
                 <div>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                       Demo
                     </button>
                   </a>
                   <a href="/">
                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
   );
};

export default Projects;
