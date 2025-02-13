import React from "react";

const Footer = () => {
  return (
    <div 
      className="relative py-6 px-4 bg-gradient-to-br from-black  via-blue-700 to-purple-700 text-white">
      <div className="flex mx-auto items-center justify-center flex-col">
        <p className="text-2xl font-bold">Portfolio</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ebrahim Beiati-Asl. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
