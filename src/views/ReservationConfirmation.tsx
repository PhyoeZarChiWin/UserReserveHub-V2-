import React from 'react';
import { CheckCircle2, Clock, MapPin, Calendar, Users, ArrowRight, Home } from 'lucide-react';
import { Booking, ViewScreen } from '../types';

interface ReservationConfirmationProps {
  booking: Booking | null;
  onNavigate: (view: ViewScreen) => void;
}

export const ReservationConfirmation: React.FC<ReservationConfirmationProps> = ({
  booking,
  onNavigate,
}) => {
  if (!booking) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-slate-500 font-medium text-sm">No recent booking found.</p>
        <button
          onClick={() => onNavigate('U01_TopPage')}
          className="bg-[#0F766E] text-white text-xs font-bold px-4 py-2 rounded-xl"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0F766E] via-teal-800 to-emerald-900 text-white p-8 rounded-3xl text-center space-y-4 shadow-xl relative overflow-hidden">
        <div className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-inner">
          <CheckCircle2 className="w-10 h-10 text-[#84CC16]" />
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Reservation Confirmed!
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-md mx-auto">
            Your booking has been received. A confirmation with the details below is ready for your visit.
          </p>
        </div>

        {/* Reference Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl max-w-xs mx-auto">
          <p className="text-[10px] uppercase font-bold tracking-widest text-[#84CC16]">Reference Number</p>
          <p className="text-lg font-black tracking-widest text-white mt-0.5">{booking.refNumber}</p>
        </div>
      </section>

      {/* Details Card */}
      <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-[#334155] border-b border-slate-100 pb-3">
          Booking Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-slate-400 font-medium block">Venue</span>
            <span className="font-bold text-[#334155] text-sm">{booking.venueName}</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 font-medium block">Package</span>
            <span className="font-semibold text-slate-800">{booking.packageName}</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 font-medium block">Date & Time</span>
            <span className="font-semibold text-slate-800">{booking.date} at {booking.time}</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 font-medium block">Guests</span>
            <span className="font-semibold text-slate-800">{booking.guests} guests</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 font-medium block">Booked By</span>
            <span className="font-semibold text-slate-800">{booking.userName}</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 font-medium block">Total Paid</span>
            <span className="font-extrabold text-[#0F766E] text-base">${booking.totalPaid}</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onNavigate('U06_MyBookings')}
            className="flex-1 bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            View My Bookings <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('U01_TopPage')}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-[#334155] text-xs font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-slate-600" /> Back to Home
          </button>
        </div>
      </section>

      {/* What Happens Next Card */}
      <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
        <h2 className="text-sm font-bold text-[#334155] flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#F59E0B]" />
          What happens next
        </h2>

        <div className="space-y-2.5 text-xs text-slate-600">
          <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200/80">
            <p className="font-bold text-[#334155]">Instant venue notification</p>
            <p className="mt-0.5">The venue manager has been notified of your reservation.</p>
          </div>
          <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200/80">
            <p className="font-bold text-[#334155]">Check-in at the venue</p>
            <p className="mt-0.5">Present your reference number ({booking.refNumber}) upon arrival.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
