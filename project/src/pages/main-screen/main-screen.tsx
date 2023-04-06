import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../store';
import CitiesPlaces from '../../components/cities-places/cities-places';
import NoCitiesPlaces from '../../components/no-cities-places/no-cities-places';
import { useEffect, useState } from 'react';
import { changeCityAction, filteringOffersAction } from '../../store/action';
import { AuthorizationStatus, defaultCity } from '../../const';
import { fetchFavoritesAction } from '../../store/api-action';

function MainScreen(): JSX.Element {

  const currentCity = useAppSelector((state) => state.currentCity);
  const offersList = useAppSelector((state) => state.offersListCopy);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const isOffers = offersList.length >= 1;

  const getPageEmptyClassName = !isOffers ? ' page__main--index-empty' : '';

  const [currentOfferId, setCurrentOfferId] = useState<number>();
  const handleCardOver = (offerId: number) => {
    if (offerId > 0) {
      return setCurrentOfferId(offerId);
    }
    setCurrentOfferId(-1);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeCityAction(defaultCity));
    dispatch(filteringOffersAction(defaultCity));
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
    }
  }, []); // такой вариант ок?

  return (
    <div className={`page page--gray page--main${getPageEmptyClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {isOffers ? <CitiesPlaces handleCardOver={handleCardOver} currentCity={currentCity}/> : <NoCitiesPlaces />}
            <div className="cities__right-section">
              {isOffers && <Map className={'cities__map map'} height={'auto'} currentOfferId={currentOfferId}/>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
