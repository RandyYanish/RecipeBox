import React from 'react';

const ContactButton = ({ openModal }) => {
  return (
    <div className='flex justify-center'>
      <button onClick={openModal} className='explore-btn rounded-full hover:bg-magenta-dark hover:text-ice-light bg-magenta-dark dark:bg-magenta-dark py-2 px-8 text-steel-light text-xl font-serif dark:hover:bg-magenta-dark dark:hover:text-ice-light dark:hover:after:border-yellow-dark hover:after:border-yellow-dark pointer-events-auto flex items-center hover:scale-125 duration-500'>
        Open Modal
      </button>
    </div>
  );
};

export default ContactButton;
