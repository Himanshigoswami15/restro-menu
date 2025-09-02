
import React from 'react';
import Header from './components/Header';
import StickyNav from './components/StickyNav';
import MenuSection from './components/MenuSection';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-brand-light font-sans">
      <Header />
      <StickyNav categories={MENU_DATA.map(cat => ({ id: cat.id, name: cat.name }))} />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="space-y-16">
          {MENU_DATA.map(category => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
      </main>
      <footer className="text-center py-10 mt-10 border-t border-brand-light/10">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-400 mb-4">
            <span>Shop. No.11,12,13, Samrdhi Complex, Opp. HDFC Bank - SANCHORE</span>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+917297872969" className="hover:text-brand-gold transition-colors">
              Contact: 72978 72969
            </a>
        </div>
        <p className="text-gray-400">&copy; 2024 Shree Shyam Food Court. All Rights Reserved.</p>
        <p className="text-sm mt-2 text-brand-gold/50">Digital Menu Crafted with Passion.</p>
      </footer>
    </div>
  );
};

export default App;
