import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { sendReviewAction } from '../../store/api-action';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, MIN_RATING } from '../../const';
import { getReviewSendingStatus } from '../../store/review-data/review-data-selectors';

type userReviewFormProps = {
  offerId: number;
}

function UserReviewForm({offerId}: userReviewFormProps) {

  const [userComment, setUserComment] = useState({comment: '', rating: 0,});

  const dispatch = useAppDispatch();

  const isReviewSending = useAppSelector(getReviewSendingStatus);

  const cleanForm = () => {
    setUserComment({comment: '', rating: 0,});
  };

  const isTextAreaDisabled = isReviewSending;

  const isButtonDisabled = () => {
    if (
      userComment.rating < MIN_RATING
      || userComment.comment.length <= MIN_COMMENT_LENGTH
      || userComment.comment.length > MAX_COMMENT_LENGTH
      || isReviewSending
    ) {
      return true;
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isButtonDisabled()) {
      return;
    }

    const reviewData = {
      hotelId: offerId,
      comment: userComment.comment,
      rating: userComment.rating,
    };

    dispatch(sendReviewAction(reviewData));
    cleanForm();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div
        className="reviews__rating-form form__rating"
        onChange={({target}: ChangeEvent<HTMLInputElement>) => setUserComment({...userComment, [target.name]: target.value})}
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
        value={userComment.comment}
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => setUserComment({...userComment, comment: target.value})}
        disabled={isTextAreaDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled()}>Submit</button>
      </div>
    </form>
  );
}

export default UserReviewForm;
