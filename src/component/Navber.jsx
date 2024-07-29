"use client";


import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-[#3985ED]'>
      <section className='w-[90%] mx-auto'>
        <nav className="relative">
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <a href="#">
                <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
              </a>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
                <div className='lg:block hidden'>
                  <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
    Confirm
  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out text-black md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100 bg-black min-h-[100vh] ' : 'opacity-0 -translate-x-full'
                }`}
            >
              <div className="flex flex-col md:flex-row md:mx-6">
                <a className="my-2 text-white lg:text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">
                  Home
                </a>
                <a className="my-2 text-white lg:text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/about">
                  About
                </a>
                <a className="my-2 text-white lg:text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/contact">
                  Contact us
                </a>

              </div>
            </div>
            <div className='md:block hidden'>
              <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-800">
    Confirm
  </button>
            </div>
          </div>
        </nav>
      </section>
    </header>

  );
};

export default Navbar;
