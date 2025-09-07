import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, Clock } from 'lucide-react';
import { Content } from '../types';

interface ContentCardProps {
  content: Content;
  onClick: (content: Content) => void;
  isDark: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ content, onClick, isDark }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-64 sm:w-80 cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(content)}
    >
      {/* Main Card */}
      <div className={`relative rounded-lg overflow-hidden ${
        isDark ? 'bg-slate-800' : 'bg-white'
      } shadow-lg hover:shadow-2xl transition-all duration-300`}>
        {/* Thumbnail */}
        <div className="relative aspect-video">
          <img
            src={content.thumbnail}
            alt={content.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className={`absolute inset-0 animate-pulse ${
              isDark ? 'bg-slate-700' : 'bg-gray-200'
            }`} />
          )}

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {content.isNew && (
              <span className="px-2 py-1 text-xs font-bold bg-red-600 text-white rounded">
                NEW
              </span>
            )}
            {content.hasNewEpisode && (
              <span className="px-2 py-1 text-xs font-bold bg-blue-600 text-white rounded">
                NEW EPISODE
              </span>
            )}
            {content.isLeaving && (
              <span className="px-2 py-1 text-xs font-bold bg-orange-600 text-white rounded flex items-center gap-1">
                <Clock size={10} />
                LEAVING SOON
              </span>
            )}
          </div>

          {/* Play overlay on hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200">
                <Play size={20} fill="black" className="ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Content Info */}
        <div className="p-4">
          <h3 className={`font-bold text-lg mb-2 line-clamp-1 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {content.title}
          </h3>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-semibold rounded ${
                isDark 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-500 text-white'
              }`}>
                {content.rating} Match
              </span>
              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {content.year}
              </span>
            </div>
            
            <span className={`text-xs px-2 py-1 border rounded ${
              isDark 
                ? 'border-gray-600 text-gray-400' 
                : 'border-gray-300 text-gray-500'
            }`}>
              {content.maturityRating}
            </span>
          </div>

          <p className={`text-sm line-clamp-2 mb-3 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {content.description}
          </p>

          {/* Genres */}
          <div className="flex flex-wrap gap-1 mb-3">
            {content.genre.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className={`text-xs px-2 py-1 rounded ${
                  isDark 
                    ? 'bg-slate-700 text-gray-300' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-slate-700 text-white hover:bg-slate-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                <Play size={14} />
              </button>
              
              <button className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-slate-700 text-white hover:bg-slate-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                <Plus size={14} />
              </button>
              
              <button className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-slate-700 text-white hover:bg-slate-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                <ThumbsUp size={14} />
              </button>
            </div>

            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {content.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;