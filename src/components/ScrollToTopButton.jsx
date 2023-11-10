import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 100px
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100);
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to the bottom of the page when the button is clicked
  const scrollToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

 
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} />
        </div>
      )}

      {!isVisible && (
        <div
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
          onClick={scrollToDown}
        >
          <FaArrowDown size={24} />
        </div>
      )}
    </div>
  );
};


export default ScrollToTopButton;

