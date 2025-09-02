import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 md:py-12 text-center relative overflow-hidden bg-brand-cream shadow-2xl">
      <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-48 0c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-48 0c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-48 0c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z\' fill=\'%233E2723\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      <div className="relative">
        <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-brand-brown">
          Shree Shyam
        </h1>
        <p className="text-brand-gold text-2xl md:text-4xl font-serif tracking-widest mt-2 drop-shadow-sm">
          Food Court
        </p>
        <p className="text-brand-brown/70 text-sm md:text-base mt-4">
          A culinary journey of authentic flavors.
        </p>
      </div>
    </header>
  );
};

export default Header;