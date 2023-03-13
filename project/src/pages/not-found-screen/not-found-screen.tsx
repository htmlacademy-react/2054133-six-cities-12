import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import classes from './not-found-screen.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <div className={classes.container}>
        <h1 className={classes.title}>404 Not Found</h1>
        <Link className={classes.link} to={AppRoute.Main}>Go back to the main page</Link>
      </div>
    </div>
  );
}

export default NotFoundScreen;
