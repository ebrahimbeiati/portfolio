import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import image1 from '../assets/background/image1.jpeg'
import image2 from '../assets/background/image2.png'
import image3 from '../assets/background/image3.png'
import image4 from '../assets/background/image4.jpeg'
import image5 from '../assets/background/image5.jpeg'
import image6 from '../assets/background/image6.jpeg'
import image7  from '../assets/background/image7.jpeg'
import image8 from '../assets/background/image8.jpeg'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-800">
      {/*Container */}
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="h-full w-full flex flex-col justify-center items-center bg-white">
          <h1 className="text-[#162541] text-4xl sm:text-7xl font-bold text-center py-12">
            Ebrahim Beiati-Asl
          </h1>
          <div className="moving-images">
            <img
              src={image1}
              alt=""
              className="image-1"
            
            />
            <img
              src={image2}
              alt=""
              className="image-2"
             
            />
            <img src={image3} alt="" className="image-1" />
            <img src={image4} alt="" className="image-1" />
            <img src={image5} alt="" className="image-1" />
            <img src={image6} alt="" className="image-1" />
            <img src={image7} alt="" className="image-1" />
            <img src={image8} alt="" className="image-1" />

            {/* Add more images as needed */}
          </div>
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