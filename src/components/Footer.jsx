import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <div className='pt-20 pb-6 flex items-center justify-between md:flex-row flex-col'>
        <p>&copy; 2025. All rights reserved</p>

        <div className='flex gap-4'>
            <Link href="/">Terms</Link>
            <Link href="/">Privacy</Link>
            <Link href="/">Cookies</Link>
        </div>
      </div>
    </div>
  )
}
