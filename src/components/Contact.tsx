
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Instagram, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-light rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-light rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's discuss your ideas</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-medium text-grey-dark mb-4">Contact Information</h3>
              <p className="text-grey mb-6">
                Feel free to reach out through the contact form or via the following channels. 
                I typically respond within 24-48 hours.
              </p>
            </div>
            
            <div className="glass p-5 rounded-xl flex items-start">
              <div className="w-10 h-10 rounded-full bg-pink/10 flex items-center justify-center mr-4">
                <Mail size={18} className="text-pink" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-grey-dark mb-1">Email</h4>
                <a href="mailto:contact@artfolio.com" className="text-grey hover:text-pink transition-colors">
                  contact@artfolio.com
                </a>
              </div>
            </div>
            
            <div className="glass p-5 rounded-xl flex items-start">
              <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center mr-4">
                <MessageSquare size={18} className="text-green" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-grey-dark mb-1">Social Media</h4>
                <div className="flex items-center space-x-4 mt-2">
                  <a href="#" className="text-grey hover:text-pink transition-colors flex items-center">
                    <Instagram size={18} className="mr-1" /> @artfolio
                  </a>
                  <a href="#" className="text-grey hover:text-pink transition-colors flex items-center">
                    <Twitter size={18} className="mr-1" /> @artfolio
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass p-5 rounded-xl">
              <h4 className="text-lg font-medium text-grey-dark mb-3">Current Commission Status</h4>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green rounded-full mr-2"></span>
                <span className="text-grey">Open for select commissions</span>
              </div>
              <p className="text-grey mt-2 text-sm">
                Limited slots available. Priority given to returning clients.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 glass rounded-xl p-8">
            <h3 className="text-xl font-medium text-grey-dark mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-grey-dark text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-grey-light bg-white/80 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-grey-dark text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-grey-light bg-white/80 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-grey-dark text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-grey-light bg-white/80 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                  placeholder="Commission Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-grey-dark text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-grey-light bg-white/80 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project and what you're looking for..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-pink hover:bg-pink-dark text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
