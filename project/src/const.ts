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

const OPTIONS = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first'
} as const;

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

const URL = 'https://12.react.pages.academy/six-cities';

const MIN_RATING = 1;

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

export {
  AppRoute,
  AuthorizationStatus,
  CITIES,
  OPTIONS,
  defaultCity,
  ApiRoute,
  URL,
  MIN_RATING,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  NameSpace
};
