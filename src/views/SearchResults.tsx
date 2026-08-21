import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
  Clock,
  Heart,
  X,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Venue, ViewScreen } from '../types';
import { APP_IMAGES } from '../data/imageRegistry';

interface SearchResultsProps {
  venues: Venue[];
  favorites: string[];
  onToggleFavorite: (venueId: string, venueName: string) => void;
  onSelectVenue: (venue: Venue) => void;
  onNavigate: (view: ViewScreen) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  venues,
  favorites,
  onToggleFavorite,
  onSelectVenue,
  onNavigate,
  selectedCategory,
  onSelectCategory,
}) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [date, setDate] = useState('2026-08-08');
  const [guests, setGuests] = useState('2 Guests');
  const [ratingFilter, setRatingFilter] = useState('Any Rating');
  const [priceFilter, setPriceFilter] = useState('Any Price');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const categories = [
    'All',
    'Restaurants',
    'Promotions',
    'Upcoming Events',
    'Services',
  ];

  // Filtering logic
  const filteredVenues = useMemo(() => {
    return venues.filter((v) => {
      // Keyword match
      if (
        keyword &&
        !v.name.toLowerCase().includes(keyword.toLowerCase()) &&
        !v.description.toLowerCase().includes(keyword.toLowerCase()) &&
        !v.location.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return false;
      }

      // Category match
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Promotions') {
          const isPromo =
            v.tag?.toLowerCase().includes('special') ||
            v.tag?.toLowerCase().includes('deal') ||
            v.tag?.toLowerCase().includes('offer') ||
            v.basePrice <= 35 ||
            v.packages?.some((p) => p.price <= 30);
          if (!isPromo) return false;
        } else if (selectedCategory === 'Upcoming Events' || selectedCategory === 'Event Venues') {
          if (v.category !== 'Event Venues' && v.tag !== 'Events') return false;
        } else if (selectedCategory === 'Services') {
          if (
            v.category !== 'Beauty & Wellness' &&
            v.category !== 'Healthcare' &&
            v.category !== 'Meeting Rooms'
          ) {
            return false;
          }
        } else if (v.category !== selectedCategory) {
          return false;
        }
      }

      // Location match
      if (location !== 'All Locations' && !v.city.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }

      // Rating match
      if (ratingFilter === '4.5 & Up' && v.rating < 4.5) return false;
      if (ratingFilter === '4.0 & Up' && v.rating < 4.0) return false;

      // Price match
      if (priceFilter === 'Budget · Under $20' && v.basePrice >= 20) return false;
      if (priceFilter === 'Mid · $20 – $40' && (v.basePrice < 20 || v.basePrice > 40)) return false;
      if (priceFilter === 'Premium · Over $40' && v.basePrice <= 40) return false;

      return true;
    });
  }, [venues, keyword, selectedCategory, location, ratingFilter, priceFilter]);

  const activeFiltersCount =
    (selectedCategory !== 'All' ? 1 : 0) +
    (location !== 'All Locations' ? 1 : 0) +
    (ratingFilter !== 'Any Rating' ? 1 : 0) +
    (priceFilter !== 'Any Price' ? 1 : 0) +
    (keyword ? 1 : 0);

  const clearAllFilters = () => {
    setKeyword('');
    setLocation('All Locations');
    onSelectCategory('All');
    setRatingFilter('Any Rating');
    setPriceFilter('Any Price');
  };

  const featuredVenue = venues.find((v) => v.id === 'sakura-garden') || venues[1];

  return (
    <div className="space-y-6 pb-12">
      {/* ================= Filter Panel ================= */}
      <section className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
        >
          {/* Keyword */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Search</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Restaurant, venue..."
                className="w-full pl-9 pr-3 py-2 text-xs font-medium bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white text-[#334155]"
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 text-xs font-medium bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white text-[#334155]"
            >
              <option>All Locations</option>
              <option>Yangon</option>
              <option>Mandalay</option>
              <option>Nay Pyi Taw</option>
              <option>Inle Lake</option>
            </select>
          </div>

          {/* Date */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 text-xs font-medium bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white text-[#334155]"
            />
          </div>

          {/* Guests */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2 text-xs font-medium bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white text-[#334155]"
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>6 Guests</option>
              <option>8+ Guests</option>
            </select>
          </div>

          {/* Search CTA */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Apply Search
            </button>
          </div>
        </form>

        {/* Categories Pills & Advanced Filters button */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#0F766E] text-white shadow-sm'
                      : 'bg-slate-100 text-[#334155] hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* More filters button */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-slate-200 rounded-full hover:bg-slate-50 text-[#334155]"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#0F766E]" />
            More Filters
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#F59E0B] text-white text-[10px] font-bold flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Advanced Filters Expandable Grid */}
        {showAdvanced && (
          <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-500">Rating</label>
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="w-full px-3 py-1.5 text-xs font-medium bg-[#F8FAFC] border border-slate-200 rounded-lg text-[#334155]"
              >
                <option>Any Rating</option>
                <option>4.5 & Up</option>
                <option>4.0 & Up</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-500">Price Range</label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-1.5 text-xs font-medium bg-[#F8FAFC] border border-slate-200 rounded-lg text-[#334155]"
              >
                <option>Any Price</option>
                <option>Budget · Under $20</option>
                <option>Mid · $20 – $40</option>
                <option>Premium · Over $40</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-500">Availability</label>
              <select className="w-full px-3 py-1.5 text-xs font-medium bg-[#F8FAFC] border border-slate-200 rounded-lg text-[#334155]">
                <option>Any Availability</option>
                <option>Today</option>
                <option>This Weekend</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-500">Distance</label>
              <select className="w-full px-3 py-1.5 text-xs font-medium bg-[#F8FAFC] border border-slate-200 rounded-lg text-[#334155]">
                <option>Any Distance</option>
                <option>Within 2 km</option>
                <option>Within 5 km</option>
              </select>
            </div>
          </div>
        )}
      </section>

      {/* Results Count & Active Chips Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-bold text-[#334155]">
            Showing <span className="text-[#0F766E] font-extrabold">{filteredVenues.length}</span> Results
          </h1>
          <p className="text-xs text-slate-500">Available venues and services near you</p>
        </div>

        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs font-bold text-[#F59E0B] hover:underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" /> Clear all filters
          </button>
        )}
      </div>

      {/* ================= Featured Listing Highlight ================= */}
      {selectedCategory === 'All' && !keyword && (
        <article className="bg-white rounded-2xl border border-amber-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden grid grid-cols-1 md:grid-cols-12 relative group max-w-4xl">
          <div className="md:col-span-4 relative h-44 sm:h-48 md:h-auto min-h-[170px] max-h-[210px] bg-slate-900 overflow-hidden">
            <img
              src={featuredVenue.image}
              alt={featuredVenue.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = APP_IMAGES['sakura_garden'].dataUri;
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-2.5 left-2.5 bg-[#F59E0B] text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3" /> Featured Pick
            </span>
          </div>

          <div className="md:col-span-8 p-4 sm:p-4.5 flex flex-col justify-between space-y-2.5">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#0F766E] uppercase tracking-wider">
                {featuredVenue.category} · Special Deal
              </span>
              <h2
                className="text-base sm:text-lg font-bold text-[#334155] hover:text-[#0F766E] transition-colors cursor-pointer leading-tight"
                onClick={() => {
                  onSelectVenue(featuredVenue);
                  onNavigate('U03_ServiceDetails');
                }}
              >
                {featuredVenue.name}
              </h2>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {featuredVenue.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded flex items-center gap-1 border border-amber-200/60 text-[11px]">
                <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                {featuredVenue.rating}
              </span>
              <span>·</span>
              <span className="text-[11px]">{featuredVenue.reviewsCount} reviews</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-500 text-[11px]">
                <MapPin className="w-3 h-3" /> {featuredVenue.location}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div>
                <span className="text-[10px] text-slate-400 block">Offer Price</span>
                <span className="text-base font-extrabold text-[#0F766E]">
                  ${featuredVenue.basePrice} <span className="text-[11px] text-slate-500 font-normal">/ visit</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleFavorite(featuredVenue.id, featuredVenue.name)}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                  aria-label="Favorite"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(featuredVenue.id)
                        ? 'fill-red-500 text-red-500'
                        : ''
                    }`}
                  />
                </button>
                <button
                  onClick={() => {
                    onSelectVenue(featuredVenue);
                    onNavigate('U03_ServiceDetails');
                  }}
                  className="bg-[#0F766E] hover:bg-[#115E59] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors shadow-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* ================= Search Result Cards Grid ================= */}
      {filteredVenues.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl text-center space-y-3 border border-slate-200">
          <p className="text-slate-400 font-medium text-sm">No venues match your current filter choices.</p>
          <button
            onClick={clearAllFilters}
            className="text-xs font-bold text-[#0F766E] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVenues.map((venue) => {
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
                  <span className="absolute top-3 left-3 bg-[#0F766E]/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {venue.category}
                  </span>
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F59E0B]" />
                    {venue.distanceKm} km away
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
                  <div className="space-y-1">
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
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded flex-shrink-0 border border-amber-200/60">
                        <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                        {venue.rating}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 truncate">{venue.location} · {venue.reviewsCount} reviews</p>
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
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Base Price</span>
                      <span className="text-base font-extrabold text-[#0F766E]">
                        ${venue.basePrice} <span className="text-[10px] text-slate-500 font-normal">/ visit</span>
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
      )}

      {/* ================= Recommended Horizontal Scroll Row ================= */}
      <section className="space-y-3 pt-4">
        <h2 className="text-lg font-bold text-[#334155]">Recommended For You</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {venues.map((v) => (
            <div
              key={v.id}
              onClick={() => {
                onSelectVenue(v);
                onNavigate('U03_ServiceDetails');
              }}
              className="w-64 flex-shrink-0 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all p-3 cursor-pointer group"
            >
              <div className="h-32 rounded-xl overflow-hidden mb-2.5 bg-slate-100">
                <img
                  src={v.image || APP_IMAGES['golden_mandalay'].dataUri}
                  alt={v.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = APP_IMAGES['golden_mandalay'].dataUri;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[10px] font-bold text-[#0F766E] uppercase">{v.category}</span>
              <h3 className="font-bold text-sm text-[#334155] truncate group-hover:text-[#0F766E]">{v.name}</h3>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="font-bold text-[#334155]">{v.rating}</span> · {v.city}
              </p>
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F766E]">${v.basePrice} / visit</span>
                <span className="text-[10px] font-bold text-[#84CC16] hover:underline">Book →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
