import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Button from './Button';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact Us', path: '/contact-us' },
];

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOrderClick = () => {
    setIsOpen(false);
    navigate('/products');
  };

  const linkStyles = ({ isActive }) =>
    `font-bold font-roboto transition-colors duration-300 ${
      isActive
        ? 'text-yellow-600 border-b-2 border-yellow-600'
        : scrolled
          ? 'text-gray-700 hover:text-yellow-600'
          : 'text-gray-800 hover:text-yellow-600'
    }`;

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-1 outline-none"
        >
          <img
            src="/images/honeyspotlogo.png"
            alt="HoneySpot Logo"
            className="w-9 h-9 rounded-full object-cover shadow-sm"
          />
          <span
            className={`text-2xl font-black tracking-tight ${
              scrolled ? 'text-green-800' : 'text-green-700'
            }`}
          >
            Yinra<span className="text-yellow-600 font-roboto">honey</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-roboto">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyles}>
              {link.name}
            </NavLink>
          ))}
          <Button onClick={handleOrderClick}>Order Now</Button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="text-3xl text-green-800 focus:outline-none transition-transform active:scale-90"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="absolute top-6 right-6 text-4xl text-green-800 hover:rotate-90 transition-transform"
          >
            <HiX />
          </button>

          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-black font-roboto transition-colors ${
                  isActive ? 'text-yellow-600' : 'text-gray-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Button onClick={handleOrderClick}>Order Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;