
import React from 'react';
import type { MenuCategory } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  category: MenuCategory;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="relative mb-10 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-48 md:h-64 object-cover rounded-lg shadow-xl brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end justify-start p-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg">
            {category.name}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.items.map((item, index) => (
          <MenuItemCard key={`${category.id}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
