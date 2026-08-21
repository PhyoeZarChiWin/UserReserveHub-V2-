import React from 'react';
import {
  Calendar,
  Heart,
  Bell,
  CreditCard,
  User,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { ViewScreen, Venue } from '../types';

interface ProfilePageProps {
  favorites: string[];
  venues: Venue[];
  onNavigate: (view: ViewScreen) => void;
  onSelectVenue: (venue: Venue) => void;
  onShowToast: (msg: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  favorites,
  venues,
  onNavigate,
  onSelectVenue,
  onShowToast,
}) => {
  const favoriteVenues = venues.filter((v) => favorites.includes(v.id));

  const menuItems = [
    {
      id: 'bookings',
      label: 'My Bookings',
      sub: 'View upcoming and past reservations',
      icon: Calendar,
      action: () => onNavigate('U06_MyBookings'),
    },
    {
      id: 'favorites',
      label: 'Favorites',
      sub: `${favorites.length} saved venues`,
      icon: Heart,
      action: () => onNavigate('U02_SearchResults'),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      sub: '3 unread updates',
      icon: Bell,
      action: () => onShowToast('3 unread notifications'),
    },
    {
      id: 'payment',
      label: 'Payment Methods',
      sub: 'Cards and billing info',
      icon: CreditCard,
      action: () => onShowToast('Prototype Demo — No real cards are saved.'),
    },
    {
      id: 'personal',
      label: 'Personal Information',
      sub: 'Name, email, and preferences',
      icon: User,
      action: () => onShowToast('Phyo Win · phyo.win@example.com'),
    },
    {
      id: 'support',
      label: 'Help & Support',
      sub: 'FAQs, contact and guides',
      icon: HelpCircle,
      action: () => onShowToast('Support available 09:00 AM – 09:00 PM daily.'),
    },
    {
      id: 'guide',
      label: 'Prototype Guide',
      sub: 'About this clickable prototype',
      icon: FileText,
      action: () => onNavigate('README_Guide'),
    },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      {/* Profile Hero */}
      <section className="bg-gradient-to-br from-[#0F766E] via-teal-800 to-emerald-900 text-white p-8 rounded-3xl text-center space-y-3 shadow-xl relative overflow-hidden">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#0F766E] border-4 border-[#F59E0B] text-white text-2xl font-black flex items-center justify-center shadow-lg">
          P
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-black">Phyo Win</h1>
          <p className="text-xs text-amber-200 mt-0.5">phyo.win@example.com</p>
          <p className="text-[11px] text-emerald-100/80 mt-1">
            Member since 2025 · Yangon, Myanmar
          </p>
        </div>
      </section>

      {/* Favorites Preview if any */}
      {favoriteVenues.length > 0 && (
        <section className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#334155] flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              Saved Favorites ({favoriteVenues.length})
            </h2>
            <button
              onClick={() => onNavigate('U02_SearchResults')}
              className="text-xs font-semibold text-[#0F766E] hover:underline"
            >
              See all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {favoriteVenues.slice(0, 4).map((v) => (
              <div
                key={v.id}
                onClick={() => {
                  onSelectVenue(v);
                  onNavigate('U03_ServiceDetails');
                }}
                className="p-2.5 bg-[#F8FAFC] rounded-xl border border-slate-200/80 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <img src={v.image} alt={v.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="min-w-0">
                  <h3 className="font-bold text-xs text-[#334155] truncate">{v.name}</h3>
                  <p className="text-[10px] text-slate-500">{v.category} · ${v.basePrice}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Menu Options */}
      <nav className="bg-white rounded-2xl border border-slate-200/80 shadow-sm divide-y divide-slate-100 overflow-hidden">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={item.action}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#334155]">{item.label}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </button>
          );
        })}

        {/* Logout */}
        <button
          onClick={() => onShowToast('You would be logged out in a live system.')}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-rose-50 transition-colors group text-rose-600"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
              <LogOut className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-rose-600">Log Out</h3>
              <p className="text-xs text-rose-400 mt-0.5">Sign out of ReserveHub</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-rose-400" />
        </button>
      </nav>

      <p className="text-center text-xs text-slate-400">
        ReserveHub Prototype v1.0 · Clickable HTML & React Application
      </p>
    </div>
  );
};
