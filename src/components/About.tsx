import React from 'react';
import { Utensils } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80"
                alt="Restaurant interior"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="text-orange-600" size={24} />
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Founded with a passion for authentic Telugu cuisine, Tarun's Spicy Hub has been serving 
              the community with traditional flavors and modern culinary innovations since 2015.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our commitment to using fresh, locally-sourced ingredients and traditional spice blends 
              ensures that every dish tells a story of our rich culinary heritage.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Unique Dishes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}