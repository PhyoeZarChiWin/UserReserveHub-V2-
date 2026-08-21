import React from 'react';
import { Search, Bell, ChevronLeft } from 'lucide-react';
import { ViewScreen } from '../types';

interface HeaderProps {
  currentView: ViewScreen;
  onNavigate: (view: ViewScreen) => void;
  unreadNotificationsCount: number;
  onOpenNotifications: () => void;
  onSearchClick?: () => void;
  searchKeyword?: string;
  onSearchChange?: (val: string) => void;
  onSearchSubmit?: () => void;
  showBackBtn?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  unreadNotificationsCount,
  onOpenNotifications,
  searchKeyword = '',
  onSearchChange,
  onSearchSubmit,
  showBackBtn = false,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0F766E] text-white shadow-md border-b border-[#115E59]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left branding & back button */}
        <div className="flex items-center gap-3">
          {showBackBtn && (
            <button
              onClick={() => onNavigate('U02_SearchResults')}
              className="p-2 rounded-full hover:bg-[#115E59] text-white transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <button
            onClick={() => onNavigate('U01_TopPage')}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center font-extrabold text-white text-lg shadow-sm group-hover:scale-105 transition-transform">
              R
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-amber-200 transition-colors">
              Reserve<span className="text-[#F59E0B]">Hub</span>
            </span>
          </button>
        </div>

        {/* Center search bar (desktop or search view) */}
        {currentView === 'U02_SearchResults' && onSearchChange && (
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (onSearchSubmit) onSearchSubmit();
              }}
              className="w-full relative"
            >
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-teal-200" />
              <input
                type="search"
                value={searchKeyword}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search restaurants, venues, services..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-white/10 text-white placeholder-teal-100 border border-white/20 focus:outline-none focus:bg-white focus:text-[#334155] focus:placeholder-gray-400 transition-all"
              />
            </form>
          </div>
        )}

        {/* Right actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {currentView !== 'U02_SearchResults' && (
            <button
              onClick={() => onNavigate('U02_SearchResults')}
              className="p-2 rounded-full hover:bg-[#115E59] transition-colors relative cursor-pointer"
              aria-label="Search"
              title="Search Places"
            >
              <Search className="w-5 h-5 text-gray-100" />
            </button>
          )}

          <button
            onClick={onOpenNotifications}
            className="p-2 rounded-full hover:bg-[#115E59] transition-colors relative cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-100" />
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#F59E0B] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-[#0F766E]">
                {unreadNotificationsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('U07_Profile')}
            className="w-9 h-9 rounded-full bg-[#115E59] border-2 border-[#F59E0B]/80 flex items-center justify-center font-semibold text-sm text-white hover:border-[#F59E0B] transition-colors shadow-sm ml-0.5 cursor-pointer"
            aria-label="Profile"
          >
            P
          </button>
        </div>
      </div>
    </header>
  );
};
