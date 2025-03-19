
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, AlertCircle, PawPrint, Cat, Dog, Rabbit } from 'lucide-react';

const commissionTypes = [
  {
    title: "Chibi Art",
    price: "Starting at $25",
    description: "Super cute, bouncy chibi versions of your fursona or OC. Perfect for icons and stickers!",
    details: [
      "Adorable simplified style",
      "Solid or simple background",
      "Digital file in high resolution",
      "2 minor revisions included"
    ],
    popular: false,
    icon: <Cat size={20} />
  },
  {
    title: "Full Character",
    price: "Starting at $45",
    description: "Fully rendered character art with your choice of pose, expression, and simple background.",
    details: [
      "Detailed character rendering",
      "Custom pose and expression",
      "Simple color background",
      "3 minor revisions included"
    ],
    popular: true,
    icon: <Dog size={20} />
  },
  {
    title: "Reference Sheet",
    price: "Starting at $80",
    description: "Complete character reference with multiple views, color notes, and personality details.",
    details: [
      "Front, back, and side views",
      "Color swatches and markings",
      "Expressions chart",
      "Personal details section"
    ],
    popular: false,
    icon: <Rabbit size={20} />
  }
];

const Commission = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I commission you?",
      answer: "Just boop me through the contact form! Let me know what kind of art you're looking for, details about your character, and any references you have. I'll get back to you super quick to discuss details!"
    },
    {
      question: "How long will my commission take?",
      answer: "Chibis usually take 3-5 days, full characters 1-2 weeks, and reference sheets 2-3 weeks. These times can vary depending on my current queue and complexity of the design."
    },
    {
      question: "What file formats do you provide?",
      answer: "All commissions include high-resolution PNG files. For reference sheets, I also provide a PDF version. If you need other formats, just let me know!"
    },
    {
      question: "Do I need to pay upfront?",
      answer: "For new clients, I ask for a 50% deposit before starting work, with the remaining payment due upon completion. Regular clients may have different arrangements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept PayPal, Venmo, and Ko-fi for payments. I can also work with other platforms if needed - just ask!"
    }
  ];

  return (
    <section id="commissions" className="py-20 px-6 md:px-12 bg-grey-light/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <PawPrint size={32} className="text-pink" />
          </div>
          <h2 className="section-title">Commissions</h2>
          <p className="section-subtitle">Let's bring your furry friends to life!</p>
        </div>
        
        {/* Commission Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {commissionTypes.map((commission, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1",
                commission.popular ? "border-2 border-pink relative" : "border border-grey-light"
              )}
            >
              {commission.popular && (
                <div className="absolute top-5 right-5">
                  <span className="bg-pink text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6 bg-white">
                <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center mb-4 text-green">
                  {commission.icon}
                </div>
                <h3 className="text-xl font-medium text-grey-dark mb-2">{commission.title}</h3>
                <p className="text-2xl font-serif text-pink mb-4">{commission.price}</p>
                <p className="text-grey mb-6">{commission.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {commission.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green mr-2 flex-shrink-0 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-grey-dark">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={cn(
                  "w-full py-3 rounded-lg font-medium transition-all duration-300",
                  commission.popular 
                    ? "bg-pink text-white hover:bg-pink-dark" 
                    : "bg-grey-light text-grey-dark hover:bg-pink/10"
                )}>
                  Boop to Commission
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-grey-dark text-center mb-8">My Commission Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 relative">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center text-white font-medium absolute -top-4 left-6">1</div>
              <h4 className="text-lg font-medium text-grey-dark mb-2 mt-4">Chat & Plan</h4>
              <p className="text-grey">We'll discuss your floofy friend and all the details you want to include</p>
            </div>
            
            <div className="glass rounded-xl p-6 relative">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center text-white font-medium absolute -top-4 left-6">2</div>
              <h4 className="text-lg font-medium text-grey-dark mb-2 mt-4">Sketchy Time</h4>
              <p className="text-grey">I'll create sketches for you to review and give feedback on</p>
            </div>
            
            <div className="glass rounded-xl p-6 relative">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center text-white font-medium absolute -top-4 left-6">3</div>
              <h4 className="text-lg font-medium text-grey-dark mb-2 mt-4">Color Magic</h4>
              <p className="text-grey">Adding all the colors, fluff, and details to bring your character to life</p>
            </div>
            
            <div className="glass rounded-xl p-6 relative">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center text-white font-medium absolute -top-4 left-6">4</div>
              <h4 className="text-lg font-medium text-grey-dark mb-2 mt-4">Art Delivery</h4>
              <p className="text-grey">Your new art arrives, ready to show off to all your friends!</p>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div>
          <h3 className="text-2xl font-medium text-grey-dark text-center mb-8">Frequently Asked Questions</h3>
          
          <div className="max-w-3xl mx-auto divide-y divide-grey-light">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button 
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <span className="text-lg font-medium text-grey-dark">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      "text-grey transition-transform duration-300",
                      openFAQ === index ? "transform rotate-180" : ""
                    )} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "mt-2 text-grey overflow-hidden transition-all duration-300",
                    openFAQ === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Commission Notice */}
        <div className="mt-16 p-6 rounded-xl bg-green-light/50 border border-green flex items-start">
          <AlertCircle size={24} className="text-green-dark flex-shrink-0 mt-0.5 mr-4" />
          <div>
            <h4 className="text-lg font-medium text-grey-dark mb-1">Ready for some art?</h4>
            <p className="text-grey-dark mb-2">
              My commission slots fill up fast, so boop me soon to reserve your spot! I can't wait to draw your fluffy characters!
            </p>
            <a href="#contact" className="text-pink font-medium hover:underline inline-block">
              Boop me now! →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commission;
