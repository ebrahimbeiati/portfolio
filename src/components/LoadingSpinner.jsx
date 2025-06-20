import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = ({ size = "medium", color = "white" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };

  const colorClasses = {
    white: "border-white",
    blue: "border-blue-500",
    purple: "border-purple-500"
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-t-transparent ${colorClasses[color]} rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingSpinner; 