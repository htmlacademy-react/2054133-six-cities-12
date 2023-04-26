import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeCityAction, filteringOffersAction } from '../../store/offers-data/offers-data';
import { getCurrentCity } from '../../store/offers-data/offers-data-selectors';

type CityProps = {
  cityName: string;
}

function City({cityName}: CityProps): JSX.Element {

  const currentCity = useAppSelector(getCurrentCity);

  const getCurrentCityClassName = () => currentCity === cityName ? 'tabs__item--active' : '';

  const dispatch = useAppDispatch();

  const handleCityChange = (newCity: string) => {
    dispatch(changeCityAction(newCity));
    dispatch(filteringOffersAction(newCity));
  };

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${getCurrentCityClassName()}`} to="/" onClick={() => handleCityChange(cityName)}>
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

export default City;
