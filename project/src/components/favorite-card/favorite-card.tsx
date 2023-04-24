import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { getRating } from '../../utils';
import PremiumInfo from '../premium-info/premium-info';
import { sendFavoritesAction } from '../../store/api-action';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoriteCardProps = {
  city: string;
};

function FavoriteCard({city}: FavoriteCardProps) {

  const favoritesList = useAppSelector((state) => state.favoriteOffersListCopy);

  const dispatch = useAppDispatch();
  const buttonFavoriteRef = useRef<HTMLButtonElement | null>(null);

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
        {favoritesList.map((offer) => {

          const offerRating = getRating(offer.rating);

          if (offer.city.name === city) {

            const handleFavoriteClick = () => {
              const data = {
                id: offer.id,
                isFavorite: 0
              };

              if (buttonFavoriteRef.current?.classList.contains('place-card__bookmark-button--active')) {
                dispatch(sendFavoritesAction(data));
              }
              else {
                data.isFavorite = 1;
                dispatch(sendFavoritesAction(data));
              }

            };

            return (
              <article className="favorites__card place-card" key={offer.id}>
                {offer.isPremium && <PremiumInfo className="place-card__mark"/>}
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <Link to={`${AppRoute.Property}/${offer.id}`}>
                    <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
                  </Link>
                </div>
                <div className="favorites__card-info place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;{offer.price}</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={handleFavoriteClick} ref={buttonFavoriteRef}>
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: offerRating}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="/">{offer.title}</a>
                  </h2>
                  <p className="place-card__type">{offer.type}</p>
                </div>
              </article>
            );
          }
          return null;
        })}
      </div>
    </li>
  );
}

export default FavoriteCard;
