import React, { useState } from 'react';
import {
  Share2,
  Heart,
  Star,
  MapPin,
  Clock,
  CheckCircle2,
  Wifi,
  Car,
  Snowflake,
  Utensils,
  Shield,
  Phone,
  Navigation,
  Calendar,
  Users
} from 'lucide-react';
import { Venue, ViewScreen } from '../types';
import { APP_IMAGES } from '../data/imageRegistry';

interface ServiceDetailsProps {
  venue: Venue;
  favorites: string[];
  onToggleFavorite: (venueId: string, venueName: string) => void;
  onNavigate: (view: ViewScreen) => void;
  onStartBooking: (bookingDraft: {
    venue: Venue;
    date: string;
    time: string;
    guests: number;
    packageId: string;
  }) => void;
  onShowToast: (msg: string) => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  venue,
  favorites,
  onToggleFavorite,
  onNavigate,
  onStartBooking,
  onShowToast,
}) => {
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);
  const [selectedDate, setSelectedDate] = useState('2026-08-08');
  const [selectedTime, setSelectedTime] = useState(venue.slots[0] || '07:00 PM');
  const [guestCount, setGuestCount] = useState(2);
  const [selectedPackageId, setSelectedPackageId] = useState(venue.packages[0]?.id || 'pkg-standard');

  const isFav = favorites.includes(venue.id);
  const currentPackage = venue.packages.find((p) => p.id === selectedPackageId) || venue.packages[0];

  const subtotal = (currentPackage?.price || venue.basePrice) * guestCount;
  const promoDiscount = 8;
  const total = Math.max(0, subtotal - promoDiscount);

  const handleBookNow = () => {
    onStartBooking({
      venue,
      date: selectedDate,
      time: selectedTime,
      guests: guestCount,
      packageId: selectedPackageId,
    });
    onNavigate('U04_ReservationForm');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: venue.name,
        text: `Check out ${venue.name} on ReserveHub!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      onShowToast('Link copied to clipboard!');
    }
  };

  return (
    <div className="space-y-8 pb-24 md:pb-12">
      {/* Detail Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Main Detail Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* ================= Gallery ================= */}
          <section className="space-y-3">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-gray-900 shadow-md">
              <img
                src={venue.gallery[selectedPhotoIdx] || venue.image}
                alt={venue.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = APP_IMAGES['golden_mandalay'].dataUri;
                }}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Actions Over Photos */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 backdrop-blur-md flex items-center justify-center shadow-md transition-colors"
                  aria-label="Share venue"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onToggleFavorite(venue.id, venue.name)}
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 backdrop-blur-md flex items-center justify-center shadow-md transition-colors"
                  aria-label="Favorite venue"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFav ? 'fill-red-500 text-red-500' : 'text-gray-700'
                    }`}
                  />
                </button>
              </div>

              {/* Counter */}
              <span className="absolute bottom-4 left-4 bg-gray-950/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md">
                {selectedPhotoIdx + 1} / {venue.gallery.length} photos
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
              {venue.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhotoIdx(idx)}
                  className={`w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    idx === selectedPhotoIdx
                      ? 'border-[#0F766E] ring-2 ring-[#0F766E]/20 scale-105'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = APP_IMAGES['golden_mandalay'].dataUri;
                    }}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* ================= Venue Header ================= */}
          <section className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#0F766E]/10 text-[#0F766E] text-xs font-bold px-3 py-1 rounded-full">
                {venue.category}
              </span>
              <span className="bg-[#84CC16]/15 text-[#365314] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#84CC16]/30">
                <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
                Open now
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {venue.openingHours}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#334155] tracking-tight">
              {venue.name}
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 pt-1">
              <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded flex items-center gap-1 border border-amber-200/60">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                {venue.rating}
              </span>
              <a href="#reviews" className="font-medium text-[#334155] underline">
                {venue.reviewsCount} reviews
              </a>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                {venue.location}
              </span>
            </div>
          </section>

          {/* ================= About ================= */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#334155]">About Venue</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {venue.description}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                'Instant confirmation',
                'Free cancellation up to 24h',
                'Verified venue',
                'No booking fees',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#334155] bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Reservation Policies Card */}
            <div className="mt-4 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <h3 className="font-bold text-xs text-[#334155] uppercase tracking-wider">
                Reservation Policies
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div>
                  <p className="font-semibold text-[#334155]">Cancellation Policy</p>
                  <p>Free cancellation up to 24 hours before your reservation time.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#334155]">Check-in Policy</p>
                  <p>Please arrive 15 minutes before your scheduled slot. Reservations held for 20 mins.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= Amenities ================= */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div>
              <h2 className="text-lg font-bold text-[#334155]">Amenities</h2>
              <p className="text-xs text-slate-500">What this venue offers for guests</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: 'High-speed WiFi', icon: Wifi },
                { name: 'On-site Parking', icon: Car },
                { name: 'Air Conditioning', icon: Snowflake },
                { name: 'Full Catering', icon: Utensils },
                { name: '24/7 Security', icon: Shield },
              ].map((amen, idx) => {
                const Icon = amen.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200/80 flex items-center gap-3 text-xs font-semibold text-[#334155]"
                  >
                    <Icon className="w-5 h-5 text-[#0F766E]" />
                    <span>{amen.name}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ================= Time Slots ================= */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#334155]">Available Time Slots</h2>
                <p className="text-xs text-slate-500">Pick a time that suits your visit</p>
              </div>
              <span className="text-xs font-bold text-[#0F766E] bg-[#0F766E]/10 px-2.5 py-1 rounded-full">
                {venue.slots.length} slots available
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {venue.slots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                      isSelected
                        ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-md scale-[1.02]'
                        : 'bg-[#F8FAFC] text-[#334155] border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ================= Packages ================= */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div>
              <h2 className="text-lg font-bold text-[#334155]">Pricing & Packages</h2>
              <p className="text-xs text-slate-500">Flexible options tailored for your visit</p>
            </div>

            <div className="space-y-3">
              {venue.packages.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0F766E] bg-[#0F766E]/5 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="package"
                          checked={isSelected}
                          onChange={() => setSelectedPackageId(pkg.id)}
                          className="w-4 h-4 text-[#0F766E] focus:ring-[#0F766E]"
                        />
                        <h3 className="font-bold text-sm text-[#334155]">{pkg.name}</h3>
                      </div>
                      <span className="text-sm font-extrabold text-[#0F766E]">
                        ${pkg.price} <span className="text-[10px] text-slate-500 font-normal">{pkg.perText}</span>
                      </span>
                    </div>

                    <div className="mt-2.5 flex flex-wrap gap-1.5 pl-7">
                      {pkg.includes.map((inc, i) => (
                        <span key={i} className="text-[10px] bg-white text-[#334155] border border-slate-200 px-2 py-0.5 rounded-md font-medium">
                          ✓ {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ================= Reviews ================= */}
          <section id="reviews" className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
            <div>
              <h2 className="text-lg font-bold text-[#334155]">Guest Reviews</h2>
              <p className="text-xs text-slate-500">Verified feedback from real visitors</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
              <div className="text-center sm:text-left">
                <span className="text-4xl font-black text-[#334155]">{venue.rating}</span>
                <div className="flex items-center justify-center sm:justify-start gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-xs text-slate-500">{venue.reviewsCount} verified reviews</p>
              </div>

              <div className="flex-1 w-full space-y-1.5 text-xs">
                {[
                  { stars: '5 ★', pct: '76%' },
                  { stars: '4 ★', pct: '18%' },
                  { stars: '3 ★', pct: '4%' },
                  { stars: '2 ★', pct: '1%' },
                  { stars: '1 ★', pct: '1%' },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-8 text-slate-600 font-medium">{bar.stars}</span>
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: bar.pct }} />
                    </div>
                    <span className="w-8 text-right text-slate-500">{bar.pct}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {venue.reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full ${rev.avatarBgClass} text-white font-bold text-xs flex items-center justify-center`}>
                        {rev.userAvatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-[#334155]">{rev.userName}</h4>
                        <p className="text-[10px] text-slate-400">{rev.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= Location Map ================= */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div>
              <h2 className="text-lg font-bold text-[#334155]">Location</h2>
              <p className="text-xs text-slate-500">{venue.address}</p>
            </div>

            {/* Map Visual Graphic Placeholder */}
            <div className="h-48 rounded-2xl bg-gradient-to-br from-teal-50 via-emerald-50 to-lime-50 border border-teal-200 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-[#0F766E] text-white flex items-center justify-center shadow-lg mb-2 animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-[#334155]">{venue.name}</h3>
              <p className="text-xs text-slate-600 max-w-xs">{venue.address}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
              <a
                href="tel:+959123456789"
                className="flex-1 bg-white hover:bg-slate-50 border border-slate-300 text-[#334155] text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0F766E]" /> Call Venue
              </a>
            </div>
          </section>
        </div>

        {/* Right Sticky Sidebar: Booking Widget (Desktop) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-20">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg font-bold text-[#334155]">Book your visit</h2>
              <p className="text-xs text-slate-500 font-medium truncate">{venue.name}</p>
            </div>

            <div className="space-y-3 text-xs">
              {/* Date */}
              <div className="space-y-1">
                <label className="font-bold text-[#334155] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0F766E]" /> Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-[#334155]"
                />
              </div>

              {/* Guests */}
              <div className="space-y-1">
                <label className="font-bold text-[#334155] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#0F766E]" /> Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-[#334155]"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Slot display */}
              <div className="space-y-1 pt-1">
                <span className="font-bold text-[#334155] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0F766E]" /> Selected Time
                </span>
                <div className="p-2.5 bg-[#84CC16]/15 text-[#365314] font-bold rounded-xl border border-[#84CC16]/40 text-center">
                  {selectedTime}
                </div>
              </div>
            </div>

            {/* Total summary */}
            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>{guestCount} × ${currentPackage.price}</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-[#84CC16] font-semibold">
                <span>Promo discount</span>
                <span>-${promoDiscount}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-[#334155] pt-2 border-t border-slate-100">
                <span>Total</span>
                <span className="text-[#0F766E] text-lg">${total}</span>
              </div>
            </div>

            <button
              onClick={handleBookNow}
              className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white text-sm font-bold py-3.5 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
            >
              Continue to Reservation
            </button>
            <p className="text-[10px] text-slate-400 text-center">
              Free cancellation up to 24 hours before your reservation.
            </p>
          </div>
        </aside>
      </div>

      {/* Mobile Sticky Bottom Booking Bar */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-30 bg-white border-t border-slate-200 p-3 px-4 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-slate-400 block">{selectedDate} · {guestCount} guests</span>
          <span className="text-base font-extrabold text-[#0F766E]">${total}</span>
        </div>
        <button
          onClick={handleBookNow}
          className="bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold py-2.5 px-6 rounded-xl shadow-md"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
