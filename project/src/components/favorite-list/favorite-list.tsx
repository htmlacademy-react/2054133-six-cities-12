import { Offer } from '../../types/offer';
import FavoriteCityCard from '../favorite-city-card/favorite-city-card';
import { useAppSelector } from '../../store';
import { getFavoriteOffersListCopy } from '../../store/offers-data/offers-data-selectors';

function FavoriteList() {

  const favoritesList = useAppSelector(getFavoriteOffersListCopy);

  const getFavoriteCities = () => {

    const cities:Record<string, Offer[]> = {};

    favoritesList.forEach((offer) => {
      if (offer.city.name in cities) {
        return cities[offer.city.name].push(offer);
      }
      cities[offer.city.name] = [offer];
    });

    return cities;
  };

  return (
    <ul className="favorites__list">
      {Object.keys(getFavoriteCities()).map((city) => <FavoriteCityCard key={city} city={city} />)}
    </ul>
  );
}

export default FavoriteList;
