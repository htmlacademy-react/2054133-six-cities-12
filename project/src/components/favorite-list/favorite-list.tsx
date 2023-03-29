import { Offer } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';
import { useAppSelector } from '../../store';

function FavoriteList() {

  const favoritesList = useAppSelector((state) => state.favoriteOffersList);

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
      {Object.keys(getFavoriteCities()).map((city) => <FavoriteCard key="" city={city} />)}
    </ul>
  );
}

export default FavoriteList;
