'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/Logo2.png';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full   md:px-4 bg-white backdrop-blur-lg z-50 shadow-sm will-change-transform">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        {/* <div className="hidden md:flex justify-end items-center py-2 border-b text-sm">
          <div className="flex items-center space-x-4 text-gray-600">
            <a href="tel:+919717243531" className="flex items-center gap-2 hover:text-[#0e2a47]">
              <Phone className="w-4 h-4" />
              +91 9717243531
            </a>
            <a href="mailto:sukaryamworld@gmail.com" className="flex items-center gap-2 hover:text-[#0e2a47]">
              <Mail className="w-4 h-4" />
              sukaryamworld@gmail.com
            </a>
          </div>
        </div> */}

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-[#0e2a47]">
          <Image 
    src={Logo} 
    alt="Sukaryam Logo" 
    width={150} 
    height={40} 
    className="object-contain"
  />          </Link>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white md:bg-transparent md:relative md:block md:top-0`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-[#cc9e4b]">Home</Link></li>
              <li><Link href="/About" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-[#cc9e4b]">About</Link></li>

              <li><Link href="/OurCapablities" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-[#cc9e4b]">Our Capablities</Link></li>
              <li><Link href="/Services" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-[#cc9e4b]">Services</Link></li>
              <li>
                <Link 
                  href="/Contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block px-6 py-2 bg-[#0e2a47] text-white rounded-full hover:bg-[#0e2a47]/90 transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}