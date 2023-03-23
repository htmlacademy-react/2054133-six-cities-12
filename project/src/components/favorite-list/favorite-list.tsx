import { Offer } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteListProp = {
  offersData: Offer[];
};

function FavoriteList({offersData}: FavoriteListProp) {

  const getFavoritesOffers = offersData.filter((offer) => offer.isFavorite === true);

  const getFavoriteCities = () => {

    const cities:Record<string, Offer[]> = {};

    getFavoritesOffers.forEach((offer) => {
      if (offer.city.name in cities) {
        return cities[offer.city.name].push(offer);
      }
      cities[offer.city.name] = [offer];
    });

    return cities;
  };

  const favoriteCities = getFavoriteCities();

  return (
    <ul className="favorites__list">
      {Object.keys(favoriteCities).map((city) => <FavoriteCard key="" city={city} offersData={getFavoritesOffers}/>)}
    </ul>
  );
}

export default FavoriteList;
