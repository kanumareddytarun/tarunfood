import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tarun's Spicy Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Where Telugu Flavors Meet Culinary Art
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu"
              className="inline-flex items-center px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
            >
              Explore Menu
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}