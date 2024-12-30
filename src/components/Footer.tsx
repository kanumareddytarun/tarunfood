import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tarun's Spicy Hub</h3>
            <p className="text-gray-400">
              Where Telugu Flavors Meet Culinary Art
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border-gray-700 text-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-orange-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tarun's Spicy Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}