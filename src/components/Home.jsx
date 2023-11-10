
// import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import image1 from "../assets/background/image1.avif";
// import image2 from "../assets/background/image2.jpeg";
// import image3 from "../assets/background/image3.jpeg";
// import image4 from "../assets/background/image4.jpeg";
// import image5 from "../assets/background/image5.avif";
// import image6 from "../assets/background/image6.jpeg";
// import image7 from "../assets/background/image7.jpeg";
// import image8 from "../assets/background/image9.avif";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div name="home" className="w-full h-screen ">
//       <div className="w-full h-full flex flex-col justify-center items-center">
//         <div className="moving-images">
//           <img src={image1} alt="" className="image" />
//           <img src={image2} alt="" className="image" />
//           <img src={image3} alt="" className="image" />
//           <img src={image4} alt="" className="image" />
//           <img src={image5} alt="" className="image" />
//           <img src={image6} alt="" className="image" />
//           <img src={image7} alt="" className="image" />
//           <img src={image8} alt="" className="image" />
//         </div>
//       </div>
//       <div className="w-full flex justify-center ">
//         <Link to="project" smooth={true} duration={100}>
//           <button
//             className="text-white  border-2 px-6 py-4 my-2 flex items-center hover:bg-blue-700 hover:border-blue-700"
//             type="button"
//           >
//             View Projects{" "}
//             <span className="group-hover:rotate-90 duration-300">
//               <HiArrowNarrowRight className="ml-3" />
//             </span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;





import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-700 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">
        As a passionate Software Engineer, I create innovative solutions to
        real-world problems.
      </p>

        <div className="w-full flex justify-center ">
   <Link to={"project"} smooth={true} duration={100}>
          <button
            className="text-white  border-2 px-6 py-4 my-2 flex items-center hover:bg-blue-700 hover:border-blue-700"
          type="button"
      >
      View Projects{" "}
             <span className="group-hover:rotate-90 duration-300">
               <HiArrowNarrowRight className="ml-3" />
             </span>
          </button>
         </Link>
    </div>
    </div>
  );
};

export default Home;
