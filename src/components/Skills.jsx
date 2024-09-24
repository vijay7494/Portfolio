import React from 'react';
import { RiReactjsLine, RiNextjsFill , RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava  } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVar = (duration) => ({
  initial: {y:-10},
  animate:{
    y:[10,-10],
    transition: {
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
          
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:2}}
          className='my-20 text-center text-4xl'
        >Skills</motion.h2>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: -100}}
          transotion={{duration:1.5}}
          className="flex flex-wrap items-center justify-center gap-4"
        >
            <motion.div
              variants={iconVar(2.5)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiReactjsLine className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div
              variants={iconVar(2.6)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiNextjsFill  className='text-7xl text-white'/>
            </motion.div>
            <motion.div
              variants={iconVar(2.7)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <BiLogoMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
              variants={iconVar(2.8)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiTailwindCssFill className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div
              variants={iconVar(2.9)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiExpress className='text-7xl text-gray-600'/>
            </motion.div>
            <motion.div
              variants={iconVar(3)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiMysql className='text-7xl text-white'/>
            </motion.div>
            <motion.div
              variants={iconVar(3.1)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <TbBrandCpp className='text-7xl text-gray-500'/>
            </motion.div>
            <motion.div
              variants={iconVar(3.2)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaJava className='text-7xl text-orange-700'/>
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Skills;