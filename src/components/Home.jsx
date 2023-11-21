import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="flex flex-col justify-center  items-center h-screen bg-gradient-to-r from-blue-600 to-purple-800 text-white px-4">
      <h1 className="text-4xl leading-tight hover:underline  font-bold mb-6 text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-center mb-8 block mt-1 leading-tight font-medium text-white hover:underline">
        As a passionate Software Engineer, I create innovative solutions to
        real-world problems.
      </p>

      <div className="w-full flex justify-center ">
        <Link to={"project"} smooth={true} duration={100}>
          <button
            className="text-white font-bold  border-2 px-6 py-4 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800"
            type="button"
          >
            View Projects{" "}
            <span className="hover:rotate-90 duration-100 hover:cursor-s-resize">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
