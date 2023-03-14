import { OfferType } from '../../types/offer';

type CardProp = {
  offer: OfferType;
};

function Card({offer}: CardProp): JSX.Element {
  const {price, previewImage, title, type, isPremium, isFavorite} = offer;

  const getPremiumElement = () => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';
  const getFavoriteClassName = () => isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button';


  return (
    <article className="cities__card place-card">
      {getPremiumElement()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place photo"/>
        </a>
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
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
