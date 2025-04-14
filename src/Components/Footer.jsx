import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useScroll } from './ScrollContext.jsx';

function Footer() {
  const {socialRef}= useScroll();
  return (
    <footer className='w-full bg-blue-950 py-6' ref={socialRef}>
      <div className='container mx-auto flex flex-col items-center'>
      <h2 className='text-3xl md:text-4xl text-center text-white font-bold mb-8'>Socials</h2>
        <div className='flex space-x-6 mb-4'>
          
          <a href="https://github.com/Daredevil90" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-600 transition duration-300'>
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/aryan-shukla-557161287/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-600 transition duration-300'>
            <FaLinkedin size={30} />
          </a>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
