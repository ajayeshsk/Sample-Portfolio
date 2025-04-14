import React, { useState } from 'react';
import { useScroll } from './ScrollContext.jsx';

function Header() {
  const { aboutRef, projectsRef, skillsRef, experienceRef, contactRef, scrollToSection,scrollToSection1,socialRef} = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "About Me", ref: aboutRef },
    { name: "Projects", ref: projectsRef },
    { name: "Skills", ref: skillsRef },
    { name: "Experience", ref: experienceRef },
    { name: "Contact Me", ref: contactRef },
    {name:"Socials", ref:socialRef}
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className='bg-black w-full sticky top-0 z-50 p-3'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center h-16'>
          <div className='hidden md:block'>
            <ul className='flex space-x-6'>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className='text-gray-300 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md text-lg font-medium cursor-pointer transition duration-300 ease-in-out text-pretty underline'
                  onClick={() => scrollToSection(item.ref)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMenuOpen ? (
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              ) : (
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden'>
          <ul className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navItems.map((item, index) => (
              <li
                key={index}
                className='text-gray-300 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out'
                onClick={() => {
                  scrollToSection1(item.ref);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;