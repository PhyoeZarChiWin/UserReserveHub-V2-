import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Tag,
  User,
  Phone,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { Venue, Booking, ViewScreen } from '../types';

interface ReservationFormProps {
  draft: {
    venue: Venue;
    date: string;
    time: string;
    guests: number;
    packageId: string;
  };
  onCompleteBooking: (newBooking: Booking) => void;
  onNavigate: (view: ViewScreen) => void;
  onShowToast: (msg: string) => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({
  draft,
  onCompleteBooking,
  onNavigate,
  onShowToast,
}) => {
  const { venue } = draft;

  const [date, setDate] = useState(draft.date || '2026-08-08');
  const [time, setTime] = useState(draft.time || venue.slots[0] || '07:00 PM');
  const [guests, setGuests] = useState(draft.guests || 2);
  const [packageId, setPackageId] = useState(draft.packageId || venue.packages[0]?.id || 'pkg-standard');
  const [applyPromo, setApplyPromo] = useState(true);

  // User contact form
  const [userName, setUserName] = useState('Phyo Win');
  const [userPhone, setUserPhone] = useState('+959 123 456 789');
  const [userEmail, setUserEmail] = useState('phyo.win@example.com');

  const selectedPkg = venue.packages.find((p) => p.id === packageId) || venue.packages[0];

  const subtotal = (selectedPkg?.price || venue.basePrice) * guests;
  const promoDiscount = applyPromo ? Math.round(subtotal * 0.15) : 0;
  const total = Math.max(0, subtotal - promoDiscount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim() || !userPhone.trim() || !userEmail.trim()) {
      onShowToast('Please fill in your name, phone, and email.');
      return;
    }

    const randomRef = 'RH-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000);

    const newBooking: Booking = {
      id: 'b-' + Date.now(),
      refNumber: randomRef,
      venueId: venue.id,
      venueName: venue.name,
      venueImage: venue.image,
      location: venue.address,
      date,
      time,
      guests,
      packageName: selectedPkg.name,
      packagePrice: selectedPkg.price,
      totalPaid: total,
      userName,
      userEmail,
      userPhone,
      status: 'Confirmed',
      createdAt: new Date().toISOString().split('T')[0],
    };

    onCompleteBooking(newBooking);
    onNavigate('U05_Confirmation');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-black text-[#334155]">Complete your reservation</h1>
        <p className="text-xs text-slate-500 mt-0.5">{venue.name} · {venue.address}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6">
          {/* Step 1: Reservation Details */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-[#334155] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0F766E] text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              Reservation Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-[#334155]">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-[#334155]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#334155]">Number of Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-[#334155]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-bold text-[#334155]">Preferred Time</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {venue.slots.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setTime(s)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                      time === s
                        ? 'bg-[#0F766E] text-white border-[#0F766E]'
                        : 'bg-[#F8FAFC] text-[#334155] border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Step 2: Select a Package */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-[#334155] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0F766E] text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              Select a Package
            </h2>

            <div className="space-y-3">
              {venue.packages.map((pkg) => {
                const isChecked = packageId === pkg.id;
                return (
                  <label
                    key={pkg.id}
                    onClick={() => setPackageId(pkg.id)}
                    className={`p-4 rounded-2xl border-2 flex items-start justify-between cursor-pointer transition-all ${
                      isChecked
                        ? 'border-[#0F766E] bg-[#0F766E]/5'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="pkg-radio"
                        checked={isChecked}
                        onChange={() => setPackageId(pkg.id)}
                        className="mt-1 text-[#0F766E] focus:ring-[#0F766E]"
                      />
                      <div>
                        <h3 className="font-bold text-sm text-[#334155]">{pkg.name}</h3>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {pkg.includes.map((inc, i) => (
                            <span key={i} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                              {inc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <span className="text-sm font-extrabold text-[#0F766E] flex-shrink-0">
                      ${pkg.price} <span className="text-[10px] text-slate-500 font-normal">{pkg.perText}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </section>

          {/* Step 3: Promotions */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-[#334155] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0F766E] text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              Promotions
            </h2>

            <label className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={applyPromo}
                onChange={(e) => setApplyPromo(e.target.checked)}
                className="mt-1 text-[#F59E0B] focus:ring-[#F59E0B]"
              />
              <div>
                <span className="font-bold text-xs text-amber-800 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#F59E0B]" />
                  Weekday Special · 15% off
                </span>
                <p className="text-xs text-slate-600 mt-0.5">
                  Enjoy 15% off your reservation subtotal.
                </p>
              </div>
            </label>
          </section>

          {/* Step 4: Your Details */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-[#334155] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0F766E] text-white text-xs font-bold flex items-center justify-center">
                4
              </span>
              Your Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-[#334155] flex items-center gap-1">
                  <User className="w-3 h-3 text-[#0F766E]" /> Full Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-[#334155]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#334155] flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#0F766E]" /> Phone Number
                </label>
                <input
                  type="tel"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-[#334155]"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <label className="font-bold text-[#334155] flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#0F766E]" /> Email Address
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-[#334155]"
                required
              />
            </div>
          </section>
        </form>

        {/* Sidebar Summary */}
        <aside className="lg:col-span-4 sticky top-20">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg font-bold text-[#334155]">Booking Summary</h2>
              <p className="text-xs text-slate-500 font-medium truncate">{venue.name}</p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#0F766E]" /> Date</span>
                <span className="font-semibold text-[#334155]">{date}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#0F766E]" /> Time</span>
                <span className="font-semibold text-[#334155]">{time}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#0F766E]" /> Guests</span>
                <span className="font-semibold text-[#334155]">{guests} guests</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>{selectedPkg.name} (${selectedPkg.price}/guest)</span>
                <span>${subtotal}</span>
              </div>
              {applyPromo && (
                <div className="flex justify-between text-[#84CC16] font-semibold">
                  <span>Promo discount (15%)</span>
                  <span>-${promoDiscount}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-extrabold text-[#334155] pt-2 border-t border-slate-100">
                <span>Total</span>
                <span className="text-[#0F766E] text-xl">${total}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white text-sm font-bold py-3.5 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Confirm Reservation
            </button>

            <p className="text-[10px] text-slate-400 text-center">
              Free cancellation up to 24 hours before your reservation.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
