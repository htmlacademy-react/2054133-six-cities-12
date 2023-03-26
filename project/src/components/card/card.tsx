import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { getRating } from '../../utils';
import PremiumInfo from '../premium-info/premium-info';

type CardProps = {
  offerData: Offer;
  cardClassName: string;
};

function Card({offerData, cardClassName}: CardProps): JSX.Element {
  const {price, previewImage, title, type, isPremium, isFavorite, rating, id} = offerData;

  const getFavoriteClassName = () => isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button';
  const offerRating = getRating(rating);

  return (
    <article className={`${cardClassName}__card place-card`} >
      {isPremium && <PremiumInfo className="place-card__mark"/>}
      <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Property}/${id}`} >
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place photo"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={getFavoriteClassName()} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offerRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
