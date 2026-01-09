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
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    reviews: [
      {
        id: uuid(),
        user: {
          name: 'Max',
          avatar: 'img/avatar-max.jpg',
        },
        rating: 4,
        comment:
          'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: '2019-04-24',
      },
    ],
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
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    reviews: [
      {
        id: uuid(),
        user: {
          name: 'Angelina',
          avatar: 'img/avatar-angelina.jpg',
        },
        rating: 5,
        comment:
          'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
        date: '2019-05-15',
      },
    ],
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
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    reviews: [],
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
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    reviews: [],
  },
];
