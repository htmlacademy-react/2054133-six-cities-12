import { useEffect, useState } from 'react';
import { OPTIONS } from '../../const';
import { useAppSelector } from '../../store';
import CardList from '../card-list/card-list';
import OptionSort from '../option-sort/option-sort';

type CitiesPlacesProps = {
  handleCardOver?: (id: number) => void;
}

function CitiesPlaces({handleCardOver}: CitiesPlacesProps): JSX.Element {

  const OffersList = useAppSelector((state) => state.offersList);

  const [optionsListClassName, setOptionsListClassName] = useState('');
  const handleClickSorting = () => optionsListClassName ? setOptionsListClassName('') : setOptionsListClassName('places__options--opened');

  const [optionClassName, setOptionClassName] = useState<string>('Popular');
  const handleClickOption = (evt: React.MouseEvent<HTMLLIElement>) => {
    setOptionClassName(evt.target.textContent);
    setOptionsListClassName('');
  };

  useEffect(() => {
    setOptionsListClassName('');
    setOptionClassName('Popular');
  }, [OffersList]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{OffersList.length} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get" >
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={handleClickSorting}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${optionsListClassName}`} >
          {OPTIONS.map((option) => <OptionSort key="option" handleClickOption={handleClickOption} optionClassName={optionClassName} option={option}/>)}
        </ul>
      </form>
      <CardList className={'cities__places-list places__list tabs__content' } cardClassName={'cities'} handleCardOver={handleCardOver} />
    </section>
  );
}

export default CitiesPlaces;
