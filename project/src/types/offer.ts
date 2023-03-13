type GenreCityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type GenreCity = {
  location: GenreCityLocation;
  name: string;
};

type GenreHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type GenreLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type Offers = {
  bedrooms: number;
  city: GenreCity;
  description: string;
  goods: [string];
  host: GenreHost;
  id: number;
  images: [string];
  isFavorite: boolean;
  isPremium: boolean;
  location: GenreLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type { Offers };
