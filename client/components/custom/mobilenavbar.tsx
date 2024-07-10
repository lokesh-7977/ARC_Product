"use client"
import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="navbar" className=" top-0 left-0 right-0 w-full flex z-50 md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" justify-end ml-auto top-7 mr-7 z-50"
      >
        {isOpen ? (
          <XIcon className="h-8 w-8 text-secondary_color transition-transform duration-500 transform rotate-180" />
        ) : (
          <MenuIcon className="h-8 w-8 text-secondary_color transition-transform duration-500" />
        )}
      </button>
      <div
        className={`transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden fixed flex  flex-col bg-background items-center font-bold text-secondary_text justify-center top-0 right-0 h-full w-[70%] z-20 font-antonio text-[30px]`}
      >
        <div className={`flex-col flex gap-5 text-center text-xl font-poppins font-medium text-secondary_color px-10 py-10 transition-all ease-in-out duration-300 ${isOpen ? "flex" : "hidden"}`}>
        
        <Link href="#new" className="hover:text-text-secondary_color">New</Link>
        <Link href="#featured" className="hover:text-text-secondary_color">Featured Product</Link>
        <Link href="#blogs" className="hover:text-text-secondary_color">Blogs</Link>
        <Link href="#" className="hover:text-text-secondary_color">Offers</Link>
        <Link href="#about" className="hover:text-text-secondary_color">About Us</Link>
        <Link href="/cart" className="hover:text-text-secondary_color">Cart</Link>
      </div>
      </div>
    </div>
  );
};

export default MobileNavbar;