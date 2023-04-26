import { CITIES } from '../../const';
import City from '../city/city';

function CitiesList(): JSX.Element {

  return (
    <ul className='locations__list tabs__list' >
      {CITIES.map((cityName) => <City key={cityName} cityName={cityName} />)}
    </ul>
  );
}

export default CitiesList;
