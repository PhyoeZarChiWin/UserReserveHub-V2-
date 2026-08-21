import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Utensils,
  Users,
  Calendar,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  CheckCircle2,
  Tag,
  Percent,
  GlassWater,
  Cake,
  Flame,
  Music,
  Wine,
  CalendarDays,
  ChefHat,
  Ticket,
  Smartphone,
  QrCode,
  Download,
  ShieldCheck,
  Check,
  Quote,
  ThumbsUp,
  Copy,
  Timer,
  Building2
} from 'lucide-react';
import { Venue, Booking, ViewScreen } from '../types';
import { APP_IMAGES, getSafeImage } from '../data/imageRegistry';
import { CUISINES } from '../data/cuisineData';
import { UPCOMING_EVENTS } from '../data/eventsData';
import { FEATURED_REVIEWS, CustomerReview } from '../data/reviewsData';
import { MYANMAR_CATEGORIES, MYANMAR_MENU_ITEMS, MyanmarCategory, MyanmarFoodItem } from '../data/myanmarFoodData';

interface TopPageProps {
  venues: Venue[];
  bookings: Booking[];
  favorites: string[];
  onToggleFavorite: (venueId: string, venueName: string) => void;
  onSelectVenue: (venue: Venue) => void;
  onNavigate: (view: ViewScreen) => void;
  onFilterCategory: (category: string) => void;
}

export const TopPage: React.FC<TopPageProps> = ({
  venues,
  bookings,
  favorites,
  onToggleFavorite,
  onSelectVenue,
  onNavigate,
  onFilterCategory,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });
  const [selectedFoodCategory, setSelectedFoodCategory] = useState<string>('salads');
  const cuisineScrollRef = useRef<HTMLDivElement>(null);
  const foodCategoriesScrollRef = useRef<HTMLDivElement>(null);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);

  // Live ticking countdown for special offers
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(23, 59, 59, 999);
      const diff = target.getTime() - now.getTime();
      const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((diff / 1000 / 60) % 60));
      const seconds = Math.max(0, Math.floor((diff / 1000) % 60));
      setTimeLeft({ hours, minutes, seconds });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const scrollCuisine = (direction: 'left' | 'right') => {
    if (cuisineScrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      cuisineScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollFoodCategories = (direction: 'left' | 'right') => {
    if (foodCategoriesScrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      foodCategoriesScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      reviewsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const slides = [
    {
      eyebrow: 'Limited Time Offer',
      title: '20% Off Your First Booking',
      desc: 'Join ReserveHub today and enjoy a 20% discount on your first reservation at any partner venue.',
      actionText: 'Claim Offer',
    },
    {
      eyebrow: 'Weekend Special',
      title: 'Premium Meeting Rooms',
      desc: 'Book a fully-equipped meeting room for a half-day and get the second hour free across our premium venues.',
      actionText: 'Explore Rooms',
    },
    {
      eyebrow: 'Exclusive Perks',
      title: 'Event Venue Booking',
      desc: 'Plan your next celebration with zero booking fees and dedicated event coordination on all venues.',
      actionText: 'Browse Venues',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const popularVenues = venues.slice(0, 3);
  const upcomingBookings = bookings.filter((b) => b.status === 'Confirmed' || b.status === 'Pending').slice(0, 3);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('U02_SearchResults');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* ================= Hero Section (Summarized & Streamlined Luxury Marketplace) ================= */}
      <section className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-800/60 bg-[#061514] text-white">
        {/* Full-width Immersive Background Image Collage with dark luxury gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 h-full w-full opacity-25 scale-105 transform">
            <div className="h-full w-full overflow-hidden">
              <img
                src={APP_IMAGES['lakeview_terrace']?.dataUri || ''}
                alt="Luxury Ambience"
                className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
              />
            </div>
            <div className="h-full w-full overflow-hidden">
              <img
                src={APP_IMAGES['glass_pavilion']?.dataUri || ''}
                alt="Fine Dining"
                className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
              />
            </div>
            <div className="h-full w-full overflow-hidden hidden md:block">
              <img
                src={APP_IMAGES['golden_mandalay']?.dataUri || ''}
                alt="Grand Venue"
                className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
              />
            </div>
            <div className="h-full w-full overflow-hidden">
              <img
                src={APP_IMAGES['sakura_garden']?.dataUri || ''}
                alt="Omakase & Lounge"
                className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
              />
            </div>
          </div>

          {/* Luxury dark emerald & slate multi-stop gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031514]/96 via-[#062422]/90 to-[#071e1d]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061514] via-transparent to-[#041d1b]/60" />
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Hero Content Container - Summarized & Compact */}
        <div className="relative z-10 p-5 sm:p-7 lg:p-8">
          {/* Top Bar: Personalized Welcome & Live Rotating Featured Deal Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            {/* Personalized Welcome */}
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-amber-400 p-0.5 shadow-md shadow-teal-900/40">
                  <div className="w-full h-full rounded-[10px] bg-[#061e1c] flex items-center justify-center font-black text-amber-300 text-sm">
                    R
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border border-[#061e1c] rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-amber-400" /> Concierge Access
                  </span>
                  <span className="text-white/40 text-[10px]">•</span>
                  <span className="text-[11px] text-slate-300">Welcome, Diner</span>
                </div>
                <h4 className="text-xs font-semibold text-white/90">
                  Yangon & Curated Destinations
                </h4>
              </div>
            </div>

            {/* Live Rotating Featured Deal Banner */}
            <div
              onClick={() => onNavigate('U02_SearchResults')}
              className="group cursor-pointer flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-md max-w-sm"
            >
              <div className="w-6 h-6 rounded-lg bg-amber-400/20 border border-amber-300/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                <Tag className="w-3 h-3" />
              </div>
              <div className="text-left min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-black uppercase text-amber-300 tracking-wider">
                    {slides[activeSlide]?.eyebrow}
                  </span>
                  <span className="text-[8px] bg-rose-500/90 text-white font-bold px-1 rounded">
                    HOT
                  </span>
                </div>
                <p className="text-[11px] font-bold text-white truncate max-w-[180px] sm:max-w-[210px]">
                  {slides[activeSlide]?.title}
                </p>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </div>

          {/* Main Hero Grid: Left Content & Smart Search / Right Featured Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-5">
            {/* Left Column (7 cols): Headline, Smart Multi-input Search, Trending & Statistics */}
            <div className="lg:col-span-7 space-y-4">
              {/* Luxury Headline & Tagline */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-500/20 to-amber-500/20 backdrop-blur-md border border-teal-400/30 px-3 py-1 rounded-full text-[11px] font-semibold text-teal-200">
                  <Flame className="w-3 h-3 text-amber-400" />
                  <span>Reserve Top Tables, Suites & Event Spaces</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Find the Perfect Place for <span className="shimmer-text">Every Occasion</span>
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                  Instant guaranteed bookings at top restaurants, luxury hotels, and private event suites with exclusive dining privileges.
                </p>
              </div>

              {/* Smart Multi-Field Search Bar (Airbnb / OpenTable style glassmorphism) */}
              <div className="bg-white/10 backdrop-blur-xl p-1.5 sm:p-2 rounded-2xl border border-white/20 shadow-xl space-y-1.5">
                <form
                  onSubmit={handleSearchSubmit}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1.5 bg-white rounded-xl p-1 sm:p-1.5 text-slate-800 shadow-inner items-center"
                >
                  {/* Search query input */}
                  <div className="sm:col-span-5 flex items-center gap-2 px-2.5 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
                    <Search className="w-3.5 h-3.5 text-[#0F766E] flex-shrink-0" />
                    <div className="w-full text-left">
                      <span className="text-[8px] uppercase font-bold text-slate-400 block tracking-wider leading-none">
                        Where / What
                      </span>
                      <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Cuisine, rooftop, venue..."
                        className="w-full bg-transparent text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Date & Time Selector */}
                  <div className="sm:col-span-4 flex items-center gap-2 px-2.5 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
                    <Calendar className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <div className="w-full text-left">
                      <span className="text-[8px] uppercase font-bold text-slate-400 block tracking-wider leading-none">
                        Date & Time
                      </span>
                      <span className="text-xs font-semibold text-slate-700 block truncate">
                        Tonight · 7:30 PM
                      </span>
                    </div>
                  </div>

                  {/* Guests & Action Button */}
                  <div className="sm:col-span-3 flex items-center justify-between gap-1 pl-1.5 pr-0.5">
                    <div className="flex items-center gap-1 text-left min-w-0">
                      <Users className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      <span className="text-xs font-semibold text-slate-700 truncate">2 Guests</span>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#0F766E] hover:bg-[#115E59] active:scale-95 text-white px-3 py-2 rounded-lg font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1 flex-shrink-0 cursor-pointer"
                    >
                      <Search className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span className="text-xs">Search</span>
                    </button>
                  </div>
                </form>

                {/* Trending Search Suggestions */}
                <div className="flex flex-wrap items-center gap-1 px-1.5 pt-0.5 text-xs">
                  <span className="text-[10px] font-bold text-slate-300 flex items-center gap-1 mr-0.5">
                    <Sparkles className="w-2.5 h-2.5 text-amber-300" /> Trending:
                  </span>
                  {[
                    'Rooftop Dining',
                    'Omakase Sushi',
                    'Private Dining',
                    'Lakeview Terrace',
                  ].map((suggestion, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setSearchInput(suggestion);
                        onNavigate('U02_SearchResults');
                      }}
                      className="bg-white/10 hover:bg-white/20 border border-white/15 px-2 py-0.5 rounded-full text-[10px] font-medium text-slate-200 hover:text-white transition-all cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Animated Category Quick-Pills & Stats in a Clean Flow */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { label: 'Fine Dining', icon: Utensils, cat: 'Restaurants' },
                    { label: 'Luxury Hotels', icon: Building2, cat: 'Hotels' },
                    { label: 'Event Halls', icon: Sparkles, cat: 'Event Venues' },
                    { label: 'Meeting Suites', icon: Calendar, cat: 'Meeting Rooms' },
                  ].map((pill, i) => {
                    const Icon = pill.icon;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          onFilterCategory(pill.cat);
                          onNavigate('U02_SearchResults');
                        }}
                        className="group flex items-center gap-1.5 px-2.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg backdrop-blur-md text-[11px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-amber-300/40 cursor-pointer shadow-xs"
                      >
                        <Icon className="w-3 h-3 text-amber-300 group-hover:scale-110 transition-transform" />
                        <span>{pill.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Live Marketplace Statistics (Compact inline) */}
                <div className="flex items-center gap-3 text-left">
                  <div>
                    <div className="text-sm sm:text-base font-black text-amber-300 leading-tight">150k+</div>
                    <div className="text-[9px] text-slate-300 leading-tight">Bookings</div>
                  </div>
                  <div className="border-l border-white/15 pl-3">
                    <div className="text-sm sm:text-base font-black text-teal-300 leading-tight">1,200+</div>
                    <div className="text-[9px] text-slate-300 leading-tight">Venues</div>
                  </div>
                  <div className="border-l border-white/15 pl-3">
                    <div className="text-sm sm:text-base font-black text-white leading-tight flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9
                    </div>
                    <div className="text-[9px] text-slate-300 leading-tight">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Interactive Featured Showcase Card */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Glow backdrop */}
              <div className="absolute w-60 h-60 bg-gradient-to-tr from-teal-500/25 to-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Main Featured Showcase Card */}
              <div className="relative w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 shadow-xl text-white space-y-2.5 hover:shadow-teal-900/30 transition-all duration-300">
                {/* Header Tag inside card */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 bg-amber-400/20 border border-amber-300/40 text-amber-300 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5" /> Featured Tonight
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Instant Pass
                  </span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden shadow-md group cursor-pointer border border-white/10">
                  <img
                    src={popularVenues[0]?.image || APP_IMAGES['lakeview_terrace']?.dataUri || ''}
                    alt={popularVenues[0]?.name || 'Featured Venue'}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Badge on image */}
                  <div className="absolute top-2.5 left-2.5 bg-[#0F766E]/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-xs">
                    {popularVenues[0]?.tag || 'Prime Waterfront'}
                  </div>

                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    <span>{popularVenues[0]?.rating || 4.9}</span>
                  </div>

                  {/* Venue Details */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                    <h3 className="text-sm sm:text-base font-black text-white leading-tight drop-shadow-md truncate">
                      {popularVenues[0]?.name || 'Lakeview Terrace Restaurant'}
                    </h3>
                    <p className="text-[11px] text-slate-200 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5 text-rose-400 flex-shrink-0" />
                      <span className="truncate">{popularVenues[0]?.address || 'Inya Lake View, Yangon'}</span>
                    </p>
                  </div>
                </div>

                {/* Action Row inside Card */}
                <div className="flex items-center justify-between pt-0.5">
                  <div>
                    <span className="text-[9px] text-slate-300 block uppercase font-medium">From</span>
                    <div className="text-sm font-black text-amber-300">
                      ${popularVenues[0]?.basePrice || 45} <span className="text-[10px] text-slate-300 font-normal">/ guest</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (popularVenues[0]) onSelectVenue(popularVenues[0]);
                      onNavigate('U03_VenueDetail');
                    }}
                    className="bg-white hover:bg-slate-100 text-[#0F766E] font-bold text-xs px-3.5 py-2 rounded-lg shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Floating Badge: Live Diners Booking */}
              <div className="animate-float-slow hidden sm:flex absolute -bottom-3 -left-3 bg-slate-900/90 backdrop-blur-xl border border-white/20 p-2 pr-3 rounded-xl shadow-xl items-center gap-2 z-20 text-left">
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Table Reserved 2m ago</div>
                  <div className="text-[9px] text-slate-400">Sakura Japanese Garden · 4 guests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= Browse by cuisine ================= */}
      <section className="bg-white py-6 sm:py-8 px-5 sm:px-8 rounded-3xl border border-slate-200/80 shadow-xs relative space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1c1c]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1c1c] tracking-tight">Browse by cuisine</h2>
          </div>
          <button
            onClick={() => {
              onFilterCategory('Restaurants');
              onNavigate('U02_SearchResults');
            }}
            className="text-xs font-semibold text-[#0F766E] hover:text-[#115E59] flex items-center gap-1 group cursor-pointer"
          >
            Explore all <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Clean Static Horizontal List */}
        <div className="overflow-x-auto pb-2 -mx-2 px-2 scroll-smooth no-scrollbar">
          <div className="flex items-center gap-5 sm:gap-6 min-w-max">
            {CUISINES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onFilterCategory('Restaurants');
                  onNavigate('U02_SearchResults');
                }}
                className="flex flex-col items-center gap-2.5 w-[105px] sm:w-[115px] flex-shrink-0 group/item cursor-pointer text-center focus:outline-none"
              >
                <div className="w-[95px] h-[95px] sm:w-[105px] sm:h-[105px] rounded-full bg-[#f8f8f8] overflow-hidden transition-all duration-300 ease-out group-hover/item:shadow-[0px_10px_25px_rgba(0,0,0,0.12)] group-hover/item:-translate-y-1 border border-slate-200/80 ring-2 ring-transparent group-hover/item:ring-teal-500/20">
                  <img
                    src={item.image}
                    alt={item.alt || item.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover/item:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = APP_IMAGES['golden_mandalay']?.dataUri || '';
                    }}
                  />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-[#334155] text-center line-clamp-1 group-hover/item:text-[#0F766E] transition-colors duration-200">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Explore Food Categories ================= */}
      <section className="space-y-6 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 px-1">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-2xl sm:text-3xl select-none">🍴</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1e293b] tracking-tight">
                Explore Food Categories
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Discover your favorite meals and cuisines across Myanmar.
            </p>
          </div>
          <button
            onClick={() => {
              onFilterCategory('Restaurants');
              onNavigate('U02_SearchResults');
            }}
            className="text-xs font-semibold text-[#0F766E] hover:text-[#115E59] flex items-center gap-1 group cursor-pointer self-start sm:self-auto"
          >
            See all venues <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Category Chips Filtering */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar -mx-1 px-1">
          {MYANMAR_CATEGORIES.map((cat) => {
            const isSelected = selectedFoodCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFoodCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#0F766E] text-white shadow-sm ring-2 ring-[#0F766E]/20 scale-102'
                    : 'bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Scrollable Category Cards with Right Arrow Navigation */}
        <div className="relative group/foodCats py-1">
          <div
            ref={foodCategoriesScrollRef}
            className="flex items-center gap-3 sm:gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2 -mx-1 px-1"
          >
            {MYANMAR_CATEGORIES.map((cat) => {
              const isSelected = selectedFoodCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFoodCategory(cat.id)}
                  className={`group relative w-[185px] sm:w-[220px] md:w-[235px] h-[230px] sm:h-[260px] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 text-left bg-slate-900 flex-shrink-0 cursor-pointer border ${
                    isSelected
                      ? 'border-[#0F766E] ring-3 ring-[#0F766E]/30'
                      : 'border-slate-200/80'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="eager"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = APP_IMAGES['golden_mandalay']?.dataUri || '';
                    }}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle top indicator for active state */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0F766E] text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                      Active
                    </div>
                  )}
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-base sm:text-lg flex items-center gap-2 text-white leading-tight drop-shadow-sm group-hover:text-amber-300 transition-colors">
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </h3>
                    <p className="text-[11px] text-slate-200 line-clamp-1 mt-1">
                      {cat.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Navigation Arrow Button */}
          <button
            type="button"
            onClick={() => scrollFoodCategories('right')}
            aria-label="Scroll food categories right"
            className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-slate-800 shadow-md border border-slate-200 flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-[#0F766E]" />
          </button>
        </div>

        {/* Interactive Submenu for the Selected Category */}
        <div className="pt-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#1e293b] flex items-center gap-2">
              <span>
                {MYANMAR_CATEGORIES.find((c) => c.id === selectedFoodCategory)?.icon || '🥗'}
              </span>
              <span>
                {MYANMAR_CATEGORIES.find((c) => c.id === selectedFoodCategory)?.name || 'Salads'} Menu
              </span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {(MYANMAR_MENU_ITEMS[selectedFoodCategory] || []).length} curated dishes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {(MYANMAR_MENU_ITEMS[selectedFoodCategory] || MYANMAR_MENU_ITEMS['salads'] || []).map(
              (item) => {
                const targetVenue =
                  venues.find((v) => v.id === item.venueId) ||
                  venues.find((v) => v.name.toLowerCase().includes('mandalay')) ||
                  venues[0];

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-xs hover:shadow-md flex gap-3.5 border border-slate-200/80 hover:border-teal-200 transition-all group"
                  >
                    <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = APP_IMAGES['golden_mandalay']?.dataUri || '';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.popular && (
                        <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded-md bg-[#F59E0B] text-white text-[9px] font-bold tracking-tight shadow-xs">
                          Popular
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-between flex-grow min-w-0">
                      <div>
                        <div className="flex items-baseline justify-between gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                            {item.name}
                          </h4>
                        </div>
                        {item.burmeseName && (
                          <p className="text-[11px] text-[#0F766E] font-semibold truncate mt-0.5">
                            {item.burmeseName}
                          </p>
                        )}
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-slate-100">
                        <span className="text-xs sm:text-sm font-extrabold text-[#0F766E]">
                          {item.price}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            if (targetVenue) {
                              onSelectVenue(targetVenue);
                              onNavigate('U03_ServiceDetails');
                            } else {
                              onFilterCategory('Restaurants');
                              onNavigate('U02_SearchResults');
                            }
                          }}
                          className="bg-teal-50 hover:bg-teal-100 text-[#0F766E] active:scale-95 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 border border-teal-200/60"
                        >
                          <span>View Restaurant</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ================= How It Works (Summarized & Compact) ================= */}
      <section className="bg-white py-4 px-4 sm:px-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3.5">
        <div className="text-center space-y-1">
          <h2 className="text-base sm:text-lg font-bold text-[#1a1c1c] tracking-tight">How It Works</h2>
          <div className="w-8 h-0.5 bg-rose-500 mx-auto rounded-full" />
        </div>

        {/* 4 Steps Horizontal Flow - Summarized & Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 relative items-center">
          {/* Step 1: Search */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center text-center sm:text-left md:text-center lg:text-left gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center shadow-xs flex-shrink-0">
              <Search className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-xs sm:text-sm text-[#1a1c1c]">Search</h3>
              <p className="text-[11px] text-slate-500 leading-tight truncate sm:whitespace-normal">
                By cuisine, location, or name
              </p>
            </div>
          </div>

          {/* Step 2: Choose & Book */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center text-center sm:text-left md:text-center lg:text-left gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center shadow-xs flex-shrink-0">
              <Calendar className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-xs sm:text-sm text-[#1a1c1c]">Choose & Book</h3>
              <p className="text-[11px] text-slate-500 leading-tight truncate sm:whitespace-normal">
                Pick date, time & party size
              </p>
            </div>
          </div>

          {/* Step 3: Get Confirmed */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center text-center sm:text-left md:text-center lg:text-left gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center shadow-xs flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-xs sm:text-sm text-[#1a1c1c]">Get Confirmed</h3>
              <p className="text-[11px] text-slate-500 leading-tight truncate sm:whitespace-normal">
                Instant digital pass & QR
              </p>
            </div>
          </div>

          {/* Step 4: Enjoy Your Meal */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center text-center sm:text-left md:text-center lg:text-left gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center shadow-xs flex-shrink-0">
              <Utensils className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-xs sm:text-sm text-[#1a1c1c]">Enjoy Meal</h3>
              <p className="text-[11px] text-slate-500 leading-tight truncate sm:whitespace-normal">
                Show pass & enjoy dining
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Popular Reservations ================= */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#334155]">Popular Reservations</h2>
            <p className="text-xs text-slate-500 mt-0.5">Trending right now — rated and loved by users</p>
          </div>
          <button
            onClick={() => onNavigate('U02_SearchResults')}
            className="text-xs font-semibold text-[#0F766E] hover:text-[#115E59] flex items-center gap-1"
          >
            See all <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {popularVenues.map((venue) => {
            const isFav = favorites.includes(venue.id);
            return (
              <div
                key={venue.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group"
              >
                {/* Media */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = APP_IMAGES['golden_mandalay'].dataUri;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0F766E]/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm">
                    {venue.category}
                  </span>
                  <button
                    onClick={() => onToggleFavorite(venue.id, venue.name)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center text-slate-700 hover:text-red-500 transition-colors shadow-sm"
                    aria-label="Favorite"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFav ? 'fill-red-500 text-red-500' : 'text-slate-600'
                      }`}
                    />
                  </button>
                </div>

                {/* Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <button
                        onClick={() => {
                          onSelectVenue(venue);
                          onNavigate('U03_ServiceDetails');
                        }}
                        className="font-bold text-base text-[#334155] hover:text-[#0F766E] transition-colors text-left line-clamp-1"
                      >
                        {venue.name}
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <span className="flex items-center gap-1 font-semibold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                        {venue.rating}
                      </span>
                      <span>·</span>
                      <span>{venue.reviewsCount} reviews</span>
                    </div>

                    <p className="text-xs text-slate-500 flex items-center gap-1 truncate">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      {venue.location}
                    </p>
                  </div>

                  {/* Slot chips */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {venue.slots.slice(0, 3).map((slot, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium bg-slate-100 text-[#334155] px-2 py-1 rounded-md flex items-center gap-1"
                      >
                        <Clock className="w-3 h-3 text-slate-400" />
                        {slot}
                      </span>
                    ))}
                    {venue.slots.length > 3 && (
                      <span className="text-[10px] font-bold bg-[#0F766E]/10 text-[#0F766E] px-1.5 py-1 rounded-md">
                        +{venue.slots.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div>
                      <span className="text-xs text-slate-400 block">Starting from</span>
                      <span className="text-base font-extrabold text-[#0F766E]">
                        ${venue.basePrice}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onSelectVenue(venue);
                        onNavigate('U03_ServiceDetails');
                      }}
                      className="bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= Special Offers & Promotions ================= */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 px-1">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200/80 inline-flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
                LIMITED-TIME PERKS
              </span>
              <div className="hidden sm:inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-rose-200">
                <Timer className="w-3 h-3 text-rose-500 animate-pulse" />
                <span className="tabular-nums font-bold">
                  {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1e293b] tracking-tight mt-1.5">
              Special Offers & Promotions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
              Highlight discounts and events across our curated partner network
            </p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={() => onNavigate('U02_SearchResults')}
              className="text-xs font-semibold text-[#0F766E] hover:text-[#115E59] flex items-center gap-1 group cursor-pointer"
            >
              Explore all deals <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Promo Grid Cards with floating hover, entrance slide, and glowing featured card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: 20% Off Lunch Reservations (Featured with Subtle Glow & Pulsing Badge) */}
          <div
            onClick={() => onNavigate('U02_SearchResults')}
            style={{ animationDelay: '80ms' }}
            className="animate-slide-up animate-subtle-glow bg-white p-5 rounded-2xl border border-teal-600/30 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top-Right Pastel Curve Arc */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100/60 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />
            
            <div className="space-y-3.5 relative z-10">
              {/* Icon Container with subtle scale on hover */}
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-[#0F766E] border border-teal-100/80 flex items-center justify-center font-black shadow-2xs group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                <Percent className="w-5 h-5 stroke-[2.5]" />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="animate-soft-pulse text-[10px] font-bold text-[#0F766E] uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100 inline-block">
                    LUNCH SPECIAL
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-[#1e293b] group-hover:text-[#0F766E] transition-colors leading-snug">
                  20% Off Lunch Reservations
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Book weekday lunch slots (11:30 AM – 2:30 PM) and save 20% on your bill.
                </p>
              </div>
            </div>

            {/* Bottom Footer with Copy Promo Code & Book Arrow */}
            <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
              <button
                type="button"
                onClick={(e) => handleCopyCode('LUNCH20', e)}
                title="Click to copy promo code"
                className="font-medium text-slate-500 hover:text-[#0F766E] bg-slate-50 hover:bg-teal-50/80 px-2 py-0.5 rounded-md border border-slate-200/60 transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copiedCode === 'LUNCH20' ? (
                  <span className="text-[#0F766E] font-bold flex items-center gap-1 text-[11px]">
                    <Check className="w-3 h-3 stroke-[3]" /> Copied!
                  </span>
                ) : (
                  <>
                    <span className="text-[11px]">Code: <strong className="text-slate-700">LUNCH20</strong></span>
                    <Copy className="w-2.5 h-2.5 opacity-60" />
                  </>
                )}
              </button>

              <span className="font-bold text-[#0F766E] group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                Book <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </div>
          </div>

          {/* Card 2: Happy Hour Deals */}
          <div
            onClick={() => onNavigate('U02_SearchResults')}
            style={{ animationDelay: '160ms' }}
            className="animate-slide-up bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-amber-400/60 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top-Right Pastel Curve Arc */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100/50 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

            <div className="space-y-3.5 relative z-10">
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center font-black shadow-2xs group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                <GlassWater className="w-5 h-5 stroke-[2.2]" />
              </div>

              <div className="space-y-1.5">
                <span className="animate-soft-pulse text-[10px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100 inline-block">
                  BEVERAGES & TAPAS
                </span>
                <h3 className="text-[15px] font-bold text-[#1e293b] group-hover:text-amber-600 transition-colors leading-snug">
                  Happy Hour Deals
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Buy 1 Get 1 free mocktails, crafted drinks, and half-priced appetizers from 4 PM – 7 PM.
                </p>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
              <span className="font-medium text-slate-500 text-[11px]">Daily 4-7 PM</span>
              <span className="font-bold text-amber-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                Book <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </div>
          </div>

          {/* Card 3: Birthday Packages */}
          <div
            onClick={() => onNavigate('U02_SearchResults')}
            style={{ animationDelay: '240ms' }}
            className="animate-slide-up bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-pink-300 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top-Right Pastel Curve Arc */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-100/50 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

            <div className="space-y-3.5 relative z-10">
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 border border-pink-100 flex items-center justify-center font-black shadow-2xs group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                <Cake className="w-5 h-5 stroke-[2.2]" />
              </div>

              <div className="space-y-1.5">
                <span className="animate-soft-pulse text-[10px] font-bold text-pink-700 uppercase tracking-wider bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100 inline-block">
                  CELEBRATION
                </span>
                <h3 className="text-[15px] font-bold text-[#1e293b] group-hover:text-pink-600 transition-colors leading-snug">
                  Birthday Packages
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Complimentary birthday dessert, custom table decor, and celebratory champagne for groups of 4+.
                </p>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
              <span className="font-medium text-slate-500 text-[11px]">Complimentary</span>
              <span className="font-bold text-pink-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                Book <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </div>
          </div>

          {/* Card 4: Weekend Specials */}
          <div
            onClick={() => onNavigate('U02_SearchResults')}
            style={{ animationDelay: '320ms' }}
            className="animate-slide-up bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-300 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top-Right Pastel Curve Arc */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100/50 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

            <div className="space-y-3.5 relative z-10">
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-black shadow-2xs group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                <Flame className="w-5 h-5 stroke-[2.2]" />
              </div>

              <div className="space-y-1.5">
                <span className="animate-soft-pulse text-[10px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 inline-block">
                  SAT & SUN ONLY
                </span>
                <h3 className="text-[15px] font-bold text-[#1e293b] group-hover:text-emerald-600 transition-colors leading-snug">
                  Weekend Specials
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Exclusive chef degustation menu paired with live music and outdoor terrace seating.
                </p>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
              <span className="font-medium text-slate-500 text-[11px]">Sat - Sun</span>
              <span className="font-bold text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                Book <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </div>
          </div>
        </div>

        {/* Featured Interactive Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0F766E] via-[#115E59] to-[#84CC16] text-white p-6 sm:p-8 shadow-lg overflow-hidden">
          <div className="relative z-10 max-w-xl space-y-3">
            <span className="bg-white/20 text-[#84CC16] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
              {slides[activeSlide].eyebrow}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {slides[activeSlide].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
              {slides[activeSlide].desc}
            </p>
            <button
              onClick={() => onNavigate('U02_SearchResults')}
              className="mt-2 inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow"
            >
              {slides[activeSlide].actionText} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-4 right-6 flex items-center gap-1.5 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeSlide ? 'w-6 bg-white' : 'w-2 bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= Upcoming Events ================= */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold text-[#0F766E] uppercase tracking-wider bg-[#0F766E]/10 px-3 py-1 rounded-full border border-[#0F766E]/20 inline-flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-[#0F766E]" />
              Exclusive Experiences
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#334155] mt-1.5">
              Upcoming Events
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Useful for restaurants that host curated culinary events, tastings & live entertainment
            </p>
          </div>
          <button
            onClick={() => onNavigate('U02_SearchResults')}
            className="text-xs font-bold text-[#0F766E] hover:text-[#115E59] flex items-center gap-1 self-start sm:self-auto"
          >
            Explore all events <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {UPCOMING_EVENTS.map((event) => {
            // Find corresponding venue if exists
            const matchedVenue = venues.find((v) => v.id === event.venueId);

            return (
              <div
                key={event.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#0F766E]/40 transition-all overflow-hidden flex flex-col sm:flex-row group"
              >
                {/* Image Section */}
                <div className="sm:w-2/5 relative h-48 sm:h-auto min-h-[190px] overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    {event.badge}
                  </span>

                  {/* Spots Left Pill */}
                  <span className="absolute bottom-3 left-3 bg-[#F59E0B] text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                    {event.spotsLeft} spots left
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:w-3/5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${event.tagColor}`}>
                        {event.category}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#334155] group-hover:text-[#0F766E] transition-colors leading-snug">
                      {event.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Meta details */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5 text-[#0F766E] flex-shrink-0" />
                      <span className="font-semibold text-slate-700">{event.date}</span>
                      <span className="text-slate-400">·</span>
                      <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                      <span className="font-medium text-slate-700 truncate">{event.venueName}</span>
                    </div>
                  </div>

                  {/* Pricing & Booking CTA */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Admission / Table</span>
                      <span className="text-xs font-black text-[#0F766E]">
                        {event.pricePerPerson}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (matchedVenue) {
                          onSelectVenue(matchedVenue);
                        } else {
                          onNavigate('U02_SearchResults');
                        }
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm hover:shadow active:scale-95"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Reserve Spot</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= Customer Reviews (Build Trust) ================= */}
      <section className="space-y-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden">
        {/* Header & Rating Summary */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Diners
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                4.9 / 5.0 Average
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              What Diners Say About ReserveHub
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Real reviews and dining experiences from thousands of happy guests
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scrollReviews('left')}
              aria-label="Previous reviews"
              className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollReviews('right')}
              aria-label="Next reviews"
              className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div
          ref={reviewsScrollRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto py-2 px-1 scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURED_REVIEWS.map((review) => {
            // Find matched venue for easy navigation
            const matchedVenue = venues.find((v) => v.id === review.venueId || v.name === review.restaurantName);

            return (
              <div
                key={review.id}
                className="w-[300px] sm:w-[360px] flex-shrink-0 bg-[#F8FAFC] p-5 sm:p-6 rounded-3xl border border-slate-200/80 hover:border-[#0F766E]/40 hover:shadow-md hover:bg-white transition-all flex flex-col justify-between space-y-4 group relative"
              >
                {/* Top: Customer Photo, Name & Verified Badge */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Customer Photo / Avatar */}
                      <div className="relative">
                        <img
                          src={review.avatar}
                          alt={review.customerName}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = APP_IMAGES['pic1']?.dataUri || '';
                          }}
                          className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm"
                        />
                        {review.verifiedDiner && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0F766E] text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm" title="Verified Diner">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>

                      {/* Name & Role */}
                      <div>
                        <h3 className="font-bold text-sm text-slate-900 leading-tight">
                          {review.customerName}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {review.customerRole || 'Verified Diner'} · <span className="text-slate-400">{review.visitedDate}</span>
                        </p>
                      </div>
                    </div>

                    {/* Star Rating Badge */}
                    <div className="flex items-center gap-0.5 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-xl">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="text-xs font-black text-amber-900">{review.rating}.0</span>
                    </div>
                  </div>

                  {/* Occasion / Dish Badge */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] font-bold bg-slate-200/70 text-slate-700 px-2.5 py-0.5 rounded-md">
                      {review.occasion}
                    </span>
                    {review.recommendedDish && (
                      <span className="text-[10px] font-semibold bg-teal-50 text-[#0F766E] border border-teal-200/60 px-2.5 py-0.5 rounded-md truncate max-w-[200px]">
                        ★ {review.recommendedDish}
                      </span>
                    )}
                  </div>

                  {/* Short Review Text with Quote Decoration */}
                  <div className="relative pt-1">
                    <Quote className="w-5 h-5 text-teal-600/20 absolute -top-1 -left-1 pointer-events-none" />
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic pl-3 border-l-2 border-[#0F766E]/40">
                      "{review.reviewText}"
                    </p>
                  </div>
                </div>

                {/* Bottom: Restaurant Name with Quick Link */}
                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Restaurant
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        if (matchedVenue) {
                          onSelectVenue(matchedVenue);
                          onNavigate('U03_ServiceDetails');
                        } else {
                          onNavigate('U02_SearchResults');
                        }
                      }}
                      className="font-bold text-xs text-[#0F766E] hover:text-[#115E59] hover:underline truncate flex items-center gap-1 text-left"
                    >
                      <Utensils className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{review.restaurantName}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (matchedVenue) {
                        onSelectVenue(matchedVenue);
                        onNavigate('U03_ServiceDetails');
                      } else {
                        onNavigate('U02_SearchResults');
                      }
                    }}
                    className="p-1.5 rounded-xl bg-white hover:bg-[#0F766E] text-slate-400 hover:text-white border border-slate-200/80 hover:border-[#0F766E] transition-all shadow-sm flex-shrink-0"
                    title="View Restaurant"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= Mobile App Promotion (Summarized & Compact) ================= */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#042f2e] via-[#0f766e] to-[#134e4a] text-white p-5 sm:p-7 shadow-lg border border-teal-800/40">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Column: Summarized text, key benefits & store buttons */}
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-0.5 rounded-full text-[11px] font-bold text-teal-200 uppercase tracking-wide">
                <Smartphone className="w-3 h-3 text-teal-300" />
                Mobile App Available
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Get the ReserveHub App
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                Instant 30s bookings, live queue alerts, and exclusive in-app dining perks on iOS & Android.
              </p>
            </div>

            {/* Summarized Key Benefits */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1 rounded-lg text-xs font-semibold text-white backdrop-blur-sm">
                <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" /> Instant Confirmation
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1 rounded-lg text-xs font-semibold text-white backdrop-blur-sm">
                <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" /> Exclusive 15-20% Perks
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1 rounded-lg text-xs font-semibold text-white backdrop-blur-sm">
                <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" /> 1-Tap Check-In
              </span>
            </div>

            {/* Store Buttons & Compact QR */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#download-appstore"
                onClick={(e) => { e.preventDefault(); }}
                className="flex items-center gap-2.5 bg-black hover:bg-slate-900 text-white px-3.5 py-2 rounded-xl border border-white/20 shadow-md hover:scale-[1.02] active:scale-95 transition-all text-left"
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.7-11.71-13.98-6.19-9.5-10.87-20.2-14.04-32.09-3.17-11.9-4.76-23.08-4.76-33.55 0-14.24 3.73-25.96 11.2-35.14 7.46-9.18 16.73-13.88 27.79-14.1 4.57 0 9.7 1.25 15.4 3.76 5.69 2.5 9.4 3.82 11.13 3.93 1.52-.11 5.37-1.46 11.55-4.04 6.18-2.58 11.23-3.76 15.15-3.55 11.41.65 20.66 4.88 27.72 12.69-9.89 5.98-14.73 14.24-14.51 24.78.22 8.15 3.32 15.01 9.3 20.59 5.98 5.57 13.06 8.78 21.23 9.63-2.06 6.08-4.51 12.18-7.34 18.29zM119.22 33.05c0-6.96 2.47-13.53 7.42-19.71 4.94-6.18 11.14-10.36 18.6-12.54 1.09 5.87.54 11.85-1.63 17.95-2.18 6.09-5.93 11.36-11.26 15.81-3.48 2.93-7.23 4.99-11.24 6.17-.33-2.5-.5-4.8-.5-6.88z"/>
                </svg>
                <div>
                  <span className="text-[9px] uppercase font-semibold text-slate-300 block leading-none">Download on</span>
                  <span className="text-xs font-bold text-white leading-tight block">App Store</span>
                </div>
              </a>

              <a
                href="#download-playstore"
                onClick={(e) => { e.preventDefault(); }}
                className="flex items-center gap-2.5 bg-black hover:bg-slate-900 text-white px-3.5 py-2 rounded-xl border border-white/20 shadow-md hover:scale-[1.02] active:scale-95 transition-all text-left"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.6 1.8L13.8 12 3.6 22.2c-.4-.4-.6-1-.6-1.7V3.5c0-.7.2-1.3.6-1.7z" />
                  <path fill="#FBBC04" d="M17.2 8.6L14.8 11l-1-1 3.4-3.4 2.5 1.5c.7.4.7 1.1 0 1.5l-2.5-1z" />
                  <path fill="#34A853" d="M13.8 12l3.4 3.4-3.4 3.4-10.2-10.2L13.8 12z" />
                  <path fill="#EA4335" d="M17.2 15.4l2.5-1.5c.7-.4.7-1.1 0-1.5l-2.5-1-3.4 3.4 3.4.6z" />
                </svg>
                <div>
                  <span className="text-[9px] uppercase font-semibold text-slate-300 block leading-none">GET IT ON</span>
                  <span className="text-xs font-bold text-white leading-tight block">Google Play</span>
                </div>
              </a>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl">
                <QrCode className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <div className="text-left text-[11px] leading-tight">
                  <span className="font-bold text-amber-300 block">Scan to Install</span>
                  <span className="text-white/80 text-[10px]">Direct Mobile Link</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact App Preview Card */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl max-w-sm w-full lg:w-auto">
            <div className="w-20 h-24 rounded-xl overflow-hidden shadow-md flex-shrink-0 relative border border-white/20 bg-slate-900">
              <img
                src={APP_IMAGES['glass_pavilion']?.dataUri || ''}
                alt="App Interface"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                <span className="text-[9px] font-bold text-emerald-300 leading-tight">✓ Reserved</span>
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-black text-white ml-1">4.9 / 5.0</span>
              </div>
              <div className="text-xs font-bold text-teal-100">ReserveHub for Mobile</div>
              <div className="text-[11px] text-teal-200/80 leading-snug">
                15,000+ active diners booking faster daily.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Upcoming Bookings Preview ================= */}
      {upcomingBookings.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#334155]">Upcoming Bookings</h2>
              <p className="text-xs text-slate-500 mt-0.5">Your scheduled reservations at a glance</p>
            </div>
            <button
              onClick={() => onNavigate('U06_MyBookings')}
              className="text-xs font-semibold text-[#0F766E] hover:text-[#115E59] flex items-center gap-1"
            >
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5">
            {upcomingBookings.map((b) => (
              <div
                key={b.id}
                onClick={() => onNavigate('U06_MyBookings')}
                className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-[#334155] truncate">{b.venueName}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">
                      {b.date} · {b.time} · {b.guests} guests
                    </p>
                  </div>
                </div>

                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${
                    b.status === 'Confirmed'
                      ? 'bg-[#84CC16]/20 text-[#365314] border border-[#84CC16]/40'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}
                >
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
