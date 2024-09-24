import React from 'react';
import logo from "../assets/VijayChaureLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-10'>
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://github.com/vijay7494" className=""><FaGithub/></a>
            <a href="https://www.linkedin.com/in/vijay-chaure-139619229" className=""><FaLinkedin/></a>
            <a href="#" className=""><FaInstagram/></a>
        </div>
    </nav>
  );
};

export default Navbar;