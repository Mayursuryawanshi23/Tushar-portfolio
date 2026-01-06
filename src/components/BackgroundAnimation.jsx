import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const blobStyle = {
    willChange: "transform",
    transform: "translateZ(0)",
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50/50">
      {/* Blob 1 - Blue */}
      <motion.div
        style={blobStyle}
        animate={isVisible ? {
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
        } : {}}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[60px] mix-blend-multiply opacity-50"
      />

      {/* Blob 2 - Purple */}
      <motion.div
        style={blobStyle}
        animate={isVisible ? {
          x: [0, -70, 40, 0],
          y: [0, 80, -30, 0],
        } : {}}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
        className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[80px] mix-blend-multiply opacity-50"
      />

      {/* Blob 3 - Light Indigo (Bottom) */}
      <motion.div
        style={blobStyle}
        animate={isVisible ? {
          x: [0, 60, -60, 0],
          y: [0, -40, 40, 0],
        } : {}}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          delay: 6,
        }}
        className="absolute bottom-0 left-[20%] w-[700px] h-[700px] bg-indigo-200/15 rounded-full blur-[80px] mix-blend-multiply opacity-40"
      />
    </div>
  );
};

export default BackgroundAnimation;
