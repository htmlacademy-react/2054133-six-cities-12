import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { Offer } from '../types/offer';
import { ApiRoute } from '../const';
import AuthData from '../types/auth-data';
import LoginData from '../types/login-data';
import { dropToken, saveToken } from '../services/token';
import { Review, UserComment } from '../types/user';
// import { toast } from 'react-toastify';

const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
    // dispatch(setOffersDataLoadingStatus(true));
    // try {
    //   const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    //   dispatch(loadOffersAction(data));
    // }
    // catch (error) {
    //   toast.error('Whoops, failed to get data from the server');
    // }
    // finally {
    //   dispatch(setOffersDataLoadingStatus(false));
    // }
  },
);

const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Favorite);

    return data;
    // try {
    //   const {data} = await api.get<Offer[]>(ApiRoute.Favorite);
    //   dispatch(loadFavoritesAction(data));
    // }
    // catch (error) {
    //   toast.error('Whoops, failed to get data from the server');
    // }
  },
);

const sendFavoritesAction = createAsyncThunk<Offer, {id: number; isFavorite: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendFavorites',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<Offer>(`favorite/${id}/${isFavorite}`);

    return data;
    // try {
    //   const {data} = await api.post<Offer>(`favorite/${id}/${isFavorite}`);
    //   dispatch(addFavoritesAction(data));
    // }
    // catch (error) {
    //   toast.error('Whoops, failed to post data to the server');
    // }
  },
);

const fetchOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`/hotels/${offerId}`);

    return data;
    // dispatch(setRoomDataLoadingStatus(true));
    // try {
    //   const {data} = await api.get<Offer>(`/hotels/${offerId}`);
    //   dispatch(loadOfferAction(data));
    // }
    // catch (error) {
    //   toast.error('Whoops, failed to get data from the server');
    // }
    // finally {
    //   dispatch(setRoomDataLoadingStatus(false));
    // }
  },
);

const fetchNearbyOffersAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`/hotels/${offerId}/nearby`);

    return data;
    // try {
    //   const {data} = await api.get<Offer[]>(`/hotels/${offerId}/nearby`);
    //   dispatch(loadNearbyOffersAction(data));
    // }
    // catch (error) { toast.error('Whoops, failed to get data from the server'); }
  },
);

const fetchCommentsAction = createAsyncThunk<UserComment[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsAction',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<UserComment[]>(`/comments/${offerId}`);

    return data;
    // try {
    //   const {data} = await api.get<UserComment[]>(`/comments/${offerId}`);
    //   dispatch(loadComments(data));
    // }
    // catch (error) { toast.error('Whoops, failed to get data from the server'); }
  },
);

const sendReviewAction = createAsyncThunk<UserComment[], Review, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    const {data: review} = await api.post<UserComment[]>(`/comments/${hotelId}`, {comment, rating});

    return review;
    // try {
    //   const {data: review} = await api.post<UserComment[]>(`/comments/${hotelId}`, {comment, rating});
    //   dispatch(addReview(review));
    // }
    // catch (error) { toast.error('Whoops, failed to post data to the server'); }
  },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(ApiRoute.Login);
  },
);

const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<LoginData>(ApiRoute.Login, {email, password});
    saveToken(token);
  }
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
  }
);

const fetchUserDataAction = createAsyncThunk<LoginData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchUserData',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<LoginData>(ApiRoute.Login);

    return data;

    // try {
    //   const {data} = await api.get<UserData>(ApiRoute.Login);
    //   dispatch(getUserData(data));
    // }
    // catch {
    //   toast.error('Whoops, failed to get user data');
    // }
  }
);

export {
  fetchOffersAction,
  fetchFavoritesAction,
  fetchOfferAction,
  fetchNearbyOffersAction,
  fetchCommentsAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  sendReviewAction,
  fetchUserDataAction,
  sendFavoritesAction
};
