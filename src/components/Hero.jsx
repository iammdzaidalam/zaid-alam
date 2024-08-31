import { LuImport } from 'react-icons/lu';
import zaid from '../assets/background.jpg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2 }}
          className="mt-16 overflow-hidden uppercase text-[12vw] font-semibold leading-none"
        >
          Zaid Alam
        </motion.h1>
        <div className="mt-8">
          <a
            href="/zaid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
          >
            <span>Download CV</span>
            <LuImport className="ml-2" />
          </a>
        </div>
        <div className="relative w-full h-96 mt-8 overflow-hidden">
          <img
            src={zaid}
            alt="Zaid Alam"
            className="w-full h-full object-cover"
            style={{ 
              transform: `translateY(${Math.min(scrollY * 0.3, 200)}px)`, // Adjust max movement
              transition: 'transform 0.1s ease-out' // Smooth transition
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
