import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className='flex-col h-auto p-2'>
      <h2 className='font-serif text-metal-dark dark:text-violet-400 md:text-5xl duration-500 flex-nowrap text-4xl p-2 md:px-8 lg:px-24 xl:px-52 2xl:px-72 font-bold'>
        Resume:
      </h2>
      <ol className='flex flex-col'>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Freelance Web-Developer'
            className='flex flex-row dark:hover:bg-blue-light dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-20 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Aug. 2023 - Current
              </h3>
            </li>
            <li className='w-7/8 text-left p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Full-Stack Developer • <span id='spacer'></span>
                  <span className='inline-block whitespace-nowrap'>
                    Freelance
                  </span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    • Design and implement fullstack websites with tools like
                    GraphQL, SQL, and MongoDB, React, Tailwind, JavaScript, etc.
                  </li>
                  <li>
                    • Collaborated on projects while using Agile methodology for
                    efficient development for seamless integration.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Specialty Sales at Target'
            className='flex flex-row dark:hover:bg-blue-light dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-20 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Oct. 2022 - Current
              </h3>
            </li>
            <li className='w-7/8 text-left duration-300 p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Specialty Sales • <span id='spacer'></span>
                  <span className='inline-block whitespace-nowrap'>Target</span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    • Designed and implemented the back-room storage for both
                    the Electronics department and the Beauty department.
                  </li>
                  <li>
                    • Worked across multiple departments to ensure efficient
                    maximum output of labor use.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Production Manager and Lighting Designer at Purple Hat Productions'
            className='flex flex-row dark:hover:bg-blue-light dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-20 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Jul. 2016 - Oct. 2022
              </h3>
            </li>
            <li className='w-7/8 text-left duration-300 p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Production Manager & Lighting Designer •{' '}
                  <span id='spacer'></span>
                  <span className='inline-block whitespace-nowrap'>
                    Purple Hat Productions
                  </span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    • Head Lighting Designer for over 40 productions and
                    concerts. Managed a group of 8-10 freelance stagehands.
                  </li>
                  <li>
                    • Facilitated the shipping and delivery/setup of
                    professional lighting equipment and established
                    relationships with touring companies to program and run
                    concerts and events.
                  </li>
                  <li>
                    • Multi tasked objective completion and timeline
                    follow-through while working with several different
                    production groups (i.e., Sound, Lighting, Props).
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Mortgage Banker at Network Capital'
            className='flex flex-row dark:hover:bg-blue-light dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-20 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Mar. 2022 - Jun. 2022
              </h3>
            </li>
            <li className='w-7/8 text-left duration-300 p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Mortgage Banker • <span id='spacer'></span>
                  <span className='inline-block whitespace-nowrap'>
                    Network Capital
                  </span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    • Continued to hit and surpass goals of 5 hours of talk
                    time, 5 applications, and 3+ submissions for loans every
                    week; reached out to 200+ people daily
                  </li>
                  <li>
                    • Collected and assessed customer information and
                    liabilities to build out a custom refinance package that
                    suits their needs best, and effectively communicated this
                    information with customers.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
        <div id='Resume-Experience' className='flex flex-row'>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
          <div
            id='Block'
            aria-label='Sales Professional and Leasing Consultant at Corwin Honda'
            className='flex flex-row dark:hover:bg-blue-light dark:bg-blue-light hover:bg-ice-dark bg-ice-dark dark:md:bg-transparent md:bg-transparent dark:md:hover:bg-opacity-10 dark:bg-opacity-10 md:hover:bg-opacity-10 bg-opacity-20 hover:bg-opacity-20 overflow-hidden rounded-xl group duration-300 shadow-lg md:shadow-transparent shadow-metal dark:md:shadow-transparent dark:md:hover:shadow-metal md:hover:shadow-metal dark:shadow-metal lg:w-1/2 my-4 md:hover:scale-110 m-2 scale-100 mb-8'
          >
            <li className='w-1/8 text-end p-2 mt-1'>
              <h3
                id='Time'
                className='text-sm md:text-base lg:text-xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                Jul. 2016 - Oct. 2022
              </h3>
            </li>
            <li className='w-7/8 text-left duration-300 p-2'>
              <h3
                id='Role'
                className='text-lg md:text-xl lg:text-2xl dark:md:text-ice-light md:text-magenta-dark dark:group-hover:text-teal-500 dark:text-teal-500 text-magenta group-hover:text-magenta font-bold duration-300'
              >
                <span>
                  Sales Professional & Leasing Consultant •{' '}
                  <span id='spacer'></span>
                  <span className='inline-block whitespace-nowrap'>
                    Corwin Honda
                  </span>
                </span>
              </h3>
              <div
                id='Bullet-Points'
                className='text-base md:text-lg lg:text-xl dark:md:text-slate-400 dark:group-hover:text-ice-light dark:text-ice-light md:text-steel group-hover:text-steel-dark text-steel-dark duration-300'
              >
                <ul>
                  <li>
                    • Interacted with 50-100+ people every day, building a
                    strong customer basis through resolving issues, following up
                    on purchases, and guiding people through financing or
                    leasing their vehicles.
                  </li>
                  <li>
                    • Provided deep knowledge and personalized product guidance
                    tailored to individual needs in a timely manner, whether it
                    is over the phone, by email, or in person.
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div id='Spacer' className='w-1/4 md:flex hidden'></div>
        </div>
      </ol>
    </div>
  );
}

export default Resume;
