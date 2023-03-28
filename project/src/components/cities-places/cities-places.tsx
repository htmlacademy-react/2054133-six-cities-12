import { useState } from 'react';
import { Offer } from '../../types/offer';
import CardList from '../card-list/card-list';

type CitiesPlacesProps = {
  filteredOffers: Offer[];
  HandleCardOver: (arg0: number | string) => void;
}

function CitiesPlaces({filteredOffers, HandleCardOver}: CitiesPlacesProps): JSX.Element {
  const [currentOption, setCurrentOption] = useState<string>('Popular');

  const handleOptionsListClick = () => {
    const optionsList = document.querySelector('.places__options--custom');
    if (optionsList?.classList.contains('places__options--opened')) {
      return optionsList.classList.remove('places__options--opened');
    }
    optionsList?.classList.add('places__options--opened');
  };

  const handleOptionClick = (evt) => {
    if (evt.target.classList.contains('places__option--active')) {
      return null;
    }
    setCurrentOption(evt.target.textContent);
    const option = document.querySelector('.places__option--active');
    option?.classList.remove('places__option--active');
    evt.target.classList.add('places__option--active');
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredOffers.length} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get" onClick={() => handleOptionsListClick()}>
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom">
          <li className="places__option places__option--active" tabIndex={0} onClick={(evt) => handleOptionClick(evt)}>Popular</li>
          <li className="places__option" tabIndex={0} onClick={(evt) => handleOptionClick(evt)}>Price: low to high</li>
          <li className="places__option" tabIndex={0} onClick={(evt) => handleOptionClick(evt)}>Price: high to low</li>
          <li className="places__option" tabIndex={0} onClick={(evt) => handleOptionClick(evt)}>Top rated first</li>
        </ul>
      </form>
      <CardList offersData={filteredOffers} className={'cities__places-list places__list tabs__content' } cardClassName={'cities'} HandleCardOver={HandleCardOver} />
    </section>
  );
}

export default CitiesPlaces;
