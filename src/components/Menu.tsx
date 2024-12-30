import React from 'react';

const menuItems = {
  'Telugu Specials': [
    { name: 'Hyderabadi Biryani', price: '16.99', description: 'Aromatic rice layered with tender meat and authentic spices' },
    { name: 'Gutti Vankaya', price: '12.99', description: 'Stuffed eggplant curry in rich peanut and sesame gravy' },
    { name: 'Pootharekulu', price: '6.99', description: 'Traditional sweet made with rice paper and jaggery' },
  ],
  'Common Items': [
    { name: 'Classic Burger', price: '10.99', description: 'Juicy patty with fresh vegetables and special sauce' },
    { name: 'Pasta Alfredo', price: '13.99', description: 'Creamy pasta with garlic and parmesan' },
    { name: 'Club Sandwich', price: '9.99', description: 'Triple-decker with chicken, bacon, and vegetables' },
  ],
};

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6 text-orange-600">{category}</h3>
              <div className="space-y-6">
                {items.map((item) => (
                  <div 
                    key={item.name}
                    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium">{item.name}</h4>
                      <span className="text-lg font-semibold text-orange-600">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}