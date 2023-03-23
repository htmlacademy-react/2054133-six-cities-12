import { UserComment } from '../../types/user';
import Review from '../review/review.';

type ReviewListProps = {
  reviewsData: UserComment[];
}

function ReviewList({reviewsData}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviewsData.slice(-10).map((review) => <Review key="review.id" review={review}/>)}
    </ul>
  );
}

export default ReviewList;
