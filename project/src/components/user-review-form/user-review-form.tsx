import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { sendReviewAction } from '../../store/api-action';
import { CommentLength, MIN_RATING, ratingStarSetting } from '../../const';
import { getReviewSendingStatus } from '../../store/review-data/review-data-selectors';
import RatingStars from '../rating-stars/rating-stars';

type userReviewFormProps = {
  offerId: number;
}

function UserReviewForm({offerId}: userReviewFormProps) {

  const [userComment, setUserComment] = useState({review: '', rating: '0',});

  const dispatch = useAppDispatch();

  const isReviewSending = useAppSelector(getReviewSendingStatus);

  const cleanForm = () => {
    setUserComment({review: '', rating: '0',});
  };

  const isTextAreaDisabled = isReviewSending;

  const isButtonDisabled = () => {
    if (
      userComment.rating < MIN_RATING
      || userComment.review.length < CommentLength.Min
      || userComment.review.length > CommentLength.Max
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
      comment: userComment.review,
      rating: Number(userComment.rating),
      cleanForm,
    };

    dispatch(sendReviewAction(reviewData));

  };

  const handleChangeForm = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = target;

    setUserComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div
        className="reviews__rating-form form__rating"
      >
        {Object.keys(ratingStarSetting).reverse().map((number) => (
          <RatingStars
            number={number}
            key={number}
            title={ratingStarSetting[number]}
            value={userComment.rating}
            onChange={handleChangeForm}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userComment.review}
        onChange={handleChangeForm}
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
