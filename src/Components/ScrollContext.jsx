import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const socialRef= useRef(null);
  console.log(projectsRef)
  const scrollToSection = (elementRef) => {
    console.log(elementRef.current.offsetTop)
    window.scrollTo({
      
      top: elementRef.current.offsetTop-100,
      behavior: 'smooth'
    });
  };
  const scrollToSection1 = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop-360,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollContext.Provider value={{ aboutRef, projectsRef,skillsRef,experienceRef, contactRef,socialRef,scrollToSection,scrollToSection1}}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);