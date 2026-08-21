export interface PopularArea {
  id: string;
  name: string;
  city: string;
  image: string;
  count: string;
  description: string;
}

export const POPULAR_CITIES = [
  'Tokyo',
  'Osaka',
  'Kyoto',
  'Nagoya',
  'Yokohama',
  'Fukuoka',
  'Sapporo',
  'Okinawa'
] as const;

export type PopularCity = typeof POPULAR_CITIES[number];

export const POPULAR_AREAS_BY_CITY: Record<PopularCity, PopularArea[]> = {
  Tokyo: [
    {
      id: 'akihabara',
      name: 'Akihabara',
      city: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=700&q=80',
      count: '142 places',
      description: 'Electric town, anime culture, themed cafes & tech hubs'
    },
    {
      id: 'asakusa',
      name: 'Asakusa',
      city: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1583084336829-56da491aa5c2?auto=format&fit=crop&w=700&q=80',
      count: '98 places',
      description: 'Senso-ji temple, traditional izakayas & street food'
    },
    {
      id: 'ginza',
      name: 'Ginza',
      city: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80',
      count: '186 places',
      description: 'Michelin fine dining, luxury shopping & cocktail bars'
    },
    {
      id: 'harajuku',
      name: 'Harajuku',
      city: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
      count: '115 places',
      description: 'Takeshita Street, trendy cafes, fashion & matcha desserts'
    },
    {
      id: 'roppongi',
      name: 'Roppongi',
      city: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=700&q=80',
      count: '134 places',
      description: 'Skyline lounges, international dining & art museums'
    },
    {
      id: 'shibuya',
      name: 'Shibuya',
      city: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80',
      count: '210 places',
      description: 'Iconic crossing, vibrant nightlife & youth gastronomy'
    },
    {
      id: 'shinjuku',
      name: 'Shinjuku',
      city: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80',
      count: '225 places',
      description: 'Omoide Yokocho alleyways, skyscraper dining & entertainment'
    },
    {
      id: 'ueno',
      name: 'Ueno',
      city: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=700&q=80',
      count: '84 places',
      description: 'Ameyoko market, museums & classic street eateries'
    }
  ],
  Osaka: [
    {
      id: 'dotonbori',
      name: 'Dotonbori',
      city: 'Osaka',
      image: 'https://images.unsplash.com/photo-1590559899731-a3f07b743759?auto=format&fit=crop&w=700&q=80',
      count: '178 places',
      description: 'Glico neon sign, takoyaki, street skewers & riverside bars'
    },
    {
      id: 'shinsaibashi',
      name: 'Shinsaibashi',
      city: 'Osaka',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80',
      count: '124 places',
      description: 'Shopping arcade, modern fusion cuisine & dessert spots'
    },
    {
      id: 'umeda',
      name: 'Umeda',
      city: 'Osaka',
      image: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?auto=format&fit=crop&w=700&q=80',
      count: '162 places',
      description: 'Sky Building, high-end department stores & craft beer'
    },
    {
      id: 'namba',
      name: 'Namba',
      city: 'Osaka',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
      count: '145 places',
      description: 'Izakaya culture, comedy theaters & local food stalls'
    },
    {
      id: 'shinsekai',
      name: 'Shinsekai',
      city: 'Osaka',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=700&q=80',
      count: '76 places',
      description: 'Tsutenkaku Tower, kushikatsu skewers & retro vibes'
    }
  ],
  Kyoto: [
    {
      id: 'gion',
      name: 'Gion',
      city: 'Kyoto',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80',
      count: '112 places',
      description: 'Traditional wooden machiya houses, kaiseki & geisha district'
    },
    {
      id: 'arashiyama',
      name: 'Arashiyama',
      city: 'Kyoto',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80',
      count: '68 places',
      description: 'Bamboo forest, serene riverside tea rooms & tofu dining'
    },
    {
      id: 'higashiyama',
      name: 'Higashiyama',
      city: 'Kyoto',
      image: 'https://images.unsplash.com/photo-1583084336829-56da491aa5c2?auto=format&fit=crop&w=700&q=80',
      count: '95 places',
      description: 'Kiyomizu-dera slopes, ceramic shops & traditional sweets'
    },
    {
      id: 'kawaramachi',
      name: 'Kawaramachi',
      city: 'Kyoto',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80',
      count: '130 places',
      description: 'Nishiki Market, contemporary dining & Kamogawa terraces'
    },
    {
      id: 'pontocho',
      name: 'Pontocho',
      city: 'Kyoto',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80',
      count: '82 places',
      description: 'Atmospheric narrow lantern-lit alley with riverside dining'
    }
  ],
  Nagoya: [
    {
      id: 'sakae',
      name: 'Sakae',
      city: 'Nagoya',
      image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=700&q=80',
      count: '92 places',
      description: 'Mirai Tower, entertainment hub & miso katsu specialties'
    },
    {
      id: 'nagoya-station',
      name: 'Meieki / Station',
      city: 'Nagoya',
      image: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?auto=format&fit=crop&w=700&q=80',
      count: '118 places',
      description: 'Hitsumabushi eel restaurants, towers & business lounges'
    },
    {
      id: 'osu',
      name: 'Osu Shopping District',
      city: 'Nagoya',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=700&q=80',
      count: '75 places',
      description: 'Osu Kannon temple, bustling street food stalls & vintage shops'
    }
  ],
  Yokohama: [
    {
      id: 'minato-mirai',
      name: 'Minato Mirai 21',
      city: 'Yokohama',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80',
      count: '104 places',
      description: 'Harbor ferris wheel, bayside dining & luxury hotels'
    },
    {
      id: 'chinatown-yokohama',
      name: 'Chinatown',
      city: 'Yokohama',
      image: 'https://images.unsplash.com/photo-1583084336829-56da491aa5c2?auto=format&fit=crop&w=700&q=80',
      count: '135 places',
      description: 'Vibrant paifang gates, dim sum banquets & street dumplings'
    },
    {
      id: 'motomachi',
      name: 'Motomachi & Yamate',
      city: 'Yokohama',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
      count: '62 places',
      description: 'European-style bakeries, boutique cafes & historic hills'
    }
  ],
  Fukuoka: [
    {
      id: 'tenjin',
      name: 'Tenjin',
      city: 'Fukuoka',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80',
      count: '128 places',
      description: 'Trendy shopping alleys, ramen joints & vibrant nightlife'
    },
    {
      id: 'nakasu',
      name: 'Nakasu Yatai',
      city: 'Fukuoka',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80',
      count: '96 places',
      description: 'Riverside open-air food stalls serving authentic tonkotsu ramen'
    },
    {
      id: 'hakata',
      name: 'Hakata',
      city: 'Fukuoka',
      image: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?auto=format&fit=crop&w=700&q=80',
      count: '110 places',
      description: 'Hakata station culinary hub, motsunabe & mentaiko feasts'
    }
  ],
  Sapporo: [
    {
      id: 'susukino',
      name: 'Susukino',
      city: 'Sapporo',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=700&q=80',
      count: '115 places',
      description: 'Famous Ramen Yokocho alley, Genghis Khan BBQ & nightlife'
    },
    {
      id: 'odori',
      name: 'Odori Park',
      city: 'Sapporo',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80',
      count: '78 places',
      description: 'Park boulevard, seasonal beer festivals & Hokkaido seafood'
    },
    {
      id: 'sapporo-station',
      name: 'Sapporo Station',
      city: 'Sapporo',
      image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=700&q=80',
      count: '90 places',
      description: 'Ramen Republic, soup curry restaurants & sweets boutiques'
    }
  ],
  Okinawa: [
    {
      id: 'kokusai-dori',
      name: 'Kokusai Dori (Naha)',
      city: 'Okinawa',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
      count: '98 places',
      description: 'Miracle Mile street, Ryukyu izakayas, Agu pork & tropical drinks'
    },
    {
      id: 'american-village',
      name: 'American Village (Chatan)',
      city: 'Okinawa',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80',
      count: '72 places',
      description: 'Oceanfront sunset boardwalk, seaside grills & craft cafes'
    },
    {
      id: 'onna-village',
      name: 'Onna Coast',
      city: 'Okinawa',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80',
      count: '54 places',
      description: 'Beachfront resort terraces, fresh sea grape sushi & sunset bars'
    }
  ]
};
