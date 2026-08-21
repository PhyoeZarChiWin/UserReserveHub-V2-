/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INITIAL_VENUES, INITIAL_BOOKINGS } from './data/venues';
import { Venue, Booking, ViewScreen } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { Toast, NotificationsModal } from './components/Toast';

import { TopPage } from './views/TopPage';
import { SearchResults } from './views/SearchResults';
import { ServiceDetails } from './views/ServiceDetails';
import { ReservationForm } from './views/ReservationForm';
import { ReservationConfirmation } from './views/ReservationConfirmation';
import { MyBookings } from './views/MyBookings';
import { ProfilePage } from './views/ProfilePage';
import { PrototypeGuide } from './views/PrototypeGuide';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewScreen>('U01_TopPage');
  const [venues, setVenues] = useState<Venue[]>(INITIAL_VENUES);
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [favorites, setFavorites] = useState<string[]>(['golden-mandalay', 'sakura-garden']);
  
  const [selectedVenue, setSelectedVenue] = useState<Venue>(INITIAL_VENUES[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Booking draft state
  const [bookingDraft, setBookingDraft] = useState({
    venue: INITIAL_VENUES[0],
    date: '2026-08-08',
    time: '07:00 PM',
    guests: 2,
    packageId: 'pkg-standard',
  });

  const [latestBooking, setLatestBooking] = useState<Booking | null>(INITIAL_BOOKINGS[0]);

  // Modals & Notifications
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleFavorite = (venueId: string, venueName: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(venueId);
      if (exists) {
        showToast(`Removed "${venueName}" from favorites`);
        return prev.filter((id) => id !== venueId);
      } else {
        showToast(`Saved "${venueName}" to favorites!`);
        return [...prev, venueId];
      }
    });
  };

  const handleCompleteBooking = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
    setLatestBooking(newBooking);
    showToast(`Reservation ${newBooking.refNumber} confirmed!`);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: 'Cancelled' as const } : b))
    );
  };

  const showBackBtn =
    currentView === 'U03_ServiceDetails' ||
    currentView === 'U04_ReservationForm' ||
    currentView === 'U05_Confirmation' ||
    currentView === 'README_Guide';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#334155] font-sans flex flex-col selection:bg-[#0F766E]/20 selection:text-[#0F766E]">
      {/* Top Application Header */}
      <Header
        currentView={currentView}
        onNavigate={setCurrentView}
        unreadNotificationsCount={3}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        showBackBtn={showBackBtn}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentView === 'U01_TopPage' && (
          <TopPage
            venues={venues}
            bookings={bookings}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectVenue={setSelectedVenue}
            onNavigate={setCurrentView}
            onFilterCategory={setSelectedCategory}
          />
        )}

        {currentView === 'U02_SearchResults' && (
          <SearchResults
            venues={venues}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectVenue={setSelectedVenue}
            onNavigate={setCurrentView}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {currentView === 'U03_ServiceDetails' && (
          <ServiceDetails
            venue={selectedVenue}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onNavigate={setCurrentView}
            onStartBooking={(draft) => setBookingDraft(draft)}
            onShowToast={showToast}
          />
        )}

        {currentView === 'U04_ReservationForm' && (
          <ReservationForm
            draft={bookingDraft}
            onCompleteBooking={handleCompleteBooking}
            onNavigate={setCurrentView}
            onShowToast={showToast}
          />
        )}

        {currentView === 'U05_Confirmation' && (
          <ReservationConfirmation
            booking={latestBooking}
            onNavigate={setCurrentView}
          />
        )}

        {currentView === 'U06_MyBookings' && (
          <MyBookings
            bookings={bookings}
            venues={venues}
            favoritesCount={favorites.length}
            onNavigate={setCurrentView}
            onSelectVenue={setSelectedVenue}
            onCancelBooking={handleCancelBooking}
            onShowToast={showToast}
          />
        )}

        {currentView === 'U07_Profile' && (
          <ProfilePage
            favorites={favorites}
            venues={venues}
            onNavigate={setCurrentView}
            onSelectVenue={setSelectedVenue}
            onShowToast={showToast}
          />
        )}

        {currentView === 'README_Guide' && (
          <PrototypeGuide onNavigate={setCurrentView} />
        )}
      </main>

      {/* Global Application Footer */}
      <Footer 
        onNavigate={setCurrentView}
        onShowToast={showToast}
      />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        currentView={currentView}
        onNavigate={setCurrentView}
        favoritesCount={favorites.length}
      />

      {/* Toast Notification Alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Notifications Drawer Modal */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </div>
  );
}
