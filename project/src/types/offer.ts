type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type GenreCity = {
  location: CityLocation;
  name: string;
};

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferType = {
  bedrooms: number;
  city: GenreCity;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type { OfferType };
