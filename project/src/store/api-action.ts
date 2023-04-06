import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { Offer } from '../types/offer';
import { loadOfferAction, loadFavoritesAction, loadOffersAction, requierAuthorizationStatus, setOffersDataLoadingStatus, loadNearbyOffersAction, loadComments } from './action';
import { ApiRoute, AuthorizationStatus } from '../const';
import AuthData from '../types/auth-data';
import UserData from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { UserComment } from '../types/user';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersDataLoadingStatus(true));
      const {data} = await api.get<Offer[]>(ApiRoute.Offers);
      dispatch(setOffersDataLoadingStatus(false));
      dispatch(loadOffersAction(data));
    }
    catch (error) { console.log('Error'); }
  },
);

const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(ApiRoute.Favorite);
      dispatch(loadFavoritesAction(data));
    }
    catch (error) { console.log('Error'); }
  },
);

const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`/hotels/${offerId}`);
      dispatch(loadOfferAction(data));
    }
    catch (error) { console.log('Error'); }
  },
);

const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`/hotels/${offerId}/nearby`);
      dispatch(loadNearbyOffersAction(data));
    }
    catch (error) { console.log('Error'); }
  },
);

const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserComment[]>(`/comments/${offerId}`);
      dispatch(loadComments(data));
    }
    catch (error) { console.log('Error'); }
  },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requierAuthorizationStatus(AuthorizationStatus.Auth));
    }
    catch {
      dispatch(requierAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requierAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requierAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export { fetchOffersAction, fetchFavoritesAction, fetchOfferAction, fetchNearbyOffersAction, fetchCommentsAction, checkAuthAction, loginAction, logoutAction };
