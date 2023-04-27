import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { Link, Navigate } from 'react-router-dom';
import { loginAction } from '../../store/api-action';
import AuthData from '../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { getRandomArrayElement } from '../../utils';
import { CITIES } from '../../const';
import { changeCityAction, filterOffersAction } from '../../store/offers-data/offers-data';

function LoginScreen(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthorizationStatus);
  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={AppRoute.Main} />
    );
  }

  const cityButton = getRandomArrayElement(CITIES);

  const handleCityLink = () => {
    dispatch(changeCityAction(cityButton));
    dispatch(filterOffersAction(cityButton));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={loginRef} required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[A-Za-zА]).{2,}" title="The password must contain at least one letter and a number" ref={passwordRef} required/>
              </div>
              <button className="login__submit form__submit button" type="submit" >Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleCityLink}>
                <span>{cityButton}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
