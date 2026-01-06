import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  const blobStyle = {
    willChange: "transform",
    transform: "translateZ(0)",
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50/50">
      {/* Blob 1 - Blue */}
      <motion.div
        style={blobStyle}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[80px] mix-blend-multiply opacity-70"
      />

      {/* Blob 2 - Purple */}
      <motion.div
        style={blobStyle}
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 80, -30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply opacity-70"
      />

      {/* Blob 3 - Light Indigo (Bottom) */}
      <motion.div
        style={blobStyle}
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
        className="absolute bottom-0 left-[20%] w-[700px] h-[700px] bg-indigo-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-60"
      />
    </div>
  );
};

export default BackgroundAnimation;
