import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentProfile: { name: string; avatar: string };
  onProfileClick: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentProfile, 
  onProfileClick, 
  isDark, 
  onThemeToggle 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    'Home', 'TV Shows', 'Movies', 'Games', 'New & Popular', 'My List', 'Browse by Genre'
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-sm' 
        : 'bg-gradient-to-b from-white/95 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              StreamSphere
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  index === 0 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : isDark 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search titles, genres..."
                    className={`w-64 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800 text-white placeholder-gray-400 border border-slate-600' 
                        : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                    isDark 
                      ? 'text-gray-300 hover:text-white hover:bg-slate-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Notifications */}
            <button className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark 
                ? 'text-gray-300 hover:text-white hover:bg-slate-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}>
              <Bell size={20} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-slate-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isDark ? '🌞' : '🌙'}
            </button>

            {/* Profile */}
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-2 p-1 rounded-full transition-all duration-200 hover:scale-105"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold">
                {currentProfile.avatar}
              </div>
              <ChevronDown size={16} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-slate-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 ${
            isDark ? 'bg-slate-900/95' : 'bg-white/95'
          } backdrop-blur-sm rounded-lg mt-2`}>
            {navItems.map((item, index) => (
              <button
                key={item}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'text-blue-600 bg-blue-50' 
                    : isDark 
                      ? 'text-gray-300 hover:text-white hover:bg-slate-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;