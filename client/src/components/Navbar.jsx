import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check if a theme is stored in localStorage, if not, check the system preference.
    const storedTheme = localStorage.getItem('theme');
    return (
      storedTheme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    );
  });

  // Add a state variable to track the active section
  const [activeSection, setActiveSection] = useState('Home');

  const handleClick = () => setNav(!nav);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('New Theme:', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      // Update the theme only if it's not set in localStorage
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    // Update the theme only if it's not set in localStorage
    if (!localStorage.getItem('theme')) {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Function to handle scrolling and set the active section
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const homeSection = document.getElementById('Home');
    const aboutSection = document.getElementById('About');
    const skillsSection = document.getElementById('Skills');
    const projectsSection = document.getElementById('Projects');
    const contactSection = document.getElementById('Contact');

    if (scrollY >= contactSection.offsetTop && activeSection !== 'Contact') {
      setActiveSection('Contact');
    } else if (
      scrollY >= projectsSection.offsetTop &&
      activeSection !== 'Projects'
    ) {
      setActiveSection('Projects');
    } else if (
      scrollY >= skillsSection.offsetTop &&
      activeSection !== 'Skills'
    ) {
      setActiveSection('Skills');
    } else if (scrollY >= aboutSection.offsetTop && activeSection !== 'About') {
      setActiveSection('About');
    } else if (scrollY < homeSection.offsetTop && activeSection !== 'Home') {
      setActiveSection('Home');
    }
  };

  // Add a scroll event listener to handle scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setNav(false); // Close the mobile menu when a link is clicked
    }
  };

  return (
    <div className='empty-class'>
      <div className='w-full h-[80px] flex justify-evenly items-center px-4 scale-100 bg-blue-300 text-grey-50 font-bold dark:bg-ice-dark rounded-full'>
        {/* Dark Mode Switch */}
        <div className='flex px-4 text-grey-50 hover:scale-150 duration-150 hover:text-yellow-400 z-1'>
          {theme === 'light' ? (
            <FaSun
              onClick={handleThemeSwitch}
              className='cursor-pointer'
              size={30}
            />
          ) : (
            <FaMoon
              onClick={handleThemeSwitch}
              className='cursor-pointer'
              size={30}
            />
          )}
        </div>
        {/* menu */}
        <ul className='hidden md:flex gap-x-8'>
          <li className='nav-list-item hover:text-yellow-400'>
            <a
              href='#Home'
              onClick={(e) => scrollToSection('Home', e)}
              className={activeSection === 'Home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li className='nav-list-item hover:text-yellow-400'>
            <a
              href='#About'
              onClick={(e) => scrollToSection('About', e)}
              className={activeSection === 'About' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li className='nav-list-item hover:text-yellow-400'>
            <a
              href='#Skills'
              onClick={(e) => scrollToSection('Skills', e)}
              className={activeSection === 'Skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li className='nav-list-item hover:text-yellow-400'>
            <a
              href='#Projects'
              onClick={(e) => scrollToSection('Projects', e)}
              className={activeSection === 'Projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li className='nav-list-item hover:text-yellow-400'>
            <a
              href='#Contact'
              onClick={(e) => scrollToSection('Contact', e)}
              className={activeSection === 'Contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Empty Spacer */}
        <div className='flex px-4 text-grey-light'></div>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-steel-dark dark:bg-ice-dark text-grey-light flex flex-col justify-center items-center p-4'
          }
        >
          <li className='py-6 text-2xl'>
            <a
              href='#Home'
              onClick={(e) => scrollToSection('Home', e)}
              className={activeSection === 'Home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li className='py-6 text-2xl'>
            <a
              href='#About'
              onClick={(e) => scrollToSection('About', e)}
              className={activeSection === 'About' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li className='py-6 text-2xl'>
            <a
              href='#Skills'
              onClick={(e) => scrollToSection('Skills', e)}
              className={activeSection === 'Skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li className='py-6 text-2xl'>
            <a
              href='#Projects'
              onClick={(e) => scrollToSection('Projects', e)}
              className={activeSection === 'Projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li className='py-6 text-2xl'>
            <a
              href='#Contact'
              onClick={(e) => scrollToSection('Contact', e)}
              className={activeSection === 'Contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Social icons */}
      </div>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
        <ul>
          <li className='w-[150px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300 dark:bg-blue-600 bg-blue-600 rounded-r-2xl overflow-hidden'>
            <a
              className='flex justify-between p-2 items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/randalltaylor98/'
              target='_blank' // Open in a new tab
              rel='noopener noreferrer' // Security best practice
            >
              Linkedin
              <FaLinkedin size={40} />
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300 bg-steel-dark rounded-r-2xl overflow-hidden'>
            <a
              className='flex justify-between p-2 items-center w-full text-gray-300'
              href='https://github.com/randyyanish'
              target='_blank' // Open in a new tab
              rel='noopener noreferrer' // Security best practice
            >
              Github
              <FaGithub size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
