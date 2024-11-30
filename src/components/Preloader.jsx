'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello", "سلام" ,"سلام" , "السَّلاَمُ عَلَيْكُمْ", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "ନମସ୍କାର", "নমস্কার", "नमस्ते" ];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);
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
    exit: { top: '-100vh', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center  z-[100]" 
    >
      {dimension.width > 0 && (
        <>
          {/* Text animation */}
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-customText text-4xl flex items-center absolute z-10"
          >
            <span className="block w-2.5 h-2.5 bg-customText rounded-full mr-2"></span>
            {words[index]}
          </motion.p>

          {/* Swoop animation */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
