
import React from 'react';
import { Palette, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    "Digital Illustration", 
    "Character Design", 
    "Environment Art", 
    "Concept Art",
    "Comic Art", 
    "Stylized Portraits"
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-light rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-light rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink/10 text-pink mb-4">
              <Heart size={16} className="mr-2" />
              <span className="text-sm font-medium">About the Artist</span>
            </span>
            
            <h2 className="section-title mb-6">Hello, I'm Jane Doe</h2>
            
            <div className="space-y-6 text-grey-dark">
              <p>
                I am a professional digital artist with over 5 years of experience creating custom artwork 
                for clients around the world. My passion lies in bringing characters and worlds to life 
                through vibrant colors and meticulous details.
              </p>
              
              <p>
                My art style ranges from stylized illustrations to semi-realistic portraits, always 
                infused with a touch of fantasy. I love collaborating with clients to transform their 
                ideas into beautiful visual art pieces that exceed expectations.
              </p>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-grey-dark">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-green/10 text-green-dark rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFydGlzdCUyMHBhaW50aW5nfGVufDB8fDB8fHww" 
                alt="Portrait of the artist" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl border-2 border-pink -z-10 -rotate-3"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl border-2 border-green -z-10 rotate-3"></div>
          </div>
        </div>
        
        {/* Stats/Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="glass p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center mb-4">
              <Award size={24} className="text-pink" />
            </div>
            <h3 className="text-2xl font-medium text-grey-dark mb-2">5+ Years</h3>
            <p className="text-grey">Professional experience in digital illustration and concept art</p>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center mb-4">
              <Palette size={24} className="text-green" />
            </div>
            <h3 className="text-2xl font-medium text-grey-dark mb-2">200+ Projects</h3>
            <p className="text-grey">Completed commissions for clients around the world</p>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-grey-light flex items-center justify-center mb-4">
              <Clock size={24} className="text-grey" />
            </div>
            <h3 className="text-2xl font-medium text-grey-dark mb-2">Fast Delivery</h3>
            <p className="text-grey">Quick turnaround times without compromising quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
