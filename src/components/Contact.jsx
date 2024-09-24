import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b pb-20 border-neutral-900'>
        <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:2}}
            className="my-20 text-center text-4xl"
        >
            Get in touch!
        </motion.h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">1231231231</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  );
};

export default Contact;