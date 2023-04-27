import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeCityAction, filterOffersAction } from '../../store/offers-data/offers-data';
import { getCurrentCity } from '../../store/offers-data/offers-data-selectors';
import { useCallback } from 'react';

type CityProps = {
  cityName: string;
}

function City({cityName}: CityProps): JSX.Element {

  const currentCity = useAppSelector(getCurrentCity);

  const getCurrentCityClassName = () => currentCity === cityName ? 'tabs__item--active' : '';

  const dispatch = useAppDispatch();

  const handleCityChange = useCallback(() => {
    dispatch(changeCityAction(cityName));
    dispatch(filterOffersAction(cityName));
  }, [cityName, dispatch]);

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${getCurrentCityClassName()}`} to="/" onClick={handleCityChange}>
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

export default City;
