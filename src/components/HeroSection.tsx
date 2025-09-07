import React, { useState, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { Content } from '../types';

interface HeroSectionProps {
  content: Content;
  onPlay: (content: Content) => void;
  onMoreInfo: (content: Content) => void;
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  content, 
  onPlay, 
  onMoreInfo, 
  isDark 
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <img
          src={content.backgroundImage}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent' 
            : 'bg-gradient-to-t from-white via-white/50 to-transparent'
        }`} />
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-r from-slate-900 via-transparent to-transparent' 
            : 'bg-gradient-to-r from-white via-transparent to-transparent'
        }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            } animate-fadeInUp`}>
              {content.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center space-x-4 mb-6">
              <span className={`px-2 py-1 text-xs font-semibold rounded ${
                isDark 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-500 text-white'
              }`}>
                {content.rating} Match
              </span>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {content.year}
              </span>
              <span className={`px-2 py-1 text-xs border rounded ${
                isDark 
                  ? 'border-gray-600 text-gray-300' 
                  : 'border-gray-400 text-gray-600'
              }`}>
                {content.maturityRating}
              </span>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {content.duration}
              </span>
            </div>

            {/* Description */}
            <p className={`text-lg mb-8 leading-relaxed ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            } animate-fadeInUp animation-delay-200`}>
              {content.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
              <button
                onClick={() => onPlay(content)}
                className="flex items-center justify-center space-x-2 bg-white text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 shadow-lg"
              >
                <Play size={20} fill="black" />
                <span>Play</span>
              </button>
              
              <button
                onClick={() => onMoreInfo(content)}
                className={`flex items-center justify-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  isDark 
                    ? 'bg-gray-700/80 text-white hover:bg-gray-600/80' 
                    : 'bg-gray-500/80 text-white hover:bg-gray-600/80'
                } backdrop-blur-sm`}
              >
                <Info size={20} />
                <span>More Info</span>
              </button>
            </div>

            {/* Genres */}
            <div className="mt-8 animate-fadeInUp animation-delay-600">
              <div className="flex flex-wrap gap-2">
                {content.genre.map((genre) => (
                  <span
                    key={genre}
                    className={`px-3 py-1 text-xs rounded-full ${
                      isDark 
                        ? 'bg-slate-800/80 text-gray-300' 
                        : 'bg-white/80 text-gray-700'
                    } backdrop-blur-sm`}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className={`absolute bottom-24 right-8 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDark 
            ? 'bg-slate-800/80 text-white hover:bg-slate-700/80' 
            : 'bg-white/80 text-gray-900 hover:bg-gray-100/80'
        } backdrop-blur-sm shadow-lg`}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default HeroSection;