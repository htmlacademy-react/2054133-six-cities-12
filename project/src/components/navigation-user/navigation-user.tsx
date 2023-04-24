import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { AppRoute } from '../../const';


function NavigationUser(): JSX.Element {

  const favoritesList = useAppSelector((state) => state.favoriteOffersListCopy);
  const userLogin = useAppSelector((state) => state.userLogin);

  const getFavoritesCount = favoritesList.reduce((acc, item) => {
    if (item.isFavorite) {
      acc += 1;
    }
    return acc;
  },0);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          {userLogin?.avatarUrl && <img src={userLogin?.avatarUrl} alt="avatar"></img>}
        </div>
        <span className="header__user-name user__name">{userLogin?.email}</span>
        <span className="header__favorite-count">{getFavoritesCount}</span>
      </Link>
    </li>
  );
}

export default NavigationUser;
