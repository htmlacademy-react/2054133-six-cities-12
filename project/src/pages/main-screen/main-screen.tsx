import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../store';
import CitiesPlaces from '../../components/cities-places/cities-places';
import NoCitiesPlaces from '../../components/no-cities-places/no-cities-places';
import { useState } from 'react';


function MainScreen(): JSX.Element {

  const currentCity = useAppSelector((state) => state.currentCity);
  const OffersList = useAppSelector((state) => state.offersList);

  const isOffers = OffersList.length >= 1;

  const getPageEmptyClassName = !isOffers ? ' page__main--index-empty' : '';

  const [currentOfferId, setCurrentOfferId] = useState<number | string>();
  const handleCardOver = (offerId: number | string) => {
    if (offerId > 0) {
      return setCurrentOfferId(offerId);
    }
    setCurrentOfferId(-1);
  };

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
            {isOffers && <CitiesPlaces handleCardOver={handleCardOver} />}
            {!isOffers && <NoCitiesPlaces />}
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
