// Import photographic assets directly for guaranteed bundling across dev, preview, and iframe environments
import pic1Img from '../assets/images/pic1.jpg';
import glassPavilionImg from '../assets/images/glass_pavilion.jpg';
import goldenMandalayImg from '../assets/images/golden_mandalay.jpg';
import lakeviewTerraceImg from '../assets/images/lakeview_terrace.jpg';
import menuItem1Img from '../assets/images/menu_item_1.jpg';
import menuItem2Img from '../assets/images/menu_item_2.jpg';
import sakuraGardenImg from '../assets/images/sakura_garden.jpg';
import spiceRouteImg from '../assets/images/spice_route.jpg';
import streetBitesCafeImg from '../assets/images/street_bites_cafe.jpg';
import eventWineTastingImg from '../assets/images/event_wine_tasting.jpg';
import eventLiveLoungeImg from '../assets/images/event_live_lounge.jpg';
import eventFamilyGatheringImg from '../assets/images/event_family_gathering.jpg';
import eventRooftopTerraceImg from '../assets/images/event_rooftop_terrace.jpg';

export interface AppImageItem {
  id: string;
  name: string;
  category: string;
  filename: string;
  description: string;
  dataUri: string;
  webUrl: string;
  tags: string[];
}

const rawImages: Record<string, AppImageItem> = {
  pic1: {
    id: 'pic1',
    name: 'Chef Marcus Dubois Gastronomy Experience',
    category: 'Master Chef & Fine Dining',
    filename: 'pic1.jpg',
    description: 'Executive Chef Marcus Dubois meticulously garnishing an exquisite culinary creation in the open kitchen with silver precision tweezers',
    dataUri: pic1Img,
    webUrl: pic1Img,
    tags: ['Executive Chef', 'Open Kitchen', 'Gourmet Plating', 'Fine Dining']
  },
  glass_pavilion: {
    id: 'glass_pavilion',
    name: 'Glass Pavilion Skyline Dining',
    category: 'Rooftop & Views',
    filename: 'glass_pavilion.jpg',
    description: 'Panoramic floor-to-ceiling glass conservatory overlooking glowing neon city skyscrapers and illuminated architectural towers at night',
    dataUri: glassPavilionImg,
    webUrl: glassPavilionImg,
    tags: ['Skyline View', 'Floor-to-Ceiling Glass', 'City Lights', 'Romantic Night']
  },
  golden_mandalay: {
    id: 'golden_mandalay',
    name: 'Golden Mandalay Kitchen',
    category: 'Restaurants',
    filename: 'golden_mandalay.jpg',
    description: 'Grand royal Burmese teak dining hall with intricately hand-carved arches, glowing brass lantern chandeliers, and authentic banquet settings',
    dataUri: goldenMandalayImg,
    webUrl: goldenMandalayImg,
    tags: ['Burmese Royalty', 'Teak Wood', 'Carved Pillars', 'Golden Lanterns']
  },
  lakeview_terrace: {
    id: 'lakeview_terrace',
    name: 'Lakeside Terrace & Romantic Pavilion',
    category: 'Outdoor & Scenic',
    filename: 'lakeview_terrace.jpg',
    description: 'Breathtaking open-air balcony terrace overlooking a tranquil lake at sunset with bistro string lights, wine service, and fresh floral bouquets',
    dataUri: lakeviewTerraceImg,
    webUrl: lakeviewTerraceImg,
    tags: ['Sunset Lake', 'Open Balcony', 'Candlelit', 'Romantic Dinner']
  },
  menu_item_1: {
    id: 'menu_item_1',
    name: 'Grilled Herb Butter Lobster Platter',
    category: 'Signature Menu',
    filename: 'menu_item_1.jpg',
    description: 'Flame-grilled succulent lobster tail served with clarified lemon garlic herb butter, charred citrus, fresh arugula watercress, and sea salt',
    dataUri: menuItem1Img,
    webUrl: menuItem1Img,
    tags: ['Grilled Lobster', 'Herb Butter', 'Charred Lemon', 'Seafood Special']
  },
  menu_item_2: {
    id: 'menu_item_2',
    name: 'Prime Dry-Aged Sliced Ribeye Steak',
    category: 'Signature Menu',
    filename: 'menu_item_2.jpg',
    description: 'Thick-cut prime ribeye seared medium-rare, sliced on a rustic walnut carving board with fresh rosemary sprigs and flaky sea salt crystals',
    dataUri: menuItem2Img,
    webUrl: menuItem2Img,
    tags: ['Prime Ribeye', 'Medium Rare', 'Rosemary', 'Artisan Carving Board']
  },
  sakura_garden: {
    id: 'sakura_garden',
    name: 'Sakura Garden Omakase Sushi Counter',
    category: 'Japanese Fine Dining',
    filename: 'sakura_garden.jpg',
    description: 'Authentic blonde hinoki wood sushi bar with master chefs slicing premium bluefin maguro, salmon sashimi, uni, and handcrafted nigiri',
    dataUri: sakuraGardenImg,
    webUrl: sakuraGardenImg,
    tags: ['Omakase Sushi', 'Sashimi Master', 'Hinoki Counter', 'Japanese Dining']
  },
  spice_route: {
    id: 'spice_route',
    name: 'Spice Route Bistro & Lantern Palace',
    category: 'Restaurants',
    filename: 'spice_route.jpg',
    description: 'Atmospheric oriental palace dining room featuring multi-tier brass filigree lanterns, Moorish keyhole arches, Persian carpets, and candlelit tables',
    dataUri: spiceRouteImg,
    webUrl: spiceRouteImg,
    tags: ['Moroccan Arches', 'Brass Lanterns', 'Persian Carpets', 'Aromatic Spices']
  },
  street_bites_cafe: {
    id: 'street_bites_cafe',
    name: 'Street Bites Café & Daily Grind',
    category: 'Cafes & Casual Dining',
    filename: 'street_bites_cafe.jpg',
    description: 'Charming urban coffee sanctuary with cascading hanging green pothos plants, exposed brick walls, warm Edison lights, and artisanal espresso bar',
    dataUri: streetBitesCafeImg,
    webUrl: streetBitesCafeImg,
    tags: ['Hanging Plants', 'Exposed Brick', 'Edison Bulbs', 'Artisanal Coffee']
  },
  event_wine_tasting: {
    id: 'event_wine_tasting',
    name: 'Sommelier Wine Tasting & Tapas',
    category: 'Events & Experiences',
    filename: 'event_wine_tasting.jpg',
    description: 'Exclusive sommelier-guided reserve vintage wine pairing with artisan charcuterie boards',
    dataUri: eventWineTastingImg,
    webUrl: eventWineTastingImg,
    tags: ['Wine Tasting', 'Sommelier', 'Pairing']
  },
  event_live_lounge: {
    id: 'event_live_lounge',
    name: 'Acoustic Jazz & Cocktail Lounge',
    category: 'Events & Experiences',
    filename: 'event_live_lounge.jpg',
    description: 'Intimate evening jazz performances, signature mixology craft cocktails, and ambient lounge seating',
    dataUri: eventLiveLoungeImg,
    webUrl: eventLiveLoungeImg,
    tags: ['Live Jazz', 'Cocktails', 'Nightlife']
  },
  event_family_gathering: {
    id: 'event_family_gathering',
    name: 'Private Dining & Celebrations',
    category: 'Events & Experiences',
    filename: 'event_family_gathering.jpg',
    description: 'Spacious banquet salons and private rooms for family milestones and celebration gatherings',
    dataUri: eventFamilyGatheringImg,
    webUrl: eventFamilyGatheringImg,
    tags: ['Family Feast', 'Private Dining', 'Celebrations']
  },
  event_rooftop_terrace: {
    id: 'event_rooftop_terrace',
    name: 'Sunset Rooftop Social & Cocktails',
    category: 'Events & Experiences',
    filename: 'event_rooftop_terrace.jpg',
    description: 'Golden hour drinks and canapés on open-air elevated sky decks overlooking the city panorama',
    dataUri: eventRooftopTerraceImg,
    webUrl: eventRooftopTerraceImg,
    tags: ['Rooftop', 'Sunset Drinks', 'City View']
  },

  // Aliases for compatibility
  hero_banner: {
    id: 'hero_banner',
    name: 'ReserveHub Culinary Masterpiece Banner',
    category: 'Hero Showcase',
    filename: 'pic1.jpg',
    description: 'Executive Chef Marcus Dubois crafting gourmet dishes at ReserveHub exclusive partner venues',
    dataUri: pic1Img,
    webUrl: pic1Img,
    tags: ['Master Chef', 'Exclusive Dining', 'Culinary Arts']
  },
  restaurant_interior: {
    id: 'restaurant_interior',
    name: 'Glass Pavilion Skyline Atmosphere',
    category: 'Interior & Views',
    filename: 'glass_pavilion.jpg',
    description: 'High-altitude panoramic skyline interior with floor-to-ceiling glass architecture',
    dataUri: glassPavilionImg,
    webUrl: glassPavilionImg,
    tags: ['Skyline View', 'Glass Pavilion']
  },
  restaurant_card_1: {
    id: 'restaurant_card_1',
    name: 'Signature Seafood & Lobster Dish',
    category: 'Signature Menu',
    filename: 'menu_item_1.jpg',
    description: 'Fresh butter-basted grilled lobster tail on artisan ceramic plate',
    dataUri: menuItem1Img,
    webUrl: menuItem1Img,
    tags: ['Seafood', 'Grilled Lobster']
  },
  restaurant_card_2: {
    id: 'restaurant_card_2',
    name: 'Signature Prime Ribeye Cut',
    category: 'Signature Menu',
    filename: 'menu_item_2.jpg',
    description: 'Prime sliced dry-aged ribeye steak on dark wood board',
    dataUri: menuItem2Img,
    webUrl: menuItem2Img,
    tags: ['Prime Steak', 'Wood Board']
  },
  restaurant_card_3: {
    id: 'restaurant_card_3',
    name: 'Omakase Sushi Experience',
    category: 'Japanese Dining',
    filename: 'sakura_garden.jpg',
    description: 'Fresh sushi & sashimi master counter preparation',
    dataUri: sakuraGardenImg,
    webUrl: sakuraGardenImg,
    tags: ['Sushi Counter', 'Sashimi']
  },
  myanmar_food: {
    id: 'myanmar_food',
    name: 'Royal Burmese Heritage Dining',
    category: 'Restaurants',
    filename: 'golden_mandalay.jpg',
    description: 'Traditional teak wood dining hall with authentic palace cuisine',
    dataUri: goldenMandalayImg,
    webUrl: goldenMandalayImg,
    tags: ['Burmese Heritage', 'Royal Dining']
  },
  screen: {
    id: 'screen',
    name: 'ReserveHub Official Badge',
    category: 'Brand',
    filename: 'golden_mandalay.jpg',
    description: 'ReserveHub premium venue showcase badge',
    dataUri: goldenMandalayImg,
    webUrl: goldenMandalayImg,
    tags: ['ReserveHub', 'Branding']
  }
};

const defaultFallbackItem: AppImageItem = {
  id: 'golden_mandalay',
  name: 'Golden Mandalay Kitchen',
  category: 'Restaurants',
  filename: 'golden_mandalay.jpg',
  description: 'Grand royal Burmese teak dining hall with authentic palace cuisine',
  dataUri: goldenMandalayImg,
  webUrl: goldenMandalayImg,
  tags: ['Restaurant']
};

// Safe proxy wrapper so accessing APP_IMAGES[anyUnknownKey] NEVER crashes with undefined .dataUri
export const APP_IMAGES: Record<string, AppImageItem> = new Proxy(rawImages, {
  get(target, prop: string | symbol) {
    if (typeof prop === 'string') {
      if (prop in target) {
        return target[prop];
      }
      if (prop in REAL_IMAGE_DATA_URIS) {
        return {
          id: prop,
          name: prop,
          category: 'Venues',
          filename: `${prop}.jpg`,
          description: prop,
          dataUri: REAL_IMAGE_DATA_URIS[prop],
          webUrl: REAL_IMAGE_DATA_URIS[prop],
          tags: [prop]
        };
      }
      return defaultFallbackItem;
    }
    return Reflect.get(target, prop);
  }
});

export const REAL_IMAGE_DATA_URIS: Record<string, string> = {
  pic1: pic1Img,
  glass_pavilion: glassPavilionImg,
  golden_mandalay: goldenMandalayImg,
  lakeview_terrace: lakeviewTerraceImg,
  menu_item_1: menuItem1Img,
  menu_item_2: menuItem2Img,
  sakura_garden: sakuraGardenImg,
  spice_route: spiceRouteImg,
  street_bites_cafe: streetBitesCafeImg,
  event_wine_tasting: eventWineTastingImg,
  event_live_lounge: eventLiveLoungeImg,
  event_family_gathering: eventFamilyGatheringImg,
  event_rooftop_terrace: eventRooftopTerraceImg
};

/**
 * Returns safe image source with fallback
 */
export function getSafeImage(keyOrUrl: string, fallbackKey: string = 'golden_mandalay'): string {
  if (!keyOrUrl) {
    return rawImages[fallbackKey]?.dataUri || goldenMandalayImg;
  }
  if (rawImages[keyOrUrl]) {
    return rawImages[keyOrUrl].dataUri;
  }
  if (REAL_IMAGE_DATA_URIS[keyOrUrl]) {
    return REAL_IMAGE_DATA_URIS[keyOrUrl];
  }
  for (const item of Object.values(rawImages)) {
    if (keyOrUrl.includes(item.filename) || keyOrUrl.includes(item.id)) {
      return item.dataUri;
    }
  }
  if (keyOrUrl.startsWith('/') || keyOrUrl.startsWith('http') || keyOrUrl.startsWith('data:image')) {
    return keyOrUrl;
  }
  return rawImages[fallbackKey]?.dataUri || goldenMandalayImg;
}
