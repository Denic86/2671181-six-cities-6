export interface ReviewType {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export interface Card {
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
  reviews: ReviewType[];
}

export interface FavoriteCard {
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
}
