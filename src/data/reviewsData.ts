export interface CustomerReview {
  id: string;
  customerName: string;
  customerRole?: string;
  avatar: string;
  rating: number;
  reviewText: string;
  restaurantName: string;
  venueId?: string;
  occasion: string;
  visitedDate: string;
  recommendedDish?: string;
  verifiedDiner: boolean;
}

export const FEATURED_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    customerName: 'Hsu Myat Noe',
    customerRole: 'Food Critic & Lifestyle Blogger',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'Booking our anniversary dinner at The Glass Pavilion was seamless! The table was ready upon arrival with a candlelit center setting. The truffle tenderloin was cooked to perfection.',
    restaurantName: 'The Glass Pavilion Fine Dining',
    venueId: 'glass-pavilion',
    occasion: 'Anniversary Dinner',
    visitedDate: '2 days ago',
    recommendedDish: 'Truffle Angus Tenderloin',
    verifiedDiner: true
  },
  {
    id: 'rev-2',
    customerName: 'Kyaw Zin Htet',
    customerRole: 'Senior Software Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'The instant booking confirmation saved our Friday team dinner! Golden Mandalay Kitchen welcomed our 8-person party with impeccable service and rich traditional curries.',
    restaurantName: 'Golden Mandalay Kitchen',
    venueId: 'golden-mandalay',
    occasion: 'Team Dinner (8 guests)',
    visitedDate: 'Yesterday',
    recommendedDish: 'Signature Mandalay Chicken Curry',
    verifiedDiner: true
  },
  {
    id: 'rev-3',
    customerName: 'Thiri May Oo',
    customerRole: 'Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'Lakeview Terrace Rooftop has the best sunset panorama in the city! Using ReserveHub, we secured front-row skyline balcony seats without any waiting in queue.',
    restaurantName: 'Lakeview Terrace Rooftop',
    venueId: 'lakeview-terrace',
    occasion: 'Sunset Cocktails & Tapas',
    visitedDate: '3 days ago',
    recommendedDish: 'Signature Wagyu Sliders',
    verifiedDiner: true
  },
  {
    id: 'rev-4',
    customerName: 'Aung Ko Ko',
    customerRole: 'Culinary Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'The 9-course omakase at Sakura Garden was pure culinary art. Booking the chef counter via ReserveHub was instantaneous and hassle-free.',
    restaurantName: 'Sakura Garden Omakase',
    venueId: 'sakura-garden',
    occasion: 'Chef Counter Omakase',
    visitedDate: '4 days ago',
    recommendedDish: 'Otoro Nigiri & Uni Flight',
    verifiedDiner: true
  },
  {
    id: 'rev-5',
    customerName: 'Su Sandar Lin',
    customerRole: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'Street Bites Cafe is our go-to family brunch spot. The reserved booth was spacious for the kids, and the pre-ordered waffle platter came hot and fresh!',
    restaurantName: 'Street Bites & Family Eatery',
    venueId: 'street-bites',
    occasion: 'Weekend Family Brunch',
    visitedDate: '5 days ago',
    recommendedDish: 'Golden Honey French Toast',
    verifiedDiner: true
  },
  {
    id: 'rev-6',
    customerName: 'Min Thant Zaw',
    customerRole: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'The aroma and authenticity at Spice Route are unmatched. Our business clients were thoroughly impressed with the butter chicken and garlic naan basket.',
    restaurantName: 'Spice Route Yangon',
    venueId: 'spice-route',
    occasion: 'Client Lunch Meeting',
    visitedDate: '1 week ago',
    recommendedDish: 'Mutton Biryani & Butter Naan',
    verifiedDiner: true
  }
];
