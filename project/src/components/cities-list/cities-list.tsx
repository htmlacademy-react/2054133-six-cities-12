import { CITIES } from '../../const';
import City from '../city/city';

type CitiesListProps = {
  currentCity: string;
}

function CitiesList({currentCity}: CitiesListProps): JSX.Element {

  return (
    <ul className='locations__list tabs__list' >
      {CITIES.map((cityName) => <City key={cityName} cityName={cityName} currentCity={currentCity} />)}
    </ul>
  );
}

export default CitiesList;
