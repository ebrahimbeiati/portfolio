import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-800">
      {/*Container */}
   <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
        <h1 className="text-[#162541] text-4xl sm:text-7xl font-bold text-center py-12">
          Ebrahim Beiati-Asl
        </h1>
      </div>
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