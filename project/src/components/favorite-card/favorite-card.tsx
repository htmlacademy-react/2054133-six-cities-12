import { useRef } from 'react';
import { useAppDispatch } from '../../store';
import { Offer } from '../../types/offer';
import { sendFavoritesAction } from '../../store/api-action';
import PremiumInfo from '../premium-info/premium-info';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRating } from '../../utils';

type FavoriteCardProps = {
  offer: Offer;
}

function FavoriteCard({offer}: FavoriteCardProps) {

  const dispatch = useAppDispatch();
  const buttonFavoriteRef = useRef<HTMLButtonElement | null>(null);

  const offerRating = getRating(offer.rating);

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

export default FavoriteCard;
