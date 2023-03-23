import { Link } from 'react-router-dom';

type CityProp = {
  cityName: string;
}

function City({cityName}: CityProp): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="/">
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

export default City;
