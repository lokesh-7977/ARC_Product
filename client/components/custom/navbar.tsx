"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import MobileNavbar from "./mobilenavbar";
import { useMyContext } from "@/Context/CartContext";
const newLaunches = [
  {
    title: "Product 1",
    href: "/new/product-1",
    description: "This is the first new product.",
  },
  {
    title: "Product 2",
    href: "/new/product-2",
    description: "This is the second new product.",
  },
  {
    title: "Product 3",
    href: "/new/product-3",
    description: "This is the third new product.",
  },
  // Add more products as needed
];

export function Navbar() {
  const { cart } = useMyContext();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e:any) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = newLaunches.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex z-50 bg-background w-full h-fit border-b-[0.5px] border-secondary_color justify-between px-10 py-4">
      <Link href="/" className="hidden md:flex">
        <div className="text-2xl font-semibold font-Cinzel_Decorative text-secondary_color pt-2">
          ARC
        </div>
      </Link>

      <div className="pt-2 hidden md:flex justify-between gap-10 text-text_black">
        <Link href="/#new" className="hover:text-secondary_color font-Poppins">
          New
        </Link>
        <Link href="/" className="hover:text-secondary_color font-Poppins">
          Featured Product
        </Link>
        <Link href="/#blogs" className="hover:text-secondary_color font-Poppins">
          Blogs
        </Link>
        <Link href="/" className="hover:text-secondary_color font-Poppins">
          Offers
        </Link>
        <Link href="/#about" className="hover:text-secondary_color font-Poppins">
          About Us
        </Link>
      </div>
      <div className="hidden md:flex gap-5">
        <button
          className="bg-transparent text-black px-5 py-3 h-fit font-Poppins align-middle flex justify-center text-nowrap"
          onClick={toggleSearch}
        >
          <FaSearch className="w-5 h-5 mr-2 text-secondary_color" />
          Search
        </button>
        <Link href="/cart">
        <button className="bg-transparent text-black px-5 py-3 h-fit font-Poppins align-middle flex justify-center text-nowrap relative">
          <FaShoppingCart className="w-5 h-5 mr-2 text-[#9D4439]" />
          {cart.items.length > 0 && (
            <span className="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-secondary_color rounded-full">
              {cart.items.length}
            </span>
          )}
          Your Cart
          
        </button>
        </Link>
      </div>
      <MobileNavbar />
      {searchOpen && (
        <div className="w-full z-50 mt-10 bg-white shadow-md p-4 absolute top-16 left-0">
          <div className="flex pl-5">
          <FaSearch className="w-5 h-5 mt-[9px] mr-1 text-black" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 "
            placeholder="Search..."
          />
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Navbar;
