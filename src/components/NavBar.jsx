import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  // active link styling
  const linkStyles = ({ isActive }) => 
    `font-bold transition-colors duration-300 ${
      isActive 
        ? 'text-yellow-600 border-b-2 border-yellow-600' 
        : scrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-gray-800 hover:text-yellow-600'
    }`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 outline-none">
          <div className="w-9 h-9  rounded-full flex items-center justify-center  shadow-sm">
            <img src='images/honeyspotlogo.jpeg'> 
            </img>
          </div>
          <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-green-800' : 'text-green-700'}`}>
            Honey<span className="text-yellow-600">Spot</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkStyles}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to='/products' className="bg-green-700 text-white px-7 py-2.5 rounded-full font-bold
           hover:bg-green-600 transition-all transform hover:scale-105 shadow-md">
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-green-800 focus:outline-none transition-transform active:scale-90"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-4xl text-green-800 hover:rotate-90 transition-transform"
          >
            <HiX />
          </button>
          
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `text-2xl font-black transition-colors ${
                  isActive ? 'text-yellow-600' : 'text-gray-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <button className="bg-green-700 text-white px-8 py-2 rounded-full
           font-bold text-lg shadow-xl hover:bg-green-600">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;