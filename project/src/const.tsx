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

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

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

export { AppRoute, AuthorizationStatus, CITIES, OPTIONS, defaultCity, ApiRoute };
