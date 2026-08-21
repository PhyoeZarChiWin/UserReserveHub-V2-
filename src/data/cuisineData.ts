import { APP_IMAGES } from './imageRegistry';

export interface CuisineItem {
  id: string;
  name: string;
  searchTerm: string;
  image: string;
  alt: string;
}

export const CUISINES: CuisineItem[] = [
  {
    id: 'shabu-shabu',
    name: 'Shabu Shabu & Hotpot',
    searchTerm: 'Shabu shabu',
    image: APP_IMAGES['spice_route'].dataUri,
    alt: 'Japanese Shabu Shabu broth pot with wagyu beef slices and vegetables'
  },
  {
    id: 'sushi-sashimi',
    name: 'Sushi & Sashimi',
    searchTerm: 'Sushi',
    image: APP_IMAGES['sakura_garden'].dataUri,
    alt: 'Master chef nigiri sushi and fresh salmon sashimi platter'
  },
  {
    id: 'yakiniku',
    name: 'Yakiniku & Wagyu',
    searchTerm: 'Yakiniku',
    image: APP_IMAGES['menu_item_2'].dataUri,
    alt: 'Premium marbled wagyu beef grilling over charcoal yakiniku'
  },
  {
    id: 'italian-pasta',
    name: 'Italian & Pasta',
    searchTerm: 'Italian',
    image: APP_IMAGES['street_bites_cafe'].dataUri,
    alt: 'Artisanal hand-rolled pasta with fresh basil and parmesan'
  },
  {
    id: 'ramen',
    name: 'Ramen & Noodles',
    searchTerm: 'Ramen',
    image: APP_IMAGES['sakura_garden'].dataUri,
    alt: 'Authentic tonkotsu ramen bowl with chashu pork and seasoned soft egg'
  },
  {
    id: 'dim-sum',
    name: 'Dim Sum & Cantonese',
    searchTerm: 'Dim Sum',
    image: APP_IMAGES['golden_mandalay'].dataUri,
    alt: 'Steaming bamboo baskets with handcrafted dumplings and dim sum'
  },
  {
    id: 'steakhouse',
    name: 'Steakhouse & Grill',
    searchTerm: 'Steak',
    image: APP_IMAGES['menu_item_2'].dataUri,
    alt: 'Prime seared tomahawk steak with charred herbs and garlic butter'
  },
  {
    id: 'tempura',
    name: 'Crispy Tempura',
    searchTerm: 'Tempura',
    image: APP_IMAGES['sakura_garden'].dataUri,
    alt: 'Golden crispy prawn and vegetable tempura with tentsuyu dip'
  },
  {
    id: 'korean-bbq',
    name: 'Korean BBQ & Grill',
    searchTerm: 'Korean',
    image: APP_IMAGES['menu_item_2'].dataUri,
    alt: 'Korean BBQ table feast with samgyeopsal and banchan dishes'
  },
  {
    id: 'french-bistro',
    name: 'French Bistro',
    searchTerm: 'French',
    image: APP_IMAGES['pic1'].dataUri,
    alt: 'Classic French gourmet gastronomy and fine dining wine pairing'
  },
  {
    id: 'thai-cuisine',
    name: 'Thai & Southeast',
    searchTerm: 'Thai',
    image: APP_IMAGES['spice_route'].dataUri,
    alt: 'Aromatic Thai red curry and pad thai noodles with fresh lime'
  },
  {
    id: 'burmese-cuisine',
    name: 'Burmese Heritage',
    searchTerm: 'Burmese',
    image: APP_IMAGES['golden_mandalay'].dataUri,
    alt: 'Royal Burmese tea leaf salad laphet thoke and aromatic curry'
  },
  {
    id: 'yakitori',
    name: 'Yakitori & Skewers',
    searchTerm: 'Yakitori',
    image: APP_IMAGES['spice_route'].dataUri,
    alt: 'Charcoal-grilled glazed yakitori chicken skewers with tare sauce'
  },
  {
    id: 'seafood-raw-bar',
    name: 'Seafood & Raw Bar',
    searchTerm: 'Seafood',
    image: APP_IMAGES['menu_item_1'].dataUri,
    alt: 'Fresh oysters, king crab legs and ocean seafood on crushed ice'
  },
  {
    id: 'soba',
    name: 'Artisan Soba & Udon',
    searchTerm: 'Soba',
    image: APP_IMAGES['sakura_garden'].dataUri,
    alt: 'Chilled artisan buckwheat zaru soba with dipping sauce'
  },
  {
    id: 'spanish-tapas',
    name: 'Spanish Tapas & Wine',
    searchTerm: 'Tapas',
    image: APP_IMAGES['event_wine_tasting'].dataUri,
    alt: 'Authentic Spanish gambas al ajillo, jamon and pintxos tapas'
  },
  {
    id: 'japanese-curry',
    name: 'Gourmet Curry',
    searchTerm: 'Curry',
    image: APP_IMAGES['golden_mandalay'].dataUri,
    alt: 'Rich golden Japanese katsu curry with steamed jasmine rice'
  },
  {
    id: 'desserts-bakery',
    name: 'Desserts & Cafe',
    searchTerm: 'Dessert',
    image: APP_IMAGES['event_rooftop_terrace'].dataUri,
    alt: 'Artisanal French pastries, matcha lava cake and specialty coffee'
  }
];
