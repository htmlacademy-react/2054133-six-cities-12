import { Helmet } from 'react-helmet-async';
import FavoriteList from '../../components/favorite-list/favorite-list';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import { getFavoriteOffersListCopy } from '../../store/offers-data/offers-data-selectors';
import { useAppDispatch, useAppSelector } from '../../store';
import FavoriteListEmpty from '../../components/favorite-list-empty/favorite-list-empty';
import { useEffect } from 'react';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { fetchFavoritesAction, fetchUserDataAction } from '../../store/api-action';


function FavoritesScreen() {

  const favoritesList = useAppSelector(getFavoriteOffersListCopy);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
      dispatch(fetchUserDataAction());
    }
  }, [authStatus, dispatch]);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesList.length < 1 ? <FavoriteListEmpty /> : <FavoriteList />}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
