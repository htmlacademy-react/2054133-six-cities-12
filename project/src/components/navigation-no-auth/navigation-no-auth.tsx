import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NavigationNoAuth() {

  return(
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Login} >
        <span className="header__signin">Sign in</span>
      </Link>
    </li>
  );
}

export default NavigationNoAuth;
