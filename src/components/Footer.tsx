
import React from 'react';
import { Heart, Mail, Instagram, Twitter, ChevronUp, PawPrint } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-grey-dark text-white pt-16 pb-8 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-serif font-bold mb-4 block flex items-center">
              <PawPrint size={20} className="text-pink mr-2" />
              <span className="text-pink">Collie</span><span className="text-green">'s</span> Art
            </a>
            <p className="text-grey-light mb-6 max-w-md">
              Creating pawsome art that brings your fursonas to life! From chibi art to 
              detailed ref sheets - your characters deserve to be as cute and fluffy as you imagine them.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-pink"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-pink"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:collie@furryart.com" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-pink"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-grey-light hover:text-pink transition-colors">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="text-grey-light hover:text-pink transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#about" className="text-grey-light hover:text-pink transition-colors">About Me</a>
              </li>
              <li>
                <a href="#commissions" className="text-grey-light hover:text-pink transition-colors">Commissions</a>
              </li>
              <li>
                <a href="#contact" className="text-grey-light hover:text-pink transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Art Types</h4>
            <ul className="space-y-2">
              <li>
                <a href="#commissions" className="text-grey-light hover:text-pink transition-colors">Character Refs</a>
              </li>
              <li>
                <a href="#commissions" className="text-grey-light hover:text-pink transition-colors">Chibi Art</a>
              </li>
              <li>
                <a href="#commissions" className="text-grey-light hover:text-pink transition-colors">Full Illustrations</a>
              </li>
              <li>
                <a href="#commissions" className="text-grey-light hover:text-pink transition-colors">Emotes</a>
              </li>
              <li>
                <a href="#commissions" className="text-grey-light hover:text-pink transition-colors">Custom Stickers</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-grey-light text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Collie's Art. All rights reserved.
          </p>
          
          <div className="flex items-center text-grey-light text-sm">
            <span className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-pink" /> for floofy friends
            </span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute bottom-12 right-6 md:right-12 w-10 h-10 rounded-full bg-pink flex items-center justify-center shadow-md transition-transform hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
