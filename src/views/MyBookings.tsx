import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  Tag,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { Booking, ViewScreen, Venue } from '../types';
import { APP_IMAGES } from '../data/imageRegistry';

interface MyBookingsProps {
  bookings: Booking[];
  venues: Venue[];
  favoritesCount: number;
  onNavigate: (view: ViewScreen) => void;
  onSelectVenue: (venue: Venue) => void;
  onCancelBooking: (bookingId: string) => void;
  onShowToast: (msg: string) => void;
}

export const MyBookings: React.FC<MyBookingsProps> = ({
  bookings,
  venues,
  favoritesCount,
  onNavigate,
  onSelectVenue,
  onCancelBooking,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming');

  const upcomingBookings = bookings.filter(
    (b) => b.status === 'Confirmed' || b.status === 'Pending'
  );
  const pastBookings = bookings.filter(
    (b) => b.status === 'Completed' || b.status === 'Cancelled'
  );

  const currentList = activeTab === 'Upcoming' ? upcomingBookings : pastBookings;

  const handleVenueClick = (venueId: string) => {
    const v = venues.find((x) => x.id === venueId);
    if (v) {
      onSelectVenue(v);
      onNavigate('U03_ServiceDetails');
    } else {
      onNavigate('U02_SearchResults');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-[#334155]">My Bookings</h1>
        <p className="text-xs text-slate-500 mt-0.5">Manage your scheduled reservations and history</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
          <p className="text-2xl font-black text-[#0F766E]">{bookings.length}</p>
          <p className="text-[11px] font-bold text-slate-500 mt-0.5">Total Bookings</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
          <p className="text-2xl font-black text-[#F59E0B]">{upcomingBookings.length}</p>
          <p className="text-[11px] font-bold text-slate-500 mt-0.5">Upcoming</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
          <p className="text-2xl font-black text-[#334155]">{favoritesCount}</p>
          <p className="text-[11px] font-bold text-slate-500 mt-0.5">Favorites Saved</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-100 p-1 rounded-2xl w-full max-w-xs">
        {(['Upcoming', 'Past'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === tab
                ? 'bg-white text-[#0F766E] shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab} ({tab === 'Upcoming' ? upcomingBookings.length : pastBookings.length})
          </button>
        ))}
      </div>

      {/* Booking List */}
      {currentList.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
          <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="text-sm font-bold text-slate-700">No {activeTab.toLowerCase()} bookings found.</p>
          <button
            onClick={() => onNavigate('U02_SearchResults')}
            className="bg-[#0F766E] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#115E59] transition-colors"
          >
            Explore Venues
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {currentList.map((b) => (
            <article
              key={b.id}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <img
                    src={b.venueImage}
                    alt={b.venueName}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = APP_IMAGES['golden_mandalay'].dataUri;
                    }}
                    className="w-16 h-16 rounded-2xl object-cover bg-slate-900 flex-shrink-0 cursor-pointer"
                    onClick={() => handleVenueClick(b.venueId)}
                  />
                  <div className="min-w-0">
                    <h2
                      onClick={() => handleVenueClick(b.venueId)}
                      className="font-bold text-base text-[#334155] truncate cursor-pointer hover:text-[#0F766E]"
                    >
                      {b.venueName}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5 flex-wrap">
                      <span>{b.date}</span> · <span>{b.time}</span> · <span>{b.guests} guests</span>
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 flex-shrink-0 ${
                    b.status === 'Confirmed'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : b.status === 'Pending'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : b.status === 'Cancelled'
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-slate-100 text-[#334155]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {b.status}
                </span>
              </div>

              {/* Meta Chips */}
              <div className="flex flex-wrap items-center gap-2 text-xs pt-1 border-t border-slate-100">
                <span className="bg-[#0F766E]/10 text-[#0F766E] font-bold px-2.5 py-1 rounded-lg">
                  Ref: {b.refNumber}
                </span>
                <span className="bg-slate-100 text-[#334155] font-medium px-2.5 py-1 rounded-lg">
                  {b.packageName}
                </span>
                <span className="font-extrabold text-[#334155] ml-auto">
                  ${b.totalPaid}
                </span>
              </div>

              {/* Card Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => handleVenueClick(b.venueId)}
                  className="flex-1 bg-[#F8FAFC] hover:bg-slate-100 text-[#334155] text-xs font-bold py-2 px-3 rounded-xl border border-slate-200 transition-colors"
                >
                  View Venue Details
                </button>

                {b.status === 'Confirmed' || b.status === 'Pending' ? (
                  <button
                    onClick={() => {
                      onCancelBooking(b.id);
                      onShowToast('Cancellation requested — free of charge');
                    }}
                    className="px-4 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold py-2 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={() => onShowToast('Prototype Demo — Action saved.')}
                    className="px-4 bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold py-2 rounded-xl transition-colors"
                  >
                    {b.status === 'Completed' ? 'Write Review' : 'Re-book'}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
