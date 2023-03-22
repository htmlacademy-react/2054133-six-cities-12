import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferType } from '../../types/offer';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import PrivateRoute from '../private-route/private-route';
import { UserComment } from '../../types/user';

type AppScreenProp = {
  countPlaces: number;
  offersData: OfferType[];
  reviewsData: UserComment[];
};

function App({countPlaces, offersData, reviewsData}: AppScreenProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offersData={offersData}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              countPlaces={countPlaces}
              offersData={offersData}
            />
          }
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={<RoomScreen offersData={offersData} reviewsData={reviewsData}/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
