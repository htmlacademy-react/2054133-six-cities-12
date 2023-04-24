import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { changeCityAction, filteringOffersAction } from '../../store/action';

type CityProps = {
  cityName: string;
  currentCity: string;
}

function City({cityName, currentCity}: CityProps): JSX.Element {

  const getCurrentCityClassName = () => currentCity === cityName ? 'tabs__item--active' : '';

  const dispatch = useAppDispatch();

  const handleCityChange = (newCity: string) => {
    dispatch(changeCityAction(newCity));
    dispatch(filteringOffersAction(newCity));
    // dispatch(fetchOffersAction()); // временное решение для переключения между городами
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
