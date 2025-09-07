import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Category, Content } from '../types';
import ContentCard from './ContentCard';

interface CategorySectionProps {
  category: Category;
  onContentClick: (content: Content) => void;
  isDark: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  category, 
  onContentClick, 
  isDark 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  return (
    <div className="relative group mb-8">
      <h2 className={`text-xl sm:text-2xl font-bold mb-4 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {category.name}
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 ${
              isDark 
                ? 'bg-slate-900/90 text-white hover:bg-slate-800/90' 
                : 'bg-white/90 text-gray-900 hover:bg-gray-100/90'
            } shadow-lg backdrop-blur-sm`}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 ${
              isDark 
                ? 'bg-slate-900/90 text-white hover:bg-slate-800/90' 
                : 'bg-white/90 text-gray-900 hover:bg-gray-100/90'
            } shadow-lg backdrop-blur-sm`}
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Content Scroll Area */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {category.content.map((item) => (
            <ContentCard
              key={item.id}
              content={item}
              onClick={onContentClick}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;