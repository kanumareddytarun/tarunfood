import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-600" />
                <span>123 Spice Street, Flavortown, ST 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange-600" />
                <span>info@tarunspicyhub.com</span>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="h-[400px] bg-gray-200 rounded-lg">
            {/* Placeholder for Google Maps */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Google Maps Embed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}