import React from 'react';
import{NavLink} from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact-us' },
  ];
  return (
    <footer className="bg-neutral-900 text-yellow-400 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className='flex justify-items-center'>
          <img src='images/honeyspotlogo.jpeg' className='w-20 h-20'> 
            </img>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Pure, natural, and locally-sourced honey crafted to sweeten your life. 
            From our hives to your home, we bring you the gold standard of nature.
          </p>
        </div>

       {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
        <ul className="space-y-3 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                className="hover:text-white transition-colors duration-200 block"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

        {/* Contact & Socials */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <FaEnvelope className="text-yellow-500 group-hover:scale-110 transition-transform" />
              <a href="mailto:honeyspot@gmail.com" className="text-sm hover:text-white transition-colors">
                Honeyspot@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 group">
              <FaPhone className="text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm">08110977549</span>
            </div>
          </div>

          <div className="flex space-x-5 pt-2">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="bg-yellow-500 text-black p-2.5 rounded-full hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 border-t border-neutral-800 pt-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} HoneySpot. All rights reserved.</p>
          <div className="flex space-x-6">
            <h6 className="hover:text-yellow-500">Privacy Policy</h6>
            <h6  className="hover:text-yellow-500">Terms of Service</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;