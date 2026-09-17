"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AnimatedNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <a href={href} onClick={handleClick} className="group relative inline-block px-3 py-1 text-sm font-semibold text-slate-800 hover:text-[#0d88ca] transition-colors">
      {children}
    </a>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle rounded corners on menu toggle
  useEffect(() => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    if (isOpen) {
      setHeaderShapeClass('rounded-2xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }
    return () => {
      if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    };
  }, [isOpen]);

  const navLinksData = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'FAQs', href: '#faq' },
  ];

  const contactButtonElement = (
    <div className="relative group w-full sm:w-auto">
      {/* White glow effect */}
      <div className="absolute inset-0 -m-1.5 rounded-full hidden sm:block bg-white opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-2.5"></div>
      <button
        onClick={() => {
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }}
        className="relative z-10 px-5 py-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#0a4c7f] to-[#0d88ca] text-white shadow-md shadow-blue-500/20 hover:opacity-95 rounded-full transition-all duration-200 w-full sm:w-auto"
      >
        Contact Us
      </button>
    </div>
  );

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-[100] flex flex-col items-center backdrop-blur-md backdrop-saturate-150 ${headerShapeClass} border border-white/40 bg-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),_0_8px_32px_rgba(0,0,0,0.08)] w-[calc(100%-2rem)] sm:w-auto transition-all duration-300 ease-in-out ${isScrolled ? 'top-4 px-4 py-2 sm:px-6 sm:py-2.5' : 'top-14 px-6 py-3 sm:px-8 sm:py-3.5'
        }`}
    >
      <div className={`flex items-center justify-between w-full transition-all duration-300 ${isScrolled ? 'gap-x-6 sm:gap-x-8' : 'gap-x-8 sm:gap-x-12'}`}>

        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/logo.png"
            alt="Xenith Services Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center space-x-1">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* Contact Button with Glow */}
        <div className="hidden sm:flex items-center">
          {contactButtonElement}
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-slate-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-3 text-base w-full mb-4">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  if (link.href === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }
              }}
              className="text-slate-800 hover:text-[#0d88ca] font-semibold transition-colors w-full text-center py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center w-full">
          {contactButtonElement}
        </div>
      </div>
    </header>
  );
}