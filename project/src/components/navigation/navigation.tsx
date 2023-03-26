import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';

type NavgationProps = {
  offersData: Offer[];
}

function Navigation({offersData}: NavgationProps): JSX.Element {

  const getFavoritesCount = offersData.reduce((acc, item) => {
    if (item.isFavorite) {
      acc += 1;
    }
    return acc;
  },0);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to="/">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            <span className="header__favorite-count">{getFavoritesCount}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Login}>
            <span className="header__signout">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
