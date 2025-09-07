import React from 'react';
import { X, Settings, User, LogOut } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: UserProfile[];
  currentProfile: UserProfile;
  onProfileSelect: (profile: UserProfile) => void;
  isDark: boolean;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profiles,
  currentProfile,
  onProfileSelect,
  isDark
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 pt-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative w-80 rounded-lg shadow-2xl ${
        isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-gray-200'
      }`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Switch Profile
            </h3>
            <button
              onClick={onClose}
              className={`p-1 rounded-full transition-colors ${
                isDark 
                  ? 'text-gray-400 hover:text-white hover:bg-slate-800' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Profiles */}
        <div className="p-4">
          <div className="space-y-2 mb-4">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => {
                  onProfileSelect(profile);
                  onClose();
                }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  profile.id === currentProfile.id
                    ? isDark 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-500 text-white'
                    : isDark 
                      ? 'text-gray-300 hover:bg-slate-800' 
                      : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold">
                  {profile.avatar}
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium">{profile.name}</div>
                  {profile.isKids && (
                    <div className="text-xs opacity-75">Kids Profile</div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className={`space-y-2 pt-4 border-t ${
            isDark ? 'border-slate-800' : 'border-gray-200'
          }`}>
            <button className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isDark 
                ? 'text-gray-300 hover:bg-slate-800' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}>
              <User size={20} />
              <span>Manage Profiles</span>
            </button>
            
            <button className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isDark 
                ? 'text-gray-300 hover:bg-slate-800' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}>
              <Settings size={20} />
              <span>Account Settings</span>
            </button>
            
            <button className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isDark 
                ? 'text-gray-300 hover:bg-slate-800' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}>
              <LogOut size={20} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;