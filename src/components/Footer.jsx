import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="bg-gray-900 text-white py-6 w-full">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-2xl font-bold">Portfolio</div>

          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ebrahim Beiati-Asl. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
