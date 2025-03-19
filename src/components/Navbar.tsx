
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "glass shadow-sm backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-serif font-bold text-grey-dark mr-8 flex items-center">
            <Heart size={24} className="text-pink mr-2" />
            <span className="text-pink">Collie</span><span className="text-green">'s</span> Art
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('home')} className="nav-link cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('portfolio')} className="nav-link cursor-pointer">Gallery</a>
          <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About Me</a>
          <a onClick={() => scrollToSection('commissions')} className="nav-link cursor-pointer">Commissions</a>
          <a onClick={() => scrollToSection('contact')} className="btn-primary cursor-pointer">Boop Me!</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-grey-dark hover:text-pink transition-colors" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 pt-20 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8 text-lg">
          <a onClick={() => scrollToSection('home')} className="nav-link cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('portfolio')} className="nav-link cursor-pointer">Gallery</a>
          <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About Me</a>
          <a onClick={() => scrollToSection('commissions')} className="nav-link cursor-pointer">Commissions</a>
          <a onClick={() => scrollToSection('contact')} className="btn-primary cursor-pointer mt-4">Boop Me!</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
