
import React, { useEffect, useRef } from 'react';
import { PaintBrush, Sparkles, ArrowDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-light rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-light rounded-full filter blur-3xl opacity-30 animate-ping-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-grey-light rounded-full filter blur-3xl opacity-20 animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center relative z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink/10 text-pink mb-6 animate-on-scroll opacity-0">
            <Sparkles size={16} className="mr-2" />
            <span className="text-sm font-medium">Art Commission Portfolio</span>
          </span>
          
          <h1 
            ref={titleRef}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-grey-dark mb-6 animate-on-scroll opacity-0"
          >
            Bringing Your <br />
            <span className="text-pink">Imaginations</span> to Life
          </h1>
          
          <p className="text-lg md:text-xl text-grey max-w-2xl mx-auto mb-10 animate-on-scroll opacity-0 delay-300">
            Custom art that captures your vision with exquisite detail and vibrant colors.
            From character designs to fantasy landscapes — your ideas, my canvas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll opacity-0 delay-500">
            <button className="btn-primary flex items-center">
              <PaintBrush size={18} className="mr-2" />
              See My Work
            </button>
            <button className="btn-outline">
              Commission Info
            </button>
          </div>
        </div>
        
        <button 
          onClick={scrollToPortfolio}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-grey hover:text-pink transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={30} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
