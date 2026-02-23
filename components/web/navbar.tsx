import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { ThemeToggle } from './theme-toggle'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold">Next<span className="text-blue-500">Pro</span></Link>
         
          <div className="space-x-4">
            <Link href="/" className="hover:text-orange-300">Home</Link>
            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
            <Link href="/create" className="hover:text-gray-300">Create</Link>
          </div>
          <div className='flex items-center gap-2'>
            <Link href="/sign-up" className={buttonVariants({ variant: "default" })}>Sign Up</Link>
            <Link href="/login" className={buttonVariants({ variant: "secondary" })}>Login</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
