import { useState, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import NearPlacesCard from '../../components/near-places-card/near-places-card';
import PremiumInfoRoom from '../../components/premium-info/premium-info-room';
import ReviewList from '../../components/review-list/review-list';
import UserStatus from '../../components/user-status/user-status';
import { OfferType } from '../../types/offer';
import { UserCommentType } from '../../types/user';
import { getComponentIsBoolean, getRating } from '../../utils';


type RoomScreenProps = {
  offersData: OfferType[];
  reviewsData: UserCommentType[];
}

function RoomScreen({offersData, reviewsData}: RoomScreenProps): JSX.Element {
  const [UserReview, setUserReview] = useState({rating: '', review: ''});

  const params = useParams();
  const currentOffer = offersData.find((offer) => offer.id === Number(params.id));

  if (!currentOffer) {
    return <Navigate to={'/'}/>;
  }

  const {description, host, title, images, isPremium, rating, isFavorite, type, bedrooms, maxAdults, price, goods} = currentOffer;

  const otherOffersData = offersData.filter((offer) => offer.id !== currentOffer.id);

  const getFavoriteClassName = () => isFavorite ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button';
  const getAdultsTitle = (adultsCount: number): string => adultsCount <= 1 ? `Max ${adultsCount} adult` : `Max ${adultsCount} adults`;
  const getBedroomsTitle = (bedroomsCount: number): string => bedroomsCount <= 1 ? `${bedroomsCount} bedroom` : `${bedroomsCount} bedrooms`;
  const userStatus = getComponentIsBoolean(host.isPro, UserStatus());
  const premiumComponent = getComponentIsBoolean(isPremium, PremiumInfoRoom());

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation offersData={offersData}/>
          </div>
        </div>
      </header>

      <Helmet>
        <title>6 cities: property</title>
      </Helmet>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(-6).map((image) => <div className="property__image-wrapper" key={image}><img className="property__image" src={image} alt="Photo studio"/></div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premiumComponent}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={getFavoriteClassName()} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {getBedroomsTitle(bedrooms)}
                </li>
                <li className="property__feature property__feature--adults">
                  {getAdultsTitle(maxAdults)}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => <li className="property__inside-item" key={good}>{good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {userStatus}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsData.length}</span></h2>
                <ReviewList reviewsData={reviewsData}/>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div
                    className="reviews__rating-form form__rating"
                    onChange={({target}: ChangeEvent<HTMLInputElement>) => setUserReview({...UserReview, [target.name]: target.value})}
                  >
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                  <textarea
                    className="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                    value={UserReview.review}
                    onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => setUserReview({...UserReview, [target.name]: target.value})}
                  >
                  </textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {otherOffersData.slice(-3).map((offer) => <NearPlacesCard key={offer.id} offerData={offer}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
