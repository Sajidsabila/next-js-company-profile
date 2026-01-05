"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export const ScroolToTop = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleCrool = () => {
            if(window.scrollY > 300){
                setShowButton(true);
            }else{
                setShowButton(false);
            }
        }
        window.addEventListener("scroll", handleCrool);
        return () => {
            window.removeEventListener("scroll", handleCrool);
        }
    }, [])
  return (
    <Link className={`fixed bottom-10 right-10 bg-slate-800 w-12 text-white
    rounded-full text-center hover:bg-slate-700 hover:cursor:pointer transition-all
    ${showButton ? "opacity-100" : "opacity-0"}`} href="#hero">
        <i className='ri-arrow-up-line ri-2x'></i>
    </Link>
  )
}
