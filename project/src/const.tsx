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

const OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export { AppRoute, AuthorizationStatus, CITIES, OPTIONS };
