import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="container mx-auto px-4">
        <div className="navbar-box">
            <div className="logo">
                <h1>Logo</h1>
            </div>

            <ul className="menu">
                <li>
                    <Link href={"/"}>Beranda</Link>
                </li>

                <li>
                   <Link href={"/"}>Produk</Link>
                </li>
                
                <li>
                  <Link href={"/"}>Blog</Link>
                </li>
                
                <li>
                   <Link href={"/"}>Kontak</Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
