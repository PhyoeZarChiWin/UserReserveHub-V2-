import React from 'react';
import { Home, Compass, Calendar, Heart, User } from 'lucide-react';
import { ViewScreen } from '../types';

interface BottomNavProps {
  currentView: ViewScreen;
  onNavigate: (view: ViewScreen) => void;
  favoritesCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentView,
  onNavigate,
  favoritesCount,
}) => {
  const items = [
    {
      id: 'U01_TopPage' as ViewScreen,
      label: 'Home',
      icon: Home,
    },
    {
      id: 'U02_SearchResults' as ViewScreen,
      label: 'Explore',
      icon: Compass,
    },
    {
      id: 'U06_MyBookings' as ViewScreen,
      label: 'Bookings',
      icon: Calendar,
    },
    {
      id: 'U02_SearchResults' as ViewScreen,
      label: 'Favorites',
      icon: Heart,
      badge: favoritesCount > 0 ? favoritesCount : undefined,
    },
    {
      id: 'U07_Profile' as ViewScreen,
      label: 'Profile',
      icon: User,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-lg md:hidden">
      <ul className="flex items-center justify-around h-16 px-1">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isActive =
            currentView === item.id ||
            (item.label === 'Explore' && currentView === 'U02_SearchResults');

          return (
            <li key={idx} className="flex-1">
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full h-full flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#0F766E] font-semibold'
                    : 'text-[#64748B] hover:text-[#0F766E]'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                  {item.badge !== undefined && (
                    <span className="absolute -top-1 -right-2 px-1 min-w-[14px] h-[14px] bg-[#F59E0B] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
