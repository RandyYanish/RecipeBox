import React from 'react';
import './Projects.css';
import shopImage from '../assets/123-Shop.png';
import eventHorizonImage from '../assets/Event-Horizon.png';

function Projects() {
  const shopUrl = () => {
    window.open('https://shop--123-f2fa6ddf19c1.herokuapp.com/', '_blank');
  };

  const eventHorizonUrl = () => {
    window.open(
      'https://mighty-sands-41780-17537002c1ec.herokuapp.com/',
      '_blank',
    );
  };

  return (
    <div className='flex-col h-auto p-2 md:px-8 lg:px-24 xl:px-52 2xl:px-72'>
      <h2 className='font-serif text-metal-dark dark:text-violet-400 md:text-5xl duration-500 flex-nowrap text-4xl p-2 font-bold'>
        Projects:
      </h2>
      <ol className='text-left flex flex-col sm:p-4 md:p-6 lg:p-8'>
        <div id='Projects-Experience' className='flex flex-row justify-center'>
          <div id='Spacer' className='w-1/8 xl:flex hidden'></div>
          <div
            id='Block'
            aria-label='Freelance Web-Developer'
            className='flex flex-col lg:flex-row p-2 dark:hover:bg-blue-light dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-20 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal my-4 md:hover:scale-110 m-2 scale-100 items-center cursor-pointer'
            onClick={shopUrl}
          >
            <li className='lg:w-1/4 text-end mt-1 p-4'>
              <img src={shopImage} alt='' className='rounded-lg' />
            </li>
            <li className='lg:w-3/4 text-left p-2'>
              <h3
                id='Project-Title'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span className='flex flex-row items-center'>
                  123-Shop! • <span id='spacer'> </span>
                  <span className='inline-block whitespace-nowrap ml-2'>
                    Full-Stack Dev
                  </span>
                  <svg
                    fill='currentColor'
                    className='ml-2 h-5 w-5'
                    viewBox='0 0 20 20'
                  >
                    <path d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'></path>
                  </svg>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    • Developed a full-stack e-commerce application enabling
                    customers to browse and place orders.
                  </li>
                  <li>
                    • Implemented back-end functionality, handling GraphQL
                    requests and responses.
                  </li>
                  <li>
                    • Collaborated closely with the front-end team for seamless
                    integration while using Agile methodology for efficient
                    development.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/8 xl:flex hidden'></div>
        </div>
        <div id='Projects-Experience' className='flex flex-row justify-center'>
          <div id='Spacer' className='w-1/8 xl:flex hidden'></div>
          <div
            id='Block'
            aria-label='Freelance Web-Developer'
            className='flex flex-col lg:flex-row p-2 dark:hover:bg-blue-light dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-20 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal my-4 md:hover:scale-110 m-2 scale-100 items-center cursor-pointer'
            onClick={eventHorizonUrl}
          >
            <li className='lg:w-1/4 text-end mt-1 p-4'>
              <img
                src={eventHorizonImage}
                alt='event horizon'
                className='rounded-lg'
              />
            </li>
            <li className='lg:w-3/4 text-left p-2'>
              <h3
                id='Project-Title'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span className='flex flex-row items-center'>
                  Event Horizon • <span id='spacer'> </span>
                  <span className='inline-block whitespace-nowrap ml-2'>
                    Full-Stack Dev
                  </span>
                  <svg
                    fill='currentColor'
                    className='ml-2 h-5 w-5'
                    viewBox='0 0 20 20'
                  >
                    <path d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'></path>
                  </svg>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    • Designed and built an event planning application with
                    email invitation features.
                  </li>
                  <li>
                    • Successfully deployed the application on Heroku, including
                    JAWS_DB integration for the database.
                  </li>
                  <li>
                    • Employed Agile practices to ensure a streamlined
                    development process.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/8 xl:flex hidden'></div>
        </div>
      </ol>
    </div>
  );
}

export default Projects;
