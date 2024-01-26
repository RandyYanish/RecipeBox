import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function DownloadButton(publicLocationString) {
  const downloadUrl = process.env.PUBLIC_URL + publicLocationString;

  return (
    <div className='flex justify-center'>
      {/* Button to download the PDF */}
      <a href={downloadUrl} target='_blank' rel='noreferrer'>
        <button className='explore-btn rounded-full hover:bg-magenta-dark hover:text-ice-light bg-magenta-dark dark:bg-magenta-dark py-2 px-8 text-steel-light text-xl font-serif dark:hover:bg-magenta-dark dark:hover:text-ice-light dark:hover:after:border-yellow-dark hover:after:border-yellow-dark pointer-events-auto flex items-center'>
          View full resume
          <FaRegArrowAltCircleRight size={20} className=' ml-2' />
        </button>
      </a>
    </div>
  );
}

export default DownloadButton;
