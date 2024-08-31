import { LuImport } from 'react-icons/lu';
import benson from '../assets/background.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative'>
      <div className='flex flex-col items-center justify-center relative'>
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2 }}
          className='mt-16 overflow-hidden uppercase text-[12vw] font-semibold leading-none'
        >
          Zaid Alam
        </motion.h1>
        <div className='mt-8'>
          <a
            href='/zaid.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400'
          >
            <span>Download CV</span>
            <LuImport className='ml-2' />
          </a>
        </div>
        <div className='relative w-full'>
          <img
            src={benson}
            alt='Zaid Alam'
            className='mt-8 h-96 w-full object-cover'
            loading='lazy'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
