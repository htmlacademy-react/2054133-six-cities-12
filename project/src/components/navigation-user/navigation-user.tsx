import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { AppRoute } from '../../const';
import { getFavoriteOffersListCopy } from '../../store/offers-data/offers-data-selectors';
import { getUserData } from '../../store/user-data/user-data-selectors';


function NavigationUser(): JSX.Element {

  const favoritesList = useAppSelector(getFavoriteOffersListCopy);
  const userLogin = useAppSelector(getUserData);

  const favoritesCount = favoritesList.filter((offer) => offer.isFavorite).length;

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          {userLogin?.avatarUrl && <img src={userLogin?.avatarUrl} alt="avatar"></img>}
        </div>
        <span className="header__user-name user__name">{userLogin?.email}</span>
        <span className="header__favorite-count">{favoritesCount}</span>
      </Link>
    </li>
  );
}

export default NavigationUser;
