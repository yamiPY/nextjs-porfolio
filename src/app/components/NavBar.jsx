'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; 
import MenuIcons from './MenuIcons';

function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false); // تعقب حالة فتح وإغلاق القائمة

  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className=' fixed  top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95'>
      <div className='flex  flex-wrap items-center justify-between mx-auto px-4'>
        <Link href={'/'} className='text-2xl text-orange-500   font-semibold'>
          logo
        </Link>

        
        <div className='mobile-menu block md:hidden'>
              {navBarOpen ? (
                <button
                  onClick={() => setNavBarOpen(false)} // عكس الحالة لفتح القائمة عند النقر
                  className='flex items-center px-3 py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                >
                  <XMarkIcon className='w-5 h-5' />
                </button>
              ) : (
                <button
                  onClick={() => setNavBarOpen(true)} 
                  className='flex items-center px-3 py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                >
                  <Bars3Icon className='w-5 h-5' />
                </button>
              )}
        </div>


        
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex flex-col md:flex-row space-x-4'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuIcons links={navLinks}/> : false }
    </nav>
  );
}

export default NavBar;
