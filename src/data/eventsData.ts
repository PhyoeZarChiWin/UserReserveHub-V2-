import eventWineTastingImg from '../assets/images/event_wine_tasting.jpg';
import eventLiveLoungeImg from '../assets/images/event_live_lounge.jpg';
import eventFamilyGatheringImg from '../assets/images/event_family_gathering.jpg';
import eventRooftopTerraceImg from '../assets/images/event_rooftop_terrace.jpg';

export interface RestaurantEvent {
  id: string;
  title: string;
  category: string;
  tagColor: string;
  date: string;
  time: string;
  venueName: string;
  venueId?: string;
  location: string;
  description: string;
  pricePerPerson: string;
  spotsLeft: number;
  image: string;
  badge: string;
}

export const UPCOMING_EVENTS: RestaurantEvent[] = [
  {
    id: 'evt-1',
    title: 'Wine Tasting & Artisan Pairing',
    category: 'Wine Tasting',
    tagColor: 'bg-purple-100 text-purple-800 border-purple-200',
    date: 'Fri, Aug 28, 2026',
    time: '7:00 PM – 9:30 PM',
    venueName: 'The Glass Pavilion Fine Dining',
    venueId: 'v1',
    location: 'Downtown Riverside, Yangon',
    description: 'Guided sommelier tasting of 6 reserve vintage wines paired with artisanal cheese boards in an intimate candlelit dining hall.',
    pricePerPerson: '$45 / person',
    spotsLeft: 8,
    image: eventWineTastingImg,
    badge: 'Popular'
  },
  {
    id: 'evt-2',
    title: 'Live Music Night & Cocktails',
    category: 'Live Music Night',
    tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    date: 'Sat, Aug 29, 2026',
    time: '8:00 PM – 11:00 PM',
    venueName: 'The Industrial Lounge & Bar',
    venueId: 'v3',
    location: 'Inya Lakefront, Yangon',
    description: 'Enjoy live acoustic soul & jazz under glowing architectural chandeliers with handcrafted cocktail specials and lounge seating.',
    pricePerPerson: 'Free with Reservation',
    spotsLeft: 12,
    image: eventLiveLoungeImg,
    badge: 'Live Performance'
  },
  {
    id: 'evt-3',
    title: 'Seasonal Menu Launch Gathering',
    category: 'Seasonal Menu Launch',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
    date: 'Wed, Sep 2, 2026',
    time: '6:30 PM – 10:00 PM',
    venueName: 'Street Bites & Family Eatery',
    venueId: 'v5',
    location: 'Bahan Golden Valley, Yangon',
    description: 'Be among the first to sample our hearty 4-course seasonal harvest menu, perfect for family dinners and festive get-togethers.',
    pricePerPerson: '$35 / person',
    spotsLeft: 6,
    image: eventFamilyGatheringImg,
    badge: 'Limited Seats'
  },
  {
    id: 'evt-4',
    title: 'Chef Special Event at Skyline Rooftop',
    category: 'Chef Special Event',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    date: 'Sat, Sep 5, 2026',
    time: '7:30 PM – 10:30 PM',
    venueName: 'Lakeview Terrace Rooftop',
    venueId: 'v2',
    location: 'Heritage Sky Tower, Mandalay',
    description: 'An exclusive open-air sunset culinary gala with master chefs serving signature grill delicacies on the panoramic garden rooftop.',
    pricePerPerson: '$75 / person',
    spotsLeft: 4,
    image: eventRooftopTerraceImg,
    badge: 'Exclusive'
  }
];
