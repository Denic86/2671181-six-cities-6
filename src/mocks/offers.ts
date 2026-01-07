import { v4 as uuid } from 'uuid';

export const Cards: Card[] = [
  {
    id: uuid(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    image: 'img/apartment-01.jpg',
    ratingWidth: 80,
    isPremium: true,
    isBookmarked: false,
  },
  {
    id: uuid(),
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    image: 'img/room.jpg',
    ratingWidth: 80,
    isPremium: false,
    isBookmarked: true,
  },
  {
    id: uuid(),
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    image: 'img/apartment-02.jpg',
    ratingWidth: 80,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: uuid(),
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    image: 'img/room.jpg',
    ratingWidth: 80,
    isPremium: false,
    isBookmarked: true,
  },
];
