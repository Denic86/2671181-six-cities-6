type Card = {
  id: string;
  title: string;
  type: string;
  price: number;
  image: string;
  ratingWidth: number;
  isPremium: boolean;
  isBookmarked: boolean;
  latitude: number;
  longitude: number;
};

type FavoriteCard = {
  id: string;
  title: string;
  type: string;
  price: number;
  image: string;
  ratingWidth: number;
  isPremium: boolean;
  city: string;
  latitude: number;
  longitude: number;
};
