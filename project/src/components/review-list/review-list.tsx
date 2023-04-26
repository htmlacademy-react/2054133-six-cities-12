import { useAppSelector } from '../../store';
import { getCommentsData } from '../../store/review-data/review-data-selectors';
import { SortDate } from '../../utils';
import Review from '../review/review';

function ReviewList(): JSX.Element {

  const commentsList = useAppSelector(getCommentsData);

  return (
    <ul className="reviews__list">
      {commentsList.slice(-10).sort(SortDate).map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
