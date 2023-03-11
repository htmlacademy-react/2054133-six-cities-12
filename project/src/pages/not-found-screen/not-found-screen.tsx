import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import classes from './not-found-screen.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div>
      <h1 className={classes.title}>404 Not Found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFoundScreen;
