import { Offer } from '../../types/offer';
import City from '../city/city';

type CitiesListProp = {
  offersData: Offer[];
}

function CitiesList({offersData}: CitiesListProp): JSX.Element {

  const getCities = () => {
    const cities: string[] = [];

    offersData.forEach((offer) => {
      if (cities.includes(offer.city.name)) {
        return;
      }
      cities.push(offer.city.name);
    });

    return cities;
  };

  return (
    <ul className='locations__list tabs__list'>
      {getCities().map((cityName) => <City key={cityName} cityName={cityName}/>)}
    </ul>
  );
}

export default CitiesList;
