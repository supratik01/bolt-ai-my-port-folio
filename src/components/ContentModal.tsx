import React from 'react';
import { X, Play, Plus, ThumbsUp, ThumbsDown, Share2 } from 'lucide-react';
import { Content } from '../types';

interface ContentModalProps {
  content: Content | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay: (content: Content) => void;
  isDark: boolean;
}

const ContentModal: React.FC<ContentModalProps> = ({
  content,
  isOpen,
  onClose,
  onPlay,
  isDark
}) => {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-xl shadow-2xl ${
        isDark ? 'bg-slate-900' : 'bg-white'
      }`}>
        {/* Header Image */}
        <div className="relative aspect-video">
          <img
            src={content.backgroundImage}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-t from-slate-900 to-transparent' 
              : 'bg-gradient-to-t from-white to-transparent'
          }`} />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark 
                ? 'bg-slate-800/80 text-white hover:bg-slate-700/80' 
                : 'bg-white/80 text-gray-900 hover:bg-gray-100/80'
            } backdrop-blur-sm`}
          >
            <X size={24} />
          </button>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => onPlay(content)}
              className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Play size={32} fill="black" className="ml-2" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Title and Meta */}
          <div className="mb-6">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {content.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={`px-3 py-1 text-sm font-semibold rounded ${
                isDark 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-500 text-white'
              }`}>
                {content.rating} Match
              </span>
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {content.year}
              </span>
              <span className={`px-2 py-1 text-sm border rounded ${
                isDark 
                  ? 'border-gray-600 text-gray-300' 
                  : 'border-gray-400 text-gray-600'
              }`}>
                {content.maturityRating}
              </span>
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {content.duration}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => onPlay(content)}
                className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105"
              >
                <Play size={20} fill="black" />
                <span>Play</span>
              </button>
              
              <button className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-slate-800 text-white hover:bg-slate-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                <Plus size={20} />
              </button>
              
              <button className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-slate-800 text-white hover:bg-slate-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                <ThumbsUp size={20} />
              </button>
              
              <button className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-slate-800 text-white hover:bg-slate-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                <ThumbsDown size={20} />
              </button>
              
              <button className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-slate-800 text-white hover:bg-slate-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Description and Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h3 className={`text-xl font-semibold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Synopsis
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {content.description}
              </p>

              {/* Genres */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Genres
                </h4>
                <div className="flex flex-wrap gap-2">
                  {content.genre.map((genre) => (
                    <span
                      key={genre}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark 
                          ? 'bg-slate-800 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Cast */}
              <div>
                <h4 className={`text-lg font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Cast
                </h4>
                <div className="space-y-2">
                  {content.cast.map((actor) => (
                    <div 
                      key={actor} 
                      className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      {actor}
                    </div>
                  ))}
                </div>
              </div>

              {/* Director */}
              <div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Director
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {content.director}
                </p>
              </div>

              {/* Language */}
              <div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Language
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {content.language}
                </p>
              </div>

              {/* Maturity Rating */}
              <div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Rating
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {content.maturityRating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;