
import React from 'react';
import type { MenuItem } from '../types';

const BestsellerTag: React.FC = () => (
  <div className="absolute top-0 left-0 bg-brand-gold text-brand-brown text-xs font-bold px-3 py-1 rounded-tl-xl rounded-br-lg shadow-md flex items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    Bestseller
  </div>
);

const MenuItemCard: React.FC<{item: MenuItem}> = ({ item }) => {
  return (
    <div className="bg-gradient-to-br from-brand-light/5 to-brand-light/10 rounded-xl p-5 border border-brand-light/20 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:border-brand-gold relative group">
      {item.isBestseller && <BestsellerTag />}
      <div className="flex-1">
        <div className="flex justify-between items-start gap-4">
            <h3 className="font-bold text-lg text-white group-hover:text-brand-gold transition-colors">{item.name}</h3>
            <div className="text-lg font-bold text-brand-gold whitespace-nowrap mt-px">
                {item.price > 0 ? `₹${item.price}` : ''}
            </div>
        </div>
        {item.description && <p className="text-sm text-gray-400 mt-2">{item.description}</p>}
      </div>
    </div>
  );
};

export default MenuItemCard;
