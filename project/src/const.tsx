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

export { AppRoute, AuthorizationStatus, CITIES };
