"use client";
import Link from "next/link";
import React from "react";

import { useState } from "react";
const Navbar = () => {

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div className="navbar bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-3xl font-bold text-gray-800">Logo</h1>
          </div>

          {/* Menu */}
          <ul
            className={`menu flex items-center gap-10
            md:static absolute ${open ? "top-18 opacity-100" : "top-20 opacity-0"} left-0  
            md:flex-row flex-col 
            md:bg-transparent bg-slate-800 
            w-full md:w-auto 
            md:py-0 py-6 
            text-white md:text-gray-800 
            font-medium transition-all md:opacity-100 md:transition-none`}
          >
            <li className="hover:text-blue-500 transition-colors">
              <Link href="/">Beranda</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <Link href="/produk">Produk</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <Link href="/kontak">Kontak</Link>
            </li>
          </ul>

          {/* Menu Icon (Mobile) */}
          <div className="menu-icon md:hidden block cursor-pointer text-gray-800"  onClick={handleClick}>
            <i className={`${open ? "ri-close-line" : "ri-menu-3-line"} text-2xl font-bold`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
