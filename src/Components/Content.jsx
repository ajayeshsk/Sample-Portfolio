import React from 'react';
import { useScroll } from './ScrollContext.jsx';
const items = [
  {
    title: "Management Application",
    src: '#',
    text: "This project was intended to manage result data and distribute it to students individually where the data is registered very easily using a single excel file.",
  },
  {
    title: " Fintech Web Application",
    src: '#',
    text: "This project implements a very simplified financial tech app which allows users on the platform to transfer funds to each other.",
  }
];
const skills = ['JavaScript', 'React.js', 'Node.js', 'Python', 'SQL'];
function Content() {
  const { aboutRef, projectsRef, skillsRef, experienceRef, contactRef } = useScroll();
  return (
    <>
      <section className='flex flex-row w-screen gap-6  bg-purple-900  ' ref={aboutRef}>
        <div className='w-full   border-2 border-blue-600 rounded-lg p-6 text-pretty '>
          <h1 className='text-3xl md:text-4xl font-bold text-[#C9D6EA] mb-4'>
            Hello, I'm <span className='name'>Ajayesh Subodh Kumar </span>
          </h1>
          <p className='text-xl text-[#C9D6EA] leading-relaxed'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut at corrupti deserunt expedita. Molestias rem illo eos explicabo earum ex repellat autem sit deleniti laudantium consectetur eius, facilis labore ipsa.
          </p>
        </div>
        
      </section>
      <section className='w-full p-16 bg-red-950    ' ref={skillsRef}>
        <h2 className='text-3xl md:text-4xl text-center text-[#C9D6EA] font-bold mb-8'>Skills</h2>
        <div className='flex flex-wrap justify-center gap-4 ' >
          {skills.map((skill, index) => (
            <div key={index} className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm'>
              {skill}
            </div>
          ))}
        </div>
      </section>
 
      <section className='w-full  p-16 bg-purple-900 border-2 border-blue-600 rounded-lg' ref={experienceRef}>
        <h2 className='text-3xl md:text-4xl text-center text-[#C9D6EA] font-bold mb-8'>Experience</h2>
        <div className='space-y-6'>
          <div className='border-l-4 border-blue-600 pl-4'>
            <h3 className='text-xl text-white font-semibold'>Intern</h3>
            <p className='text-gray-400'>Company Name | 2020 - 2022</p>
            <ul className='list-disc list-inside text-gray-300 mt-2'>
              <li>Learned how to develop and maintain websites</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Implemented new features and optimized existing ones</li>
            </ul>
          </div>
        </div>
        <div className='space-y-6 my-5'>
          <div className='border-l-4 border-blue-600 pl-4 '>
            <h3 className='text-xl text-white font-semibold'>Software Developer</h3>
            <p className='text-gray-400'>Company Name | 2022 - Present</p>
            <ul className='list-disc list-inside text-gray-300 mt-2'>
              <li>Developed and maintained web applications</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Implemented new features and optimized existing ones</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className='w-full  p-16 bg-blue-950  ' ref={projectsRef}>
  <h2 className='text-3xl md:text-4xl text-center text-[#C9D6EA] font-bold mb-8'>Projects</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
    {items.map((item, index) => (
      <a key={index} href={item.src} className='block '>
        <div className='bg-gray-800 border-2 border-blue-600 rounded-lg p-6 h-full flex flex-col transition transform hover:scale-105 hover:shadow-lg'>
          <div className='flex-grow'>
            <h3 className='text-xl text-white font-semibold mb-3'>{item.title}</h3>
            <p className='text-gray-400 mb-4'>{item.text}</p>
          </div>
          <div className='mt-auto'>
            <span className='inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-300'>
              View Project
            </span>
          </div>
        </div>
      </a>
    ))}
  </div>
</section>
       <section className='w-full  p-10 bg-gray-900 border-2 border-blue-600 rounded-lg' ref={contactRef}>
        <h2 className='text-3xl md:text-4xl text-center text-[#C9D6EA] font-bold mb-8'>Contact Me</h2>
        <form className='max-w-md mx-auto'>
          <div className='mb-4'>
            <input type="text" placeholder="Name" className='w-full p-2 rounded bg-gray-800 text-white border border-blue-600' />
          </div>
          <div className='mb-4'>
            <input type="email" placeholder="Email" className='w-full p-2 rounded bg-gray-800 text-white border border-blue-600' />
          </div>
          <div className='mb-4'>
            <textarea placeholder="Message" rows="4" className='w-full p-2 rounded bg-gray-800 text-white border border-blue-600'></textarea>
          </div>
          <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300'>Send Message</button>
        </form>
      </section>  
    </>
  );
}

export default Content;