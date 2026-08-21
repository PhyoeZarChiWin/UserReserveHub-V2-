import { Venue, Booking } from '../types';
import { APP_IMAGES } from './imageRegistry';

export const INITIAL_VENUES: Venue[] = [
  {
    id: 'golden-mandalay',
    name: 'Golden Mandalay Kitchen',
    category: 'Restaurants',
    tag: 'Restaurants',
    rating: 4.9,
    reviewsCount: 1284,
    location: 'Yangon, Downtown',
    city: 'Yangon',
    address: '45 Merchant Road, Downtown, Yangon',
    distanceKm: 1.2,
    basePrice: 28,
    image: APP_IMAGES['golden_mandalay'].dataUri,
    gallery: [
      APP_IMAGES['golden_mandalay'].dataUri,
      APP_IMAGES['spice_route'].dataUri,
      APP_IMAGES['restaurant_card_1'].dataUri,
    ],
    description: 'A celebrated fine-dining restaurant serving authentic Burmese cuisine with a modern twist. Golden Mandalay Kitchen is known for its hand-crafted curries, seasonal tasting menus and warm, elegant interiors.',
    openingHours: '09:00 AM – 09:00 PM',
    isOpenNow: true,
    slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM', '07:30 PM', '08:00 PM'],
    packages: [
      {
        id: 'pkg-standard',
        name: 'Standard',
        price: 28,
        perText: 'per guest',
        includes: ['Base reservation', 'Standard seating', 'Included service']
      },
      {
        id: 'pkg-premium',
        name: 'Premium',
        price: 45,
        perText: 'per guest',
        includes: ['Priority seating', 'Dedicated host', 'Complimentary welcome drink']
      },
      {
        id: 'pkg-group',
        name: 'Group Package (8+)',
        price: 24,
        perText: 'per guest',
        includes: ['Group rate', 'Dedicated area', 'Custom setup']
      }
    ],
    amenities: [
      { name: 'WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'car' },
      { name: 'Air Conditioning', icon: 'snowflake' },
      { name: 'Catering', icon: 'utensils' },
      { name: 'Accessibility', icon: 'accessibility' },
      { name: 'Security', icon: 'shield' }
    ],
    reviews: [
      {
        id: 'r1',
        userName: 'Nandar Win',
        userAvatar: 'NW',
        avatarBgClass: 'bg-indigo-600',
        date: 'August 12, 2026',
        rating: 5,
        comment: 'Excellent service and a beautiful atmosphere. Booking through ReserveHub was effortless and the confirmation was instant.'
      },
      {
        id: 'r2',
        userName: 'Ye Yint',
        userAvatar: 'YY',
        avatarBgClass: 'bg-teal-700',
        date: 'July 28, 2026',
        rating: 4,
        comment: 'Great experience overall. The venue was exactly as described and the staff were very accommodating.'
      },
      {
        id: 'r3',
        userName: 'Su Myat Thu',
        userAvatar: 'SM',
        avatarBgClass: 'bg-amber-600',
        date: 'July 15, 2026',
        rating: 4,
        comment: 'Really impressed with the space and amenities. Would definitely book again next time.'
      },
      {
        id: 'r4',
        userName: 'Thiri Aung',
        userAvatar: 'TA',
        avatarBgClass: 'bg-rose-700',
        date: 'June 30, 2026',
        rating: 5,
        comment: 'Perfect for our group event. Clean, spacious, and great value for the price.'
      }
    ]
  },
  {
    id: 'sakura-garden',
    name: 'Sakura Garden Lounge',
    category: 'Event Venues',
    tag: 'Events',
    rating: 4.8,
    reviewsCount: 962,
    location: 'Mandalay, City Center',
    city: 'Mandalay',
    address: '88 26th Street, City Center, Mandalay',
    distanceKm: 2.4,
    basePrice: 42,
    image: APP_IMAGES['sakura_garden'].dataUri,
    gallery: [
      APP_IMAGES['sakura_garden'].dataUri,
      APP_IMAGES['glass_pavilion'].dataUri,
      APP_IMAGES['lakeview_terrace'].dataUri
    ],
    description: 'An open-air garden lounge surrounded by cherry blossom flora and ambient lighting. Ideal for private celebrations, corporate receptions, and evening gatherings.',
    openingHours: '04:00 PM – 11:00 PM',
    isOpenNow: true,
    slots: ['06:30 PM', '07:00 PM', '08:00 PM', '09:00 PM'],
    packages: [
      {
        id: 'pkg-standard',
        name: 'Standard Lounge',
        price: 42,
        perText: 'per guest',
        includes: ['Garden seating', 'Welcome mocktail', 'Live acoustic music']
      },
      {
        id: 'pkg-vip',
        name: 'VIP Pavilion',
        price: 65,
        perText: 'per guest',
        includes: ['Private cabana', 'Chef’s platter', 'Dedicated waiter']
      }
    ],
    amenities: [
      { name: 'WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'car' },
      { name: 'Outdoor Seating', icon: 'sun' },
      { name: 'Live Music', icon: 'music' }
    ],
    reviews: [
      {
        id: 'r201',
        userName: 'Khin Than',
        userAvatar: 'KT',
        avatarBgClass: 'bg-pink-600',
        date: 'August 01, 2026',
        rating: 5,
        comment: 'Breathtaking venue at night! The cherry blossoms and ambient lights created the most memorable anniversary.'
      }
    ]
  },
  {
    id: 'spice-route',
    name: 'Spice Route Bistro',
    category: 'Restaurants',
    tag: 'Restaurants',
    rating: 4.7,
    reviewsCount: 713,
    location: 'Yangon, Bahan',
    city: 'Yangon',
    address: '12 University Avenue, Bahan, Yangon',
    distanceKm: 3.1,
    basePrice: 18,
    image: APP_IMAGES['spice_route'].dataUri,
    gallery: [
      APP_IMAGES['spice_route'].dataUri,
      APP_IMAGES['golden_mandalay'].dataUri
    ],
    description: 'A cozy fusion bistro showcasing pan-Asian spice routes, artisanal teas, and craft comfort dishes.',
    openingHours: '11:00 AM – 10:00 PM',
    isOpenNow: true,
    slots: ['12:00 PM', '01:00 PM', '02:00 PM', '06:00 PM', '07:30 PM'],
    packages: [
      {
        id: 'pkg-lunch',
        name: 'Standard Lunch',
        price: 18,
        perText: 'per guest',
        includes: ['2-course meal', 'Herbal tea selection']
      }
    ],
    amenities: [
      { name: 'WiFi', icon: 'wifi' },
      { name: 'Air Conditioning', icon: 'snowflake' }
    ],
    reviews: []
  },
  {
    id: 'street-bites',
    name: 'Street Bites Café',
    category: 'Restaurants',
    tag: 'Cafes',
    rating: 4.6,
    reviewsCount: 541,
    location: 'Nay Pyi Taw, Thapyaygone',
    city: 'Nay Pyi Taw',
    address: '34 Market Street, Thapyaygone, Nay Pyi Taw',
    distanceKm: 5.5,
    basePrice: 12,
    image: APP_IMAGES['street_bites_cafe'].dataUri,
    gallery: [APP_IMAGES['street_bites_cafe'].dataUri],
    description: 'Vibrant café with artisanal coffees, freshly baked pastries, and casual fusion street food bites.',
    openingHours: '08:00 AM – 09:00 PM',
    isOpenNow: true,
    slots: ['05:30 PM', '06:00 PM', '06:30 PM'],
    packages: [
      {
        id: 'pkg-cafe',
        name: 'Café Pass',
        price: 12,
        perText: 'per guest',
        includes: ['Specialty drink', 'Pastry choice']
      }
    ],
    amenities: [{ name: 'WiFi', icon: 'wifi' }],
    reviews: []
  },
  {
    id: 'riverside-grill',
    name: 'Riverside Terrace Grill',
    category: 'Restaurants',
    tag: 'Restaurants',
    rating: 4.8,
    reviewsCount: 1105,
    location: 'Yangon, Kandawgyi',
    city: 'Yangon',
    address: '10 Natmauk Road, Kandawgyi, Yangon',
    distanceKm: 2.8,
    basePrice: 28,
    image: APP_IMAGES['restaurant_card_1'].dataUri,
    gallery: [APP_IMAGES['restaurant_card_1'].dataUri],
    description: 'Scenic lakeside dining featuring flame-grilled seafood and prime cuts with views of Kandawgyi Lake.',
    openingHours: '05:00 PM – 11:00 PM',
    isOpenNow: true,
    slots: ['07:00 PM', '07:30 PM', '08:30 PM'],
    packages: [
      { id: 'pkg-grill', name: 'Terrace Grill', price: 28, perText: 'per guest', includes: ['Lakeside view', 'Grill platter'] }
    ],
    amenities: [{ name: 'Lake View', icon: 'eye' }],
    reviews: []
  },
  {
    id: 'lakeside-pavilion',
    name: 'Lakeside Pavilion',
    category: 'Event Venues',
    tag: 'Event Venues',
    rating: 4.7,
    reviewsCount: 689,
    location: 'Inle Lake',
    city: 'Inle Lake',
    address: 'Mine Thauk, Inle Lake',
    distanceKm: 8.2,
    basePrice: 35,
    image: APP_IMAGES['lakeview_terrace'].dataUri,
    gallery: [APP_IMAGES['lakeview_terrace'].dataUri],
    description: 'A wooden over-water pavilion overlooking the tranquil waters of Inle Lake, perfect for sunset events.',
    openingHours: '08:00 AM – 08:00 PM',
    isOpenNow: true,
    slots: ['09:00 AM', '10:00 AM', '11:00 AM', '04:00 PM'],
    packages: [
      { id: 'pkg-pavilion', name: 'Standard Reservation', price: 35, perText: 'per guest', includes: ['Waterfront seating', 'Local tea tasting'] }
    ],
    amenities: [{ name: 'Boat Pier', icon: 'anchor' }],
    reviews: []
  },
  {
    id: 'glass-pavilion',
    name: 'Glass Pavilion Hall',
    category: 'Event Venues',
    tag: 'Event Venues',
    rating: 4.8,
    reviewsCount: 445,
    location: 'Yangon, Kandawgyi',
    city: 'Yangon',
    address: '15 Kan Yeik Tha Road, Kandawgyi, Yangon',
    distanceKm: 1.8,
    basePrice: 58,
    image: APP_IMAGES['glass_pavilion'].dataUri,
    gallery: [APP_IMAGES['glass_pavilion'].dataUri],
    description: 'Architectural glass venue surrounded by botanical gardens. Equipped with state-of-the-art light and sound systems.',
    openingHours: '09:00 AM – 10:00 PM',
    isOpenNow: true,
    slots: ['04:00 PM', '05:00 PM', '06:00 PM'],
    packages: [
      { id: 'pkg-glass', name: 'Grand Hall', price: 58, perText: 'per guest', includes: ['Full hall access', 'Stage & lighting setup'] }
    ],
    amenities: [{ name: 'AV Equipment', icon: 'tv' }],
    reviews: []
  },
  {
    id: 'harborview-boardroom',
    name: 'Harborview Boardroom',
    category: 'Meeting Rooms',
    tag: 'Meeting Rooms',
    rating: 4.5,
    reviewsCount: 312,
    location: 'Yangon, Downtown',
    city: 'Yangon',
    address: '88 Strand Road, Downtown, Yangon',
    distanceKm: 0.9,
    basePrice: 25,
    image: APP_IMAGES['glass_pavilion'].dataUri,
    gallery: [
      APP_IMAGES['glass_pavilion'].dataUri,
      APP_IMAGES['lakeview_terrace'].dataUri
    ],
    description: 'Executive 16-person boardroom featuring high-speed optical fiber WiFi, 4K display, and panoramic river views.',
    openingHours: '08:00 AM – 08:00 PM',
    isOpenNow: true,
    slots: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM'],
    packages: [
      { id: 'pkg-boardroom', name: 'Hourly Executive', price: 25, perText: 'per hour', includes: ['4K Screen', 'Coffee/Tea station', 'High speed WiFi'] }
    ],
    amenities: [{ name: 'High Speed WiFi', icon: 'wifi' }, { name: 'Smart Display', icon: 'monitor' }],
    reviews: []
  },
  {
    id: 'meridian-suite',
    name: 'Meridian Conference Suite',
    category: 'Meeting Rooms',
    tag: 'Meeting Rooms',
    rating: 4.6,
    reviewsCount: 268,
    location: 'Mandalay, City Center',
    city: 'Mandalay',
    address: '73 78th Street, Mandalay',
    distanceKm: 3.8,
    basePrice: 32,
    image: APP_IMAGES['event_rooftop_terrace'].dataUri,
    gallery: [
      APP_IMAGES['event_rooftop_terrace'].dataUri,
      APP_IMAGES['glass_pavilion'].dataUri
    ],
    description: 'Modern conference suite for up to 40 attendees, equipped with video conferencing setups and modular seating.',
    openingHours: '08:00 AM – 07:00 PM',
    isOpenNow: true,
    slots: ['10:00 AM', '01:00 PM', '03:00 PM'],
    packages: [
      { id: 'pkg-suite', name: 'Conference Suite', price: 32, perText: 'per hour', includes: ['Modular desks', 'Video conf rig', 'Catering option'] }
    ],
    amenities: [{ name: 'Video Conf', icon: 'video' }],
    reviews: []
  },
  {
    id: 'orchid-spa',
    name: 'Orchid Wellness Spa',
    category: 'Beauty & Wellness',
    tag: 'Beauty & Wellness',
    rating: 4.9,
    reviewsCount: 1587,
    location: 'Yangon, Bahan',
    city: 'Yangon',
    address: '52 Kabar Aye Pagoda Road, Bahan, Yangon',
    distanceKm: 2.0,
    basePrice: 45,
    image: APP_IMAGES['event_wine_tasting'].dataUri,
    gallery: [
      APP_IMAGES['event_wine_tasting'].dataUri,
      APP_IMAGES['lakeview_terrace'].dataUri
    ],
    description: 'Luxury aromatherapy and traditional wellness spa with private treatment suites and herbal steam baths.',
    openingHours: '10:00 AM – 09:00 PM',
    isOpenNow: true,
    slots: ['10:00 AM', '12:00 PM', '03:00 PM', '06:00 PM'],
    packages: [
      { id: 'pkg-spa', name: 'Aromatherapy Session', price: 45, perText: 'per visit', includes: ['60-min massage', 'Herbal steam', 'Organic tea'] }
    ],
    amenities: [{ name: 'Private Suites', icon: 'lock' }, { name: 'Sauna', icon: 'flame' }],
    reviews: []
  },
  {
    id: 'radiant-beauty',
    name: 'Radiant Beauty Lounge',
    category: 'Beauty & Wellness',
    tag: 'Beauty & Wellness',
    rating: 4.4,
    reviewsCount: 233,
    location: 'Mandalay, Amarapura',
    city: 'Mandalay',
    address: '14 Palace View, Amarapura, Mandalay',
    distanceKm: 4.2,
    basePrice: 22,
    image: APP_IMAGES['event_live_lounge'].dataUri,
    gallery: [
      APP_IMAGES['event_live_lounge'].dataUri,
      APP_IMAGES['street_bites_cafe'].dataUri
    ],
    description: 'Premium hair styling, facial care, and manicures using natural botanical products.',
    openingHours: '10:00 AM – 08:00 PM',
    isOpenNow: true,
    slots: ['11:00 AM', '02:00 PM', '05:00 PM'],
    packages: [
      { id: 'pkg-beauty', name: 'Glow Package', price: 22, perText: 'per visit', includes: ['Facial mask', 'Scalp massage'] }
    ],
    amenities: [{ name: 'AC', icon: 'snowflake' }],
    reviews: []
  },
  {
    id: 'vitamed-clinic',
    name: 'VitaMed Clinic',
    category: 'Healthcare',
    tag: 'Healthcare',
    rating: 4.8,
    reviewsCount: 402,
    location: 'Yangon, Downtown',
    city: 'Yangon',
    address: '102 Pyay Road, Downtown, Yangon',
    distanceKm: 1.5,
    basePrice: 38,
    image: APP_IMAGES['street_bites_cafe'].dataUri,
    gallery: [
      APP_IMAGES['street_bites_cafe'].dataUri,
      APP_IMAGES['glass_pavilion'].dataUri
    ],
    description: 'Modern outpatient medical center offering general wellness checkups, specialist consultations, and diagnostic testing.',
    openingHours: '08:00 AM – 06:00 PM',
    isOpenNow: true,
    slots: ['09:00 AM', '11:00 AM', '02:00 PM'],
    packages: [
      { id: 'pkg-med', name: 'General Consultation', price: 38, perText: 'per visit', includes: ['Doctor consultation', 'Vital check'] }
    ],
    amenities: [{ name: 'Lab Services', icon: 'activity' }],
    reviews: []
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    refNumber: 'RH-4K9J2M-7184',
    venueId: 'golden-mandalay',
    venueName: 'Golden Mandalay Kitchen',
    venueImage: APP_IMAGES['golden_mandalay'].dataUri,
    location: '45 Merchant Road, Downtown, Yangon',
    date: 'Sat, Aug 08, 2026',
    time: '07:00 PM',
    guests: 2,
    packageName: 'Premium',
    packagePrice: 45,
    totalPaid: 90,
    userName: 'Phyo Win',
    userEmail: 'phyo.win@example.com',
    userPhone: '+959 123 456 789',
    status: 'Confirmed',
    createdAt: '2026-08-04'
  },
  {
    id: 'b2',
    refNumber: 'RH-8T2X5A-3321',
    venueId: 'glass-pavilion',
    venueName: 'Glass Pavilion Hall',
    venueImage: APP_IMAGES['glass_pavilion'].dataUri,
    location: '15 Kan Yeik Tha Road, Kandawgyi, Yangon',
    date: 'Wed, Aug 19, 2026',
    time: '10:00 AM',
    guests: 8,
    packageName: 'Group Package (8+)',
    packagePrice: 24,
    totalPaid: 192,
    userName: 'Phyo Win',
    userEmail: 'phyo.win@example.com',
    userPhone: '+959 123 456 789',
    status: 'Pending',
    createdAt: '2026-08-03'
  },
  {
    id: 'b3',
    refNumber: 'RH-1H7D3F-5521',
    venueId: 'sakura-garden',
    venueName: 'Sakura Garden Lounge',
    venueImage: APP_IMAGES['sakura_garden'].dataUri,
    location: '88 26th Street, City Center, Mandalay',
    date: 'Fri, Aug 28, 2026',
    time: '05:00 PM',
    guests: 4,
    packageName: 'Standard',
    packagePrice: 42,
    totalPaid: 168,
    userName: 'Phyo Win',
    userEmail: 'phyo.win@example.com',
    userPhone: '+959 123 456 789',
    status: 'Confirmed',
    createdAt: '2026-08-01'
  },
  {
    id: 'b4',
    refNumber: 'RH-3F6G8B-9914',
    venueId: 'spice-route',
    venueName: 'Spice Route Bistro',
    venueImage: APP_IMAGES['spice_route'].dataUri,
    location: '12 University Avenue, Bahan, Yangon',
    date: 'Sun, Jul 26, 2026',
    time: '01:00 PM',
    guests: 2,
    packageName: 'Standard Lunch',
    packagePrice: 28,
    totalPaid: 56,
    userName: 'Phyo Win',
    userEmail: 'phyo.win@example.com',
    userPhone: '+959 123 456 789',
    status: 'Completed',
    createdAt: '2026-07-20'
  },
  {
    id: 'b5',
    refNumber: 'RH-7K2L4M-8080',
    venueId: 'street-bites',
    venueName: 'Street Bites Café',
    venueImage: APP_IMAGES['street_bites_cafe'].dataUri,
    location: '34 Market Street, Thapyaygone, Nay Pyi Taw',
    date: 'Sat, Jul 11, 2026',
    time: '09:00 AM',
    guests: 1,
    packageName: 'Café Pass',
    packagePrice: 12,
    totalPaid: 12,
    userName: 'Phyo Win',
    userEmail: 'phyo.win@example.com',
    userPhone: '+959 123 456 789',
    status: 'Completed',
    createdAt: '2026-07-09'
  },
  {
    id: 'b6',
    refNumber: 'RH-9R5P6Q-2210',
    venueId: 'lakeside-pavilion',
    venueName: 'Lakeside Pavilion',
    venueImage: APP_IMAGES['lakeview_terrace'].dataUri,
    location: 'Mine Thauk, Inle Lake',
    date: 'Fri, Jun 19, 2026',
    time: '03:00 PM',
    guests: 6,
    packageName: 'Standard Reservation',
    packagePrice: 35,
    totalPaid: 210,
    userName: 'Phyo Win',
    userEmail: 'phyo.win@example.com',
    userPhone: '+959 123 456 789',
    status: 'Cancelled',
    createdAt: '2026-06-15'
  }
];
