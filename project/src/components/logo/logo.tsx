import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): JSX.Element {
  const location = useLocation();
  const isMain = () => location.pathname === AppRoute.Main ? 'header__logo-link header__logo-link--active' : 'header__logo-link';

  return (
    <div className="header__left">
      <Link className={isMain()} to={AppRoute.Main}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export default Logo;
