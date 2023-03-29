import { useAppSelector } from '../../store';
import Review from '../review/review.';

function ReviewList(): JSX.Element {

  const reviewList = useAppSelector((state) => state.reviewsList);

  return (
    <ul className="reviews__list">
      {reviewList.slice(-10).map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
