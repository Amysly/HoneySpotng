import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Button from './Button';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false); // Ensures mobile drawer closes upon navigation
    navigate('/products');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const linkStyles = ({ isActive }) =>
    `relative py-1.5 font-bold font-roboto text-sm tracking-wide transition-colors duration-200 ${
      isActive
        ? 'text-amber-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-600 after:rounded-full'
        : 'text-emerald-950/80 hover:text-amber-600'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(6,78,59,0.06)]  py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2.5 outline-none"
        >
          <div className="relative">
            <img
              src="/images/honeyspotlogo.png"
              alt="HoneySpot Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <span className="text-2xl font-black font-roboto tracking-tight text-emerald-950">
            Yinra<span className="text-amber-500">Honey</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyles}>
              {link.name}
            </NavLink>
          ))}

          <Button
            onClick={handleNavigate}
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold
             font-roboto px-6 py-2.5 rounded-xl  transition-all flex items-center gap-2 active:scale-[0.98]"
          >
            <span>Order Now</span>
          </Button>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="w-11 h-11 rounded-xl bg-white/90 border border-amber-100 shadow-xs flex items-center justify-center text-2xl text-emerald-950 hover:bg-amber-50 focus:outline-none transition-all active:scale-95"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-[#FDFBF7]/98 backdrop-blur-xl z-40 transform transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Ambient Decorative Glow inside Mobile Menu */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-amber-100/80">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5"
          >
            <img
              src="/images/honeyspotlogo.png"
              alt="HoneySpot Logo"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-xl font-black font-roboto text-emerald-950">
              Yinra<span className="text-amber-500">Honey</span>
            </span>
          </NavLink>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="w-11 h-11 rounded-xl bg-amber-100/70 text-2xl text-emerald-950 flex items-center justify-center hover:bg-amber-200/70 transition-colors"
          >
            <HiX />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-85px)] px-6 space-y-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-roboto tracking-tight transition-colors ${
                  isActive
                    ? 'text-amber-600'
                    : 'text-emerald-950 hover:text-amber-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-4 w-full ">
            <Button
              onClick={handleNavigate}
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold font-roboto py-2
               rounded-2xl shadow-lg"
            >
              <span>Order Now</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;