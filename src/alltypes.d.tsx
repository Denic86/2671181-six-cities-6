type Review = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
};

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
  reviews: Review[];
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
