import React, { useState } from 'react';
import CVDownload from '../components/DownloadButton';
import ContactButton from '../components/ContactButton';
import ContactFormModal from '../components/ContactFormModal';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className=''>
      <div id='Skills' className='p-4 m-4'>
        <CVDownload />
      </div>
      <div id='Contact' className='p-4 m-4'>
        <ContactButton openModal={openModal}/>
        <ContactFormModal isOpen={isModalOpen} closeModal={closeModal}/>
      </div>
    </div>
  );
}

export default HomePage;
