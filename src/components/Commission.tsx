
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, AlertCircle } from 'lucide-react';

const commissionTypes = [
  {
    title: "Character Design",
    price: "Starting at $50",
    description: "Custom character designs in full color with simple background. Great for OCs and fan art.",
    details: [
      "High-resolution digital artwork",
      "Character design sheet",
      "2 minor revisions included",
      "Commercial use rights not included"
    ],
    popular: false
  },
  {
    title: "Portrait",
    price: "Starting at $75",
    description: "Detailed character portraits with atmospheric background and lighting effects.",
    details: [
      "High-resolution digital artwork",
      "Complex lighting and effects",
      "3 minor revisions included",
      "Commercial use rights available"
    ],
    popular: true
  },
  {
    title: "Full Illustration",
    price: "Starting at $150",
    description: "Fully rendered scene with characters, detailed background, and special effects.",
    details: [
      "High-resolution digital artwork",
      "Multiple characters available",
      "Detailed environment and effects",
      "Commercial use rights available"
    ],
    popular: false
  }
];

const Commission = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your commission process?",
      answer: "My commission process involves an initial consultation, sketch approval, color and shading approval, and final delivery. I keep you involved at every step to ensure the final artwork meets your expectations."
    },
    {
      question: "How long does a commission take?",
      answer: "Turnaround time varies based on complexity and my current workload. Character designs typically take 1-2 weeks, while full illustrations may take 2-4 weeks. I always provide estimated timeframes before starting."
    },
    {
      question: "What file formats do you provide?",
      answer: "All commissions include high-resolution JPG and PNG files. For an additional fee, I can provide PSD files with layers or other formats upon request."
    },
    {
      question: "Do you offer commercial use rights?",
      answer: "Basic commissions include personal use only. Commercial rights are available for an additional fee, with pricing depending on the intended use and distribution scale."
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept payments through PayPal, Venmo, and bank transfers. For most commissions, I require a 50% non-refundable deposit to begin work, with the remaining balance due upon completion."
    }
  ];

  return (
    <section id="commissions" className="py-20 px-6 md:px-12 bg-grey-light/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Commission Information</h2>
          <p className="section-subtitle">Pricing and details for custom artwork</p>
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
                  Request Commission
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
              <h4 className="text-lg font-medium text-grey-dark mb-2 mt-4">Initial Consultation</h4>
              <p className="text-grey">Discuss your ideas, requirements, and vision for the artwork</p>
            </div>
            
            <div className="glass rounded-xl p-6 relative">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center text-white font-medium absolute -top-4 left-6">2</div>
              <h4 className="text-lg font-medium text-grey-dark mb-2 mt-4">Sketching Phase</h4>
              <p className="text-grey">Review and approve initial sketches and composition</p>
            </div>
            
            <div className="glass rounded-xl p-6 relative">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center text-white font-medium absolute -top-4 left-6">3</div>
              <h4 className="text-lg font-medium text-grey-dark mb-2 mt-4">Coloring & Details</h4>
              <p className="text-grey">Add colors, shading, and fine details to bring the art to life</p>
            </div>
            
            <div className="glass rounded-xl p-6 relative">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center text-white font-medium absolute -top-4 left-6">4</div>
              <h4 className="text-lg font-medium text-grey-dark mb-2 mt-4">Final Delivery</h4>
              <p className="text-grey">Receive high-resolution files ready for your intended use</p>
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
            <h4 className="text-lg font-medium text-grey-dark mb-1">Ready to Commission?</h4>
            <p className="text-grey-dark mb-2">
              Please note that I have limited commission slots available each month. Contact me to check availability and discuss your project.
            </p>
            <a href="#contact" className="text-pink font-medium hover:underline inline-block">
              Contact me now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commission;
