import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 2}}
          className="my-20 text-center text-4xl">
          Projects
      </motion.h2>
      <div>
        {PROJECTS.map((p, i) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={i}>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="w-full lg:w-1/4 sm:flex sm:flex-col sm:items-center justify-center"
            >
              {/* Make the entire project clickable */}
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <img 
                    src={p.image} 
                    alt={p.title} 
                    width={150} 
                    height={150} 
                    className="mb-6 rounded" 
                />
              </a>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1.5}} 
                className="w-full max-w-xl lg:w-3/4 text-justify"
            >
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="block">
                <h6 className="mb-2 font-semibold">{p.title}</h6>
                <p className="mb-4 text-neutral-400">{p.description}</p>
              </a>
              <div>
                {p.technologies.map((t, techIndex) => (
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900" key={techIndex}>
                      {t}
                    </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
