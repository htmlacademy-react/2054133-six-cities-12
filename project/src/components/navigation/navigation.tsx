import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store';
import NavigationUser from '../navigation-user/navigation-user';
import NavigationAuth from '../navigation-auth/navigation-auth';
import NavigationNoAuth from '../navigation-no-auth/navigation-no-auth';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

function Navigation(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth && <NavigationUser />}
        {authorizationStatus === AuthorizationStatus.Auth ? <NavigationAuth /> : <NavigationNoAuth />}
      </ul>
    </nav>
  );
}

export default Navigation;
