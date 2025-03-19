
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Commission from '@/components/Commission';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('.section-animate').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <MainLayout>
      <Hero />
      
      <div className="section-animate opacity-0">
        <Portfolio />
      </div>
      
      <div className="section-animate opacity-0">
        <About />
      </div>
      
      <div className="section-animate opacity-0">
        <Commission />
      </div>
      
      <div className="section-animate opacity-0">
        <Contact />
      </div>
    </MainLayout>
  );
};

export default Index;
