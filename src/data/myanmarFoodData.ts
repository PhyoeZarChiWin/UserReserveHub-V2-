import { APP_IMAGES } from './imageRegistry';

export interface MyanmarFoodItem {
  id: string;
  name: string;
  burmeseName?: string;
  category: string;
  price: string;
  priceNum: number;
  image: string;
  description: string;
  restaurant: string;
  venueId: string;
  tags: string[];
  popular?: boolean;
}

export interface MyanmarCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  itemCount: number;
  description: string;
}

export const MYANMAR_CATEGORIES: MyanmarCategory[] = [
  {
    id: 'salads',
    name: 'Salads',
    icon: '🥗',
    image: APP_IMAGES['golden_mandalay']?.dataUri || '',
    itemCount: 8,
    description: 'Fresh fermented tea leaf, ginger, tomato & herbal artisan salads (Thoke)'
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: '🌅',
    image: APP_IMAGES['street_bites_cafe']?.dataUri || '',
    itemCount: 6,
    description: 'Iconic steaming fish broth Mohinga, Nan Gyi Thoke & crispy pea fritters'
  },
  {
    id: 'seafood',
    name: 'Seafood',
    icon: '🦐',
    image: APP_IMAGES['menu_item_1']?.dataUri || '',
    itemCount: 7,
    description: 'Flame-grilled Andaman tiger prawns, spicy seafood curries & ngapi dips'
  },
  {
    id: 'shan-cuisine',
    name: 'Shan Cuisine',
    icon: '🍜',
    image: APP_IMAGES['spice_route']?.dataUri || '',
    itemCount: 9,
    description: 'Silky Shan sticky noodles, tofu nway, sour pork & fresh mountain herbs'
  },
  {
    id: 'bbq-grill',
    name: 'BBQ & Grill',
    icon: '🍢',
    image: APP_IMAGES['menu_item_2']?.dataUri || '',
    itemCount: 11,
    description: '19th Street charcoal glazed skewers, spiced pork belly & grilled okra'
  },
  {
    id: 'curries',
    name: 'Curries & Rice',
    icon: '🍛',
    image: APP_IMAGES['lakeview_terrace']?.dataUri || '',
    itemCount: 10,
    description: 'Aromatic slow-braised golden chicken potato curry, beef hin & fragrant rice'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍮',
    image: APP_IMAGES['event_rooftop_terrace']?.dataUri || '',
    itemCount: 6,
    description: 'Sanwin Makin coconut semolina cake, agar jellies & Shwe Yin Aye'
  }
];

export const MYANMAR_MENU_ITEMS: Record<string, MyanmarFoodItem[]> = {
  salads: [
    {
      id: 'tea-leaf-salad',
      name: 'Royal Tea Leaf Salad',
      burmeseName: 'လက်ဖက်သုပ် (Lahpet Thoke)',
      category: 'salads',
      price: '4,500 MMK',
      priceNum: 4500,
      image: APP_IMAGES['golden_mandalay']?.dataUri || '',
      description: 'Fermented premium tea leaves tossed with roasted peanuts, crispy yellow split peas, toasted sesame, fried garlic, fresh tomatoes, and green bird’s eye chili.',
      restaurant: 'Golden Mandalay Heritage',
      venueId: 'v1',
      tags: ['Traditional', 'Vegetarian Option', 'Signature'],
      popular: true
    },
    {
      id: 'ginger-salad',
      name: 'Zesty Ginger Salad',
      burmeseName: 'ဂျင်းသုပ် (Gyin Thoke)',
      category: 'salads',
      price: '3,500 MMK',
      priceNum: 3500,
      image: APP_IMAGES['street_bites_cafe']?.dataUri || '',
      description: 'Finely julienned pickled tender ginger infused with shredded cabbage, crunchy broad beans, roasted sesame seeds, and freshly squeezed lime.',
      restaurant: 'Golden Mandalay Heritage',
      venueId: 'v1',
      tags: ['Refreshing', 'Digestive', 'Crunchy'],
      popular: true
    },
    {
      id: 'pennywort-salad',
      name: 'Wild Pennywort Herbal Salad',
      burmeseName: 'မြင်းခွာရွက်သုပ် (Myin Kwa Ywet Thoke)',
      category: 'salads',
      price: '3,800 MMK',
      priceNum: 3800,
      image: APP_IMAGES['spice_route']?.dataUri || '',
      description: 'Vibrant organic pennywort leaves hand-tossed with shallot oil, toasted peanut powder, sliced shallots, and fragrant lime zest dressing.',
      restaurant: 'Spice Route Bistro',
      venueId: 'v3',
      tags: ['Superfood', 'Healthy', 'Herbal']
    },
    {
      id: 'tomato-salad',
      name: 'Inle Lake Tomato Salad',
      burmeseName: 'ခရမ်းချဉ်သီးသုပ် (Khayan Chin Thi Thoke)',
      category: 'salads',
      price: '2,500 MMK',
      priceNum: 2500,
      image: APP_IMAGES['golden_mandalay']?.dataUri || '',
      description: 'Sweet, juicy Inle floating-garden ripe tomatoes paired with crispy shallots, crushed peanuts, fragrant garlic oil, and coriander.',
      restaurant: 'Golden Mandalay Heritage',
      venueId: 'v1',
      tags: ['Classic', 'Sweet & Savory', 'Light']
    }
  ],
  breakfast: [
    {
      id: 'mohinga-special',
      name: 'Royal Mandalay Mohinga',
      burmeseName: 'မုန့်ဟင်းခါး (Mohinga)',
      category: 'breakfast',
      price: '4,000 MMK',
      priceNum: 4000,
      image: APP_IMAGES['street_bites_cafe']?.dataUri || '',
      description: 'Myanmar’s national comfort dish: aromatic lemongrass & catfish broth with delicate rice vermicelli, boiled duck egg, crispy split-pea fritters, and coriander.',
      restaurant: 'Golden Mandalay Heritage',
      venueId: 'v1',
      tags: ['National Dish', 'Breakfast Classic', 'Must Try'],
      popular: true
    },
    {
      id: 'nan-gyi-thoke',
      name: 'Mandalay Nan Gyi Thoke',
      burmeseName: 'နန်းကြီးသုပ် (Nan Gyi Thoke)',
      category: 'breakfast',
      price: '4,800 MMK',
      priceNum: 4800,
      image: APP_IMAGES['spice_route']?.dataUri || '',
      description: 'Thick round rice noodles dressed in golden spiced chicken curry gravy, roasted chickpea flour, chili oil, hard-boiled egg slices, and crisp shallots.',
      restaurant: 'Street Bites Café',
      venueId: 'v4',
      tags: ['Rich', 'Savory', 'House Special'],
      popular: true
    },
    {
      id: 'pe-byouk-naan',
      name: 'Clay-Oven Naan with Buttered Boiled Peas',
      burmeseName: 'နံပြား ပဲပြုတ် (Naan & Pe Byouk)',
      category: 'breakfast',
      price: '2,800 MMK',
      priceNum: 2800,
      image: APP_IMAGES['lakeview_terrace']?.dataUri || '',
      description: 'Hot tandoor-baked flatbread served with savory steamed vatana yellow peas, golden fried shallots, and pure melted country butter.',
      restaurant: 'Street Bites Café',
      venueId: 'v4',
      tags: ['Morning Favorite', 'Vegetarian', 'Warm & Fluffy']
    }
  ],
  seafood: [
    {
      id: 'grilled-tiger-prawns',
      name: 'Andaman Charcoal Grilled Tiger Prawns',
      burmeseName: 'ပုစွန်ကင် (Pazun Kin)',
      category: 'seafood',
      price: '18,500 MMK',
      priceNum: 18500,
      image: APP_IMAGES['menu_item_1']?.dataUri || '',
      description: 'Jumbo succulent tiger prawns charred over charcoal embers with garlic herb butter and zesty green chili lime dipping sauce.',
      restaurant: 'Spice Route Bistro',
      venueId: 'v3',
      tags: ['Fresh Catch', 'Charcoal Flame', 'Chef Recommended'],
      popular: true
    },
    {
      id: 'prawn-curry',
      name: 'Spicy Burmese Butter Prawn Curry',
      burmeseName: 'ပုစွန်ဆီပြန်ဟင်း (Pazun Hin)',
      category: 'seafood',
      price: '16,000 MMK',
      priceNum: 16000,
      image: APP_IMAGES['golden_mandalay']?.dataUri || '',
      description: 'Rich oil-cooked aromatic curry with wild-caught prawns, sweet red shallot reduction, tomato paste, garlic, and fresh kaffir lime leaf.',
      restaurant: 'Golden Mandalay Heritage',
      venueId: 'v1',
      tags: ['Rich Gravy', 'Seafood', 'Traditional']
    }
  ],
  'shan-cuisine': [
    {
      id: 'shan-noodles-soup',
      name: 'Shan Khauk Swe (Chicken / Pork)',
      burmeseName: 'ရှမ်းခေါက်ဆွဲ (Shan Noodles)',
      category: 'shan-cuisine',
      price: '5,000 MMK',
      priceNum: 5000,
      image: APP_IMAGES['spice_route']?.dataUri || '',
      description: 'Silky Shan sticky flat rice noodles bathed in savory tomato chicken gravy, topped with crushed roasted peanuts, scallions, and pickled mustard greens.',
      restaurant: 'Street Bites Café',
      venueId: 'v4',
      tags: ['Highland Heritage', 'Comfort Food', 'Top Rated'],
      popular: true
    },
    {
      id: 'tofu-nway',
      name: 'Warm Silken Shan Tofu Pot',
      burmeseName: 'တို့ဟူးနွေး (Tofu Nway)',
      category: 'shan-cuisine',
      price: '4,200 MMK',
      priceNum: 4200,
      image: APP_IMAGES['street_bites_cafe']?.dataUri || '',
      description: 'Ladle of molten yellow split-pea tofu cream poured over thin rice noodles, spiced minced chicken or pork, chili oil, coriander, and crushed nuts.',
      restaurant: 'Street Bites Café',
      venueId: 'v4',
      tags: ['Vegetarian Option', 'Warm & Velvety', 'Specialty']
    }
  ],
  'bbq-grill': [
    {
      id: 'skewers-platter',
      name: 'Yangon 19th Street BBQ Skewer Platter',
      burmeseName: 'အကင်စုံ (Yangon Night BBQ)',
      category: 'bbq-grill',
      price: '12,500 MMK',
      priceNum: 12500,
      image: APP_IMAGES['menu_item_2']?.dataUri || '',
      description: 'Assorted sizzling skewers: marinated spiced pork belly, tender lemongrass chicken, grilled tofu squares, enoki mushroom bacon rolls, and sweet peppers.',
      restaurant: 'Spice Route Bistro',
      venueId: 'v3',
      tags: ['Night Market Style', 'Charcoal Grilled', 'Great for Sharing'],
      popular: true
    },
    {
      id: 'grilled-whole-fish',
      name: 'Spiced Lemongrass Stuffed Grilled Snapper',
      burmeseName: 'ငါးကင် (Nga Kin)',
      category: 'bbq-grill',
      price: '15,000 MMK',
      priceNum: 15000,
      image: APP_IMAGES['menu_item_1']?.dataUri || '',
      description: 'Whole fresh sea snapper stuffed with fragrant bruised lemongrass, shallots, and ginger, wrapped in banana leaf and flame grilled to tender perfection.',
      restaurant: 'Lakeview Terrace & Romantic Pavilion',
      venueId: 'v2',
      tags: ['Whole Fish', 'Aromatic', 'Banana Leaf']
    }
  ],
  curries: [
    {
      id: 'chicken-potato-curry',
      name: 'Golden Burmese Chicken & Potato Curry',
      burmeseName: 'ကြက်သား အာလူးဟင်း (Kyet Thar Alu Hin)',
      category: 'curries',
      price: '7,500 MMK',
      priceNum: 7500,
      image: APP_IMAGES['golden_mandalay']?.dataUri || '',
      description: 'Tender free-range chicken drumsticks and fluffy potato chunks braised slowly in fragrant turmeric, golden shallot oil, ginger, and aromatic garam spices.',
      restaurant: 'Golden Mandalay Heritage',
      venueId: 'v1',
      tags: ['Home Style', 'Slow Braised', 'Signature Feast'],
      popular: true
    },
    {
      id: 'beef-curry',
      name: 'Royal Mandalay Braised Beef Hin',
      burmeseName: 'အမဲသားနှပ်ဟင်း (Ame Thar Hin)',
      category: 'curries',
      price: '9,500 MMK',
      priceNum: 9500,
      image: APP_IMAGES['menu_item_2']?.dataUri || '',
      description: 'Melt-in-your-mouth slow-simmered beef shank cooked in rich caramelized shallot-garlic gravy and roasted whole spices until deep mahogany red.',
      restaurant: 'Golden Mandalay Heritage',
      venueId: 'v1',
      tags: ['Rich & Hearty', 'Slow Cooked', 'Spiced']
    }
  ],
  desserts: [
    {
      id: 'sanwin-makin',
      name: 'Royal Coconut Sanwin Makin',
      burmeseName: 'ဆနွင်းမကင်း (Sanwin Makin)',
      category: 'desserts',
      price: '3,000 MMK',
      priceNum: 3000,
      image: APP_IMAGES['event_rooftop_terrace']?.dataUri || '',
      description: 'Rich baked semolina coconut cake studded with golden poppy seeds, rich coconut milk, pure butter, and caramelized cardamom sugar crust.',
      restaurant: 'Golden Mandalay Heritage',
      venueId: 'v1',
      tags: ['Sweet Treat', 'Baked Golden', 'Traditional'],
      popular: true
    },
    {
      id: 'shwe-yin-aye',
      name: 'Iced Shwe Yin Aye Coconut Delight',
      burmeseName: 'ရွှေရင်အေး (Shwe Yin Aye)',
      category: 'desserts',
      price: '3,500 MMK',
      priceNum: 3500,
      image: APP_IMAGES['event_family_gathering']?.dataUri || '',
      description: 'Refreshing chilled dessert bowl with creamy coconut milk, pandan agar jellies, tender coconut slices, sweet sago, and soft soaked bread.',
      restaurant: 'Street Bites Café',
      venueId: 'v4',
      tags: ['Chilled', 'Coconut Milk', 'Summer Cooler'],
      popular: true
    }
  ]
};

