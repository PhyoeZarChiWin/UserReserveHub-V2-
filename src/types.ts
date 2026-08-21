export interface PackageOption {
  id: string;
  name: string;
  price: number;
  perText: string;
  includes: string[];
}

export interface ReviewItem {
  id: string;
  userName: string;
  userAvatar: string;
  avatarBgClass: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Venue {
  id: string;
  name: string;
  category: 'Restaurants' | 'Hotels' | 'Event Venues' | 'Meeting Rooms' | 'Healthcare' | 'Beauty & Wellness' | 'Cafes';
  tag: string;
  rating: number;
  reviewsCount: number;
  location: string;
  city: string;
  address: string;
  distanceKm: number;
  basePrice: number;
  image: string;
  gallery: string[];
  description: string;
  openingHours: string;
  isOpenNow: boolean;
  slots: string[];
  packages: PackageOption[];
  amenities: { name: string; icon: string }[];
  reviews: ReviewItem[];
  coordinates?: { lat: number; lng: number };
}

export interface Booking {
  id: string;
  refNumber: string;
  venueId: string;
  venueName: string;
  venueImage: string;
  location: string;
  date: string;
  time: string;
  guests: number;
  packageName: string;
  packagePrice: number;
  totalPaid: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled' | 'Completed';
  createdAt: string;
}

export type ViewScreen = 
  | 'U01_TopPage'
  | 'U02_SearchResults'
  | 'U03_ServiceDetails'
  | 'U04_ReservationForm'
  | 'U05_Confirmation'
  | 'U06_MyBookings'
  | 'U07_Profile'
  | 'README_Guide';

export interface SearchFilters {
  keyword: string;
  location: string;
  date: string;
  guests: number;
  category: string;
  rating: string;
  price: string;
  availability: string;
  distance: string;
}
