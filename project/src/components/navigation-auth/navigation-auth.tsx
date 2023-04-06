import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../store';
import { logoutAction } from '../../store/api-action';

function NavigationAuth() {

  const dispatch = useAppDispatch();

  const handleOutClick = () => {
    dispatch(logoutAction());
  };

  return(
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Main} onClick={handleOutClick}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default NavigationAuth;
