import { Helmet } from 'react-helmet-async';
import FavoriteList from '../../components/favorite-list/favorite-list';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import { OfferType } from '../../types/offer';

type FavoriteScreenProp = {
  offersData: OfferType[];
};

function FavoritesScreen({offersData}: FavoriteScreenProp) {

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation offersData={offersData}/>
          </div>
        </div>
      </header>

      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList offersData={offersData}/>
          </section>
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
