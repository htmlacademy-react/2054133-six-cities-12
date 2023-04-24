import { useAppSelector } from '../../store';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteCityCardProps = {
  city: string;
};

function FavoriteCityCard({city}: FavoriteCityCardProps) {

  const favoritesList = useAppSelector((state) => state.favoriteOffersListCopy);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        {favoritesList.map((offer) => offer.city.name === city && <FavoriteCard key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
}

export default FavoriteCityCard;
