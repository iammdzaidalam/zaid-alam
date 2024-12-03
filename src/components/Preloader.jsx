import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Hello",
  "سلام",
  "السَّلاَمُ عَلَيْكُمْ",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "ନମସ୍କାର",
  "নমস্কার",
  "नमस्ते",
  "I AM",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isDarkMode, setIsDarkMode] = useState(null); // Initially set to null

  // Set dimensions and check dark mode on mount
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkMode); // Update state after checking dark mode class
  }, []);

  // Handle word change animation
  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
  };

  const slideUp = {
    initial: { top: 0 },
    exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } },
  };

  const zoomOut = {
    initial: { scale: 1 },
    exit: { scale: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  if (isDarkMode === null) return null; // Don't render anything until dark mode is determined

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[100]"
    >
      {dimension.width > 0 && (
        <>
          {/* Text animation */}
          <motion.p
            className="text-customText dark:text-darkBg text-4xl flex items-center absolute z-10"
            initial="initial"
            animate="enter"
            exit={index === words.length - 1 ? "exit" : undefined}
            variants={index === words.length - 1 ? zoomOut : opacity}
          >
            {index !== words.length - 1 && (
              <span className="block w-2.5 h-2.5 bg-customText dark:bg-darkBg rounded-full mr-2"></span>
            )}
            {words[index]}
          </motion.p>

          {/* Swoop animation */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill={isDarkMode ? "#afa18f" : "#34302a"} // Conditional fill color based on dark mode
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
