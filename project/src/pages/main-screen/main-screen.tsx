import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import CardList from '../../components/card-list/card-list';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';

type MainScreenProp = {
  countPlaces: number;
  offersData: Offer[];
};

function MainScreen({countPlaces, offersData}: MainScreenProp): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation offersData={offersData}/>
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
            <CitiesList offersData={offersData}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countPlaces} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardList offersData={offersData} className={'cities__places-list places__list tabs__content' } cardClassName={'cities'}/>
            </section>
            <div className="cities__right-section">
              <Map offersData={offersData} className={'cities__map map'} height={'auto'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
