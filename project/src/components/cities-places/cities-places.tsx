import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { Options } from '../../const';
import { useAppDispatch, useAppSelector } from '../../store';
import CardList from '../card-list/card-list';
import OptionSort from '../option-sort/option-sort';
import { getCurrentCity, getOffersListCopy } from '../../store/offers-data/offers-data-selectors';
import { sortOffersAction } from '../../store/offers-data/offers-data';

type CitiesPlacesProps = {
  onCardOver?: (id: number) => void;
}

function CitiesPlaces({onCardOver}: CitiesPlacesProps): JSX.Element {

  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(getCurrentCity);
  const offersList = useAppSelector(getOffersListCopy);

  const [optionsListClassName, setOptionsListClassName] = useState('');
  const handleClickSorting = () => optionsListClassName ? setOptionsListClassName('') : setOptionsListClassName('places__options--opened');

  const [optionClassName, setOptionClassName] = useState<string>('Popular');
  const handleClickOption = useCallback((evt: MouseEvent<HTMLLIElement>) => {
    if (evt.target instanceof HTMLElement && evt.target.textContent !== null) {
      setOptionClassName(evt.target.textContent);
      setOptionsListClassName('');
      dispatch(sortOffersAction({sortType: evt.target.textContent, city: currentCity}));
    }
  }, [currentCity, dispatch]);

  useEffect(() => {
    setOptionsListClassName('');
  }, [offersList]);

  useEffect(() => {
    setOptionClassName('Popular');
  }, [currentCity]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersList.length} places to stay in {currentCity}</b>
      <form className="places__sorting" action="#" method="get" >
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0} onClick={handleClickSorting}>
          {optionClassName}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${optionsListClassName}`} >
          {Object.values(Options).map((option) => <OptionSort key={option} onClickOption={handleClickOption} optionClassName={optionClassName} option={option}/>)}
        </ul>
      </form>
      <CardList className={'cities__places-list places__list tabs__content' } cardClassName={'cities'} onCardOver={onCardOver} />
    </section>
  );
}

export default CitiesPlaces;
