import React, { useState, useEffect, useRef } from 'react';

interface StickyNavProps {
  categories: { id: string; name: string }[];
}

const StickyNav: React.FC<StickyNavProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleCategory = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleCategory) {
        setActiveCategory(visibleCategory.id);
      }
    }, { rootMargin: '-40% 0px -60% 0px' });

    const elements = document.querySelectorAll('section[id]');
    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      elements.forEach((el) => observer.current?.unobserve(el));
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        // Use scrollIntoView for smooth navigation
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 bg-brand-brown/90 backdrop-blur-lg z-10 shadow-lg border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto py-3 no-scrollbar">
          {categories.map(category => (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={(e) => handleNavClick(e, category.id)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 ease-in-out border-2 border-transparent ${
                activeCategory === category.id
                  ? 'bg-brand-gold text-brand-brown scale-105 shadow-md'
                  : 'text-brand-light hover:bg-brand-gold/20 hover:border-brand-gold/50'
              }`}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;