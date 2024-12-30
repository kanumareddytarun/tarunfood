import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-2xl text-orange-600">
            Tarun's Spicy Hub
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-orange-600 transition-colors">Home</a>
              <a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a>
              <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
              <a href="#gallery" className="hover:text-orange-600 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 hover:text-orange-600">Home</a>
            <a href="#menu" className="block px-3 py-2 hover:text-orange-600">Menu</a>
            <a href="#about" className="block px-3 py-2 hover:text-orange-600">About</a>
            <a href="#gallery" className="block px-3 py-2 hover:text-orange-600">Gallery</a>
            <a href="#contact" className="block px-3 py-2 hover:text-orange-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}