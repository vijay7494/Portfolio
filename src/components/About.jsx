import React from "react";
import about from "../assets/aboutImg.jpg";
import { ABOUT_TEXT } from "../constants";
import { RiFile2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import resume from "../assets/Vijay_Chaure_.pdf"; 

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-4xl text-center">About Me</h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={about} alt="About" className="rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-2xl py-7 text-l text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              <RiFile2Line className="text-xl" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
