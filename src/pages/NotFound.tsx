
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-light rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-light rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="glass p-12 rounded-xl max-w-xl w-full text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-pink-light/50 flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} className="text-pink" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-grey-dark mb-4">404</h1>
        <p className="text-xl text-grey mb-8">Oops! We couldn't find the page you're looking for.</p>
        
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-pink text-white font-medium rounded-full transition-all duration-300 hover:bg-pink-dark hover:shadow-md hover:-translate-y-1"
        >
          <Home size={18} className="mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
