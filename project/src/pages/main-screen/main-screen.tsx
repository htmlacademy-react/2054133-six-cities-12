import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../store';
import CitiesPlaces from '../../components/cities-places/cities-places';
import NoCitiesPlaces from '../../components/no-cities-places/no-cities-places';
import { useEffect, useState } from 'react';
import { AuthorizationStatus, defaultCity } from '../../const';
import { fetchFavoritesAction, fetchUserDataAction } from '../../store/api-action';
import LoadingScreen from '../loading-screen/loading-screen';
import { getCurrentCity, getIsLoadingOffersStatus, getOffersListCopy } from '../../store/offers-data/offers-data-selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { filteringOffersAction } from '../../store/offers-data/offers-data';

function MainScreen(): JSX.Element {

  const currentCity = useAppSelector(getCurrentCity);
  const offersList = useAppSelector(getOffersListCopy);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isLoading = useAppSelector(getIsLoadingOffersStatus);

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
    dispatch(filteringOffersAction(defaultCity));
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
      dispatch(fetchUserDataAction());
    }
  }, [authStatus, dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

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
            {(isOffers && !isLoading) && <CitiesPlaces handleCardOver={handleCardOver} currentCity={currentCity}/>}
            {(!isOffers && !isLoading) && <NoCitiesPlaces />}
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
