import React from 'react';
import './Hero.css';
import heroImage from '../assets/Taylor-Randall-Headshot.jpg';

function Hero() {
  return (
    <div id='Hero' className='lg:px-24 px-16 h-auto'>
      <div className='text-left flex flex-col md:flex-row md:items-center md:justify-center'>
        <div className='md:w-1/2 xl:w-1/3'>
          <h1 className='font-serif text-metal-dark dark:text-purple-light text-4xl duration-500 lg:text-5xl pointer-events-auto'>
            Randall Taylor
          </h1>
          <p className='typewriter anim-typewriter text-ice-dark dark:text-ice pointer-events-auto'>
            Full-Stack Dev.
          </p>
        </div>
        <div className='md:w-1/2 xl:w-1/3'>
          <img
            className='rounded-3xl w-auto my-4 pointer-events-auto'
            src={heroImage}
            alt='A headshot of Randall Taylor, developer.'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
