import React, { useState } from 'react';
import { 
  Utensils, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  Info, 
  Send, 
  X, 
  ChevronRight, 
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { ViewScreen } from '../types';

interface FooterProps {
  onNavigate?: (screen: ViewScreen) => void;
  onShowToast?: (msg: string) => void;
}

type ModalType = 'about' | 'contact' | 'faq' | 'privacy' | 'terms' | null;

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowToast }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenModal = (modal: ModalType) => {
    setActiveModal(modal);
    setContactSubmitted(false);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    if (onShowToast) {
      onShowToast('Message sent! Our support team will reply within 2 hours.');
    }
  };

  const faqs = [
    {
      q: 'How do I make a table reservation with ReserveHub?',
      a: 'Browse restaurants by cuisine, location, or atmosphere. Choose your preferred date, time slot, and guest count, select any customized dining packages, and confirm instantly. You will receive a unique booking reference code immediately.'
    },
    {
      q: 'Is there any fee to reserve a table?',
      a: 'No! Standard reservations through ReserveHub are 100% free of charge for diners. Special ticketed events or chef tasting menus may require prepayment as noted on the event details.'
    },
    {
      q: 'How do I modify or cancel an existing reservation?',
      a: 'Head over to "My Bookings" in the top or bottom navigation bar. Select your active booking and click "Cancel Reservation" or contact the venue directly using the one-tap phone link.'
    },
    {
      q: 'What happens if I arrive late to my booking?',
      a: 'Most partner restaurants hold reserved tables for up to 15 minutes past the scheduled booking time. If you expect a delay, please call the restaurant directly via the contact number on your booking pass.'
    },
    {
      q: 'How can restaurant owners partner with ReserveHub?',
      a: 'We welcome culinary establishments of all sizes! Reach out via our Contact form with subject "Restaurant Partnership" or email partners@reservehub.com to list your venue and access real-time table management tools.'
    }
  ];

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-14 pb-24 md:pb-14 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
            {/* Col 1: Brand & Bio (2 cols wide on desktop) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0F766E] to-[#14b8a6] flex items-center justify-center text-white shadow-md">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-black text-white tracking-tight">ReserveHub</span>
                  <span className="text-xs font-bold text-[#14b8a6] block -mt-1 tracking-wider uppercase">Table Reservation</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Discover exceptional dining experiences, curated culinary tastings, and reserve your ideal tables in seconds across Myanmar’s premier venues.
              </p>

              {/* Contact mini details */}
              <div className="space-y-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 text-[#14b8a6] flex-shrink-0" />
                  <span>Downtown Heritage Tower, Strand Rd, Yangon</span>
                </div>
                <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#14b8a6] flex-shrink-0" />
                  <span>+95 9 798 123 456 / +95 1 230 450</span>
                </div>
                <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#14b8a6] flex-shrink-0" />
                  <span>concierge@reservehub.com</span>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Discover
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('U01_TopPage');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#14b8a6] text-slate-400 transition-colors text-left cursor-pointer"
                  >
                    Home & Featured Venues
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('U02_SearchResults');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#14b8a6] text-slate-400 transition-colors text-left cursor-pointer"
                  >
                    Search & Filter Restaurants
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('U06_MyBookings');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#14b8a6] text-slate-400 transition-colors text-left cursor-pointer"
                  >
                    My Bookings & Passes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('U07_Profile');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#14b8a6] transition-colors text-left"
                  >
                    Guest Profile & Perks
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Company & Support */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Support & Info
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => handleOpenModal('about')}
                    className="hover:text-[#14b8a6] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>About Us</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOpenModal('contact')}
                    className="hover:text-[#14b8a6] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>Contact Us</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOpenModal('faq')}
                    className="hover:text-[#14b8a6] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>FAQ (Help Center)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOpenModal('privacy')}
                    className="hover:text-[#14b8a6] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>Privacy Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOpenModal('terms')}
                    className="hover:text-[#14b8a6] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>Terms & Conditions</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Social Media & Newsletter */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Follow & Connect
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stay updated with new restaurant openings, Michelin pop-ups & chef specials.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pt-1">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.48 2.76 1.4-.04 2.67-.93 3.09-2.28.16-.54.21-1.11.21-1.68.02-4.93.01-9.86.01-14.79h-.02z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

              {/* Language / Region Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs text-slate-300">
                  <Globe className="w-3.5 h-3.5 text-[#14b8a6]" />
                  <span>Myanmar · English (US) / MMK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Badges */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} ReserveHub Dining Reservation Platform. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleOpenModal('privacy')}
                className="hover:text-slate-300 transition-colors"
              >
                Privacy
              </button>
              <span>·</span>
              <button
                onClick={() => handleOpenModal('terms')}
                className="hover:text-slate-300 transition-colors"
              >
                Terms
              </button>
              <span>·</span>
              <button
                onClick={() => handleOpenModal('faq')}
                className="hover:text-slate-300 transition-colors"
              >
                Help
              </button>
              <span>·</span>
              <button
                onClick={() => handleOpenModal('contact')}
                className="hover:text-slate-300 transition-colors"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= Interactive Information Modals ================= */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div className="flex items-center gap-2.5">
                {activeModal === 'about' && <Info className="w-5 h-5 text-[#0F766E]" />}
                {activeModal === 'contact' && <Mail className="w-5 h-5 text-[#0F766E]" />}
                {activeModal === 'faq' && <HelpCircle className="w-5 h-5 text-[#0F766E]" />}
                {activeModal === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#0F766E]" />}
                {activeModal === 'terms' && <FileText className="w-5 h-5 text-[#0F766E]" />}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 capitalize">
                  {activeModal === 'about' && 'About ReserveHub'}
                  {activeModal === 'contact' && 'Contact Support & Concierge'}
                  {activeModal === 'faq' && 'Frequently Asked Questions'}
                  {activeModal === 'privacy' && 'Privacy Policy'}
                  {activeModal === 'terms' && 'Terms & Conditions'}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 text-sm text-slate-600 leading-relaxed">
              {/* ABOUT US MODAL */}
              {activeModal === 'about' && (
                <div className="space-y-4">
                  <div className="p-4 bg-teal-50 border border-teal-100 rounded-2xl">
                    <h4 className="font-bold text-[#0F766E] text-base mb-1">
                      Our Culinary Mission
                    </h4>
                    <p className="text-xs sm:text-sm text-teal-900">
                      ReserveHub connects food enthusiasts with remarkable dining rooms, historic tea houses, and rooftop lounges. We eliminate the uncertainty of long queues and busy telephone lines with instant table reservations.
                    </p>
                  </div>

                  <h5 className="font-bold text-slate-900 text-sm">Why Diners Choose ReserveHub</h5>
                  <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5">
                    <li><strong>Real-Time Table Availability:</strong> Direct synchronisation with restaurant floor managers.</li>
                    <li><strong>Exclusive Tasting Menus:</strong> Access to secret degustation packages and seasonal launch events.</li>
                    <li><strong>Verified Gastronomic Reviews:</strong> Honest ratings from actual diners who completed reservations.</li>
                    <li><strong>Dedicated Dining Concierge:</strong> Instant WhatsApp and phone assistance for special events.</li>
                  </ul>

                  <div className="border-t border-slate-100 pt-4 text-xs text-slate-500">
                    Headquartered in Yangon, Myanmar with partner venues across Yangon, Mandalay, Bagan, and Inle Lake.
                  </div>
                </div>
              )}

              {/* CONTACT US MODAL */}
              {activeModal === 'contact' && (
                <div>
                  {contactSubmitted ? (
                    <div className="py-8 text-center space-y-3">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Thank You!</h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                        Your inquiry has been received. Our concierge desk will contact you via email or phone within 2 hours.
                      </p>
                      <button
                        onClick={handleCloseModal}
                        className="mt-4 bg-[#0F766E] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#115E59] transition-all"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <p className="text-xs text-slate-500">
                        Have a question about a reservation, private buyout, or restaurant partnership? Send us a message below.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                          <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            placeholder="e.g. Daw Aye Aye"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            placeholder="you@domain.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                        <select
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0F766E] focus:outline-none bg-white"
                        >
                          <option>General Inquiry</option>
                          <option>Booking Modification Help</option>
                          <option>Restaurant Partnership</option>
                          <option>VIP Dining / Event Buyout</option>
                          <option>Technical Support</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                        <textarea
                          rows={4}
                          required
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          placeholder="How can we assist you today?"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-end gap-3">
                        <button
                          type="button"
                          onClick={handleCloseModal}
                          className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {/* FAQ MODAL */}
              {activeModal === 'faq' && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 mb-2">
                    Common questions regarding booking policies, time slots, and restaurant services.
                  </p>

                  <div className="space-y-2.5">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                            className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-3 transition-colors"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-[#0F766E]' : ''}`} />
                          </button>
                          {isOpen && (
                            <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* PRIVACY POLICY MODAL */}
              {activeModal === 'privacy' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
                    <strong>Last Updated: August 2026.</strong> We take customer privacy and data security seriously.
                  </div>

                  <h5 className="font-bold text-slate-900">1. Information We Collect</h5>
                  <p>
                    When you make a reservation, we collect your name, phone number, email address, guest preferences, and dietary restrictions to provide to the restaurant host.
                  </p>

                  <h5 className="font-bold text-slate-900">2. How Your Data is Used</h5>
                  <p>
                    Your data is solely used to verify reservations, send SMS/email confirmations, alert you to table ready status, and provide personalized dining recommendations. We never sell your personal contact info to third parties.
                  </p>

                  <h5 className="font-bold text-slate-900">3. Data Security & Storage</h5>
                  <p>
                    All reservations and communications are transmitted through encrypted HTTPS/TLS connections with strict access control protocols for restaurant hosts.
                  </p>
                </div>
              )}

              {/* TERMS & CONDITIONS MODAL */}
              {activeModal === 'terms' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <h5 className="font-bold text-slate-900">1. Reservation Terms & Arrival</h5>
                  <p>
                    Reservations are confirmed in real-time. Please arrive on time. Tables are held for a maximum grace period of 15 minutes before being released to walk-in patrons.
                  </p>

                  <h5 className="font-bold text-slate-900">2. Cancellation & No-Show Policy</h5>
                  <p>
                    If you are unable to attend, please cancel your booking at least 1 hour in advance via the "My Bookings" page so other guests may reserve the slot.
                  </p>

                  <h5 className="font-bold text-slate-900">3. Dining Packages & Special Menus</h5>
                  <p>
                    Pre-selected tasting menus and promotional packages are subject to seasonal ingredient availability. In rare cases of substitute items, restaurants will match with equivalent or higher value culinary preparations.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                ReserveHub Verified Platform
              </span>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
