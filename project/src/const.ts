enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Login = '/login',
  Property = '/offer'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

enum Options {
  POPULAR = 'Popular',
  PRICE_TO_HIGH = 'Price: low to high',
  PRICE_TO_LOW = 'Price: high to low',
  TOP_RATED = 'Top rated first'
}

const defaultCity = 'Paris';

enum ApiRoute {
  Offers = '/hotels',
  Offer = '/hotels/{hotelId}',
  Favorite = '/favorite',
  Login = '/Login',
  Logout = 'logout',
}

enum NameSpace {
  User = 'USER',
  UserProcess = 'USER_PROCESS',
  Review = 'REVIEW',
  Offers = 'OFFERS',
}

enum iconSize {
  width = 28,
  height = 40,
}

enum iconAnchor {
  width = 14,
  height = 0,
}

const URL = 'https://12.react.pages.academy/six-cities';

const MIN_RATING = '1';

const CommentLength = {
  Min: 50,
  Max: 300,
};

const ratingStarSetting: {[key: string]: string} = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
} as const;

export {
  AppRoute,
  AuthorizationStatus,
  CITIES,
  Options,
  defaultCity,
  ApiRoute,
  URL,
  MIN_RATING,
  CommentLength,
  NameSpace,
  iconSize,
  iconAnchor,
  ratingStarSetting
};
