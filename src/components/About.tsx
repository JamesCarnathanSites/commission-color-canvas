
import React from 'react';
import { Palette, Award, Clock, Heart, PawPrint, Cat, Dog } from 'lucide-react';

const About = () => {
  const skills = [
    "Furry Character Design", 
    "Chibi Art", 
    "Anthro Portraits", 
    "Ref Sheets",
    "Fursuit Reference", 
    "Pet Portraits"
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-light rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-light rounded-full filter blur-3xl opacity-30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink/10 text-pink mb-4">
              <PawPrint size={16} className="mr-2" />
              <span className="text-sm font-medium">About the Artist</span>
            </span>
            
            <h2 className="section-title mb-6">Heya, I'm Collie!</h2>
            
            <div className="space-y-6 text-grey-dark">
              <p>
                I'm a furry artist who's totally in love with creating colorful, expressive 
                characters! I've been drawing anthro critters for over 3 years and nothing makes 
                me happier than bringing your fursonas to life.
              </p>
              
              <p>
                My art style ranges from cute and bouncy chibis to detailed ref sheets with all the 
                fluff and personality your characters deserve. I love bright colors, expressive poses,
                and making art that makes you smile!
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
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww" 
                alt="Collie the artist with a cute cat" 
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
              <Dog size={24} className="text-pink" />
            </div>
            <h3 className="text-2xl font-medium text-grey-dark mb-2">3+ Years</h3>
            <p className="text-grey">Drawing the fluffiest, cutest furry characters</p>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center mb-4">
              <Cat size={24} className="text-green" />
            </div>
            <h3 className="text-2xl font-medium text-grey-dark mb-2">100+ Characters</h3>
            <p className="text-grey">Brought to life for happy furs around the world</p>
          </div>
          
          <div className="glass p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-grey-light flex items-center justify-center mb-4">
              <PawPrint size={24} className="text-grey" />
            </div>
            <h3 className="text-2xl font-medium text-grey-dark mb-2">Pawsome Art</h3>
            <p className="text-grey">That captures your fursona's unique personality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
