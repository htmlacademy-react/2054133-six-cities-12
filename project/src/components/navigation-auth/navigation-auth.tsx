import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { fetchOffersAction, logoutAction } from '../../store/api-action';
import { removeUserData } from '../../store/user-data/user-data';
import { removeFavoriteOffers } from '../../store/offers-data/offers-data';

function NavigationAuth() {

  const dispatch = useAppDispatch();

  const handleOutClick = () => {
    dispatch(logoutAction());
    dispatch(removeUserData(null));
    dispatch(fetchOffersAction());
    dispatch(removeFavoriteOffers());
  };

  return(
    <li className="header__nav-item">
      <Link className="header__nav-link" to={'#'} onClick={handleOutClick}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default NavigationAuth;
