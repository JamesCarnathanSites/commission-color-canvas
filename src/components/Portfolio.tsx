
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Maximize2, X } from 'lucide-react';

// Sample portfolio items, in a real app these would come from a database or API
const portfolioItems = [
  {
    id: 1,
    title: "Fantasy Character",
    category: "character",
    img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhbnRhc3klMjBhcnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "Enchanted Forest",
    category: "landscape",
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5jaGFudGVkJTIwZm9yZXN0fGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Portrait Study",
    category: "portrait",
    img: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
  },
  {
    id: 4,
    title: "Sci-Fi Concept",
    category: "concept",
    img: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaSUyMGZpJTIwYXJ0fGVufDB8fDB8fHww"
  },
  {
    id: 5,
    title: "Animal Companion",
    category: "character",
    img: "https://images.unsplash.com/photo-1560073744-7643b964bdf8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFudGFzeSUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 6,
    title: "Fantasy Map",
    category: "concept",
    img: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFudGFzeSUyMG1hcHxlbnwwfHwwfHx8MA%3D%3D"
  }
];

const categories = ["all", "character", "landscape", "portrait", "concept"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleImageLoad = (id: number) => {
    setIsLoading(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-light rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-light rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">A showcase of my recent artwork and commissions</p>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-pink text-white shadow-md"
                    : "bg-grey-light text-grey-dark hover:bg-pink/10"
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl"
            >
              <div className="aspect-w-4 aspect-h-3 bg-grey-light relative">
                {(isLoading[item.id] !== false) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-pink border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={item.img}
                  alt={item.title}
                  onLoad={() => handleImageLoad(item.id)}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    "hover:scale-105 group-hover:opacity-95",
                    isLoading[item.id] !== false ? "opacity-0" : "opacity-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grey-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40"
                  aria-label="Enlarge"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {activeItem !== null && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full animate-scale-up">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-pink transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <img
                src={portfolioItems.find(item => item.id === activeItem)?.img}
                alt={portfolioItems.find(item => item.id === activeItem)?.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-medium">
                  {portfolioItems.find(item => item.id === activeItem)?.title}
                </h3>
                <p className="text-white/70 capitalize">
                  {portfolioItems.find(item => item.id === activeItem)?.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
