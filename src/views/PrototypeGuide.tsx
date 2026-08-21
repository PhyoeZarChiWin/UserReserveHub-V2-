import React from 'react';
import { BookOpen, CheckCircle2, Palette, Zap, ArrowLeft, Layers } from 'lucide-react';
import { ViewScreen } from '../types';

interface PrototypeGuideProps {
  onNavigate: (view: ViewScreen) => void;
}

export const PrototypeGuide: React.FC<PrototypeGuideProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('U01_TopPage')}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#334155]"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-black text-[#334155]">ReserveHub — Application Prototype Guide</h1>
          <p className="text-xs text-slate-500 mt-0.5">README & Interactive Flow Specifications</p>
        </div>
      </div>

      {/* Card 1: Overview */}
      <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
        <h2 className="text-base font-bold text-[#334155] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#0F766E]" />
          Overview & Design Intent
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          ReserveHub is a unified reservation and venue booking web application designed for browsing, selecting live time slots, selecting customized packages, and placing instant bookings.
        </p>
      </section>

      {/* Card 2: Pages & Flow */}
      <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
        <h2 className="text-base font-bold text-[#334155]">
          Screens & Navigation Flow
        </h2>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#334155] py-2">
          <span className="bg-[#0F766E] text-white px-3 py-1 rounded-full">U01 · Home</span>
          <span>→</span>
          <span className="bg-[#0F766E] text-white px-3 py-1 rounded-full">U02 · Search</span>
          <span>→</span>
          <span className="bg-[#0F766E] text-white px-3 py-1 rounded-full">U03 · Service Detail</span>
          <span>→</span>
          <span className="bg-[#0F766E] text-white px-3 py-1 rounded-full">U04 · Reservation Form</span>
          <span>→</span>
          <span className="bg-[#0F766E] text-white px-3 py-1 rounded-full">U05 · Confirmation</span>
          <span>→</span>
          <span className="bg-[#0F766E] text-white px-3 py-1 rounded-full">U06 · Bookings</span>
        </div>

        <ul className="space-y-2 text-xs text-slate-600 list-disc pl-4 pt-2">
          <li><strong>U01_TopPage</strong> — Home page with hero search, quick category chips, popular venues, promo carousel, upcoming bookings preview.</li>
          <li><strong>U02_SearchResults</strong> — Search & Explore page with location filters, category pills, advanced criteria, featured pick, and scrollable recommendations.</li>
          <li><strong>U03_ServiceDetails</strong> — Detailed venue view with gallery selector, about, amenities, time slot selection, package options, reviews, map location, similar venues, and live price summary.</li>
          <li><strong>U04_ReservationForm</strong> — 4-step reservation form recalculating total price live as guests, package, or promos change.</li>
          <li><strong>U05_ReservationConfirmation</strong> — Confirmation hero with auto-generated reference number and booking summary.</li>
          <li><strong>U06_MyBookings</strong> — Upcoming & Past booking tabs with stats counters and cancellation/re-booking management.</li>
          <li><strong>U07_Profile</strong> — Member profile hero, saved favorites, notifications, and app controls.</li>
        </ul>
      </section>

      {/* Card 3: Color Palette */}
      <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
        <h2 className="text-base font-bold text-[#334155]">
          Design System & Colors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl border border-slate-200 space-y-1">
            <div className="h-8 rounded-lg bg-[#0F766E]" />
            <p className="font-bold text-[#334155]">Primary</p>
            <p className="text-[10px] text-slate-400">Deep Emerald (#0F766E)</p>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 space-y-1">
            <div className="h-8 rounded-lg bg-[#84CC16]" />
            <p className="font-bold text-[#334155]">Secondary</p>
            <p className="text-[10px] text-slate-400">Sage Green (#84CC16)</p>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 space-y-1">
            <div className="h-8 rounded-lg bg-[#F59E0B]" />
            <p className="font-bold text-[#334155]">Accent</p>
            <p className="text-[10px] text-slate-400">Warm Gold (#F59E0B)</p>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 space-y-1">
            <div className="h-8 rounded-lg bg-[#334155]" />
            <p className="font-bold text-[#334155]">Neutral Dark</p>
            <p className="text-[10px] text-slate-400">Dark Gray (#334155)</p>
          </div>
        </div>
      </section>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('U01_TopPage')}
          className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold py-3 rounded-xl text-center transition-colors"
        >
          Return to Home Page
        </button>
      </div>
    </div>
  );
};

