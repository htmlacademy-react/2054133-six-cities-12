import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import PrivateRoute from '../private-route/private-route';
import { UserComment } from '../../types/user';


type AppScreenProps = {
  offersData: Offer[];
  reviewsData: UserComment[];
};

function App({offersData, reviewsData}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <HelmetProvider>
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
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
