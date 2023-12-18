export interface Upcoming {
  id: number;
  name: string;
  price: number;
  description: string;
  releaseDay: number;
}

export const upcomingProducts = [
  {
    id: 1,
    name: 'Hand Lotion',
    price: 8,
    description: 'A smooth and elegant feeling hand cream',
    releaseDay: 4,
  },
  {
    id: 2,
    name: 'Bath Salts',
    price: 18,
    description:
      'Give your bath a nice auroma, and sooth your body with these amazing bath salts.',
    releaseDay: 5,
  },
  {
    id: 3,
    name: 'Electronic Candle Lighter',
    price: 20,
    description:
      'These electric lighters will help you light your candles with convience and efficiency.',
    releaseDay: 6,
  },
];
