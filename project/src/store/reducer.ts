import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, OPTIONS, defaultCity } from '../const';
import { SortToHigh, SortToLow, SortTopRating } from '../utils';
import { loadOfferAction, changeCityAction, filteringOffersAction, loadFavoritesAction, loadOffersAction, requierAuthorizationStatus, sortingOffersAction, setOffersDataLoadingStatus, loadNearbyOffersAction, loadComments } from './action';
import { Offer } from '../types/offer';
import { UserComment } from '../types/user';

type TInitialState = {
  currentCity: string;
  offersList: Offer[];
  offersListCopy: Offer[];
  favoriteOffersList: Offer[];
  favoriteOffersListCopy: Offer[];
  currentOffer: Offer | null;
  isLoadingOffersData: boolean;
  reviewsList: UserComment[];
  nearbyOffersList : Offer[];
  authorizationStatus: AuthorizationStatus;
}

const initialState: TInitialState = {
  currentCity: defaultCity,
  offersList: [],
  offersListCopy: [],
  favoriteOffersList: [],
  favoriteOffersListCopy: [],
  currentOffer: null,
  isLoadingOffersData: false,
  reviewsList: [],
  nearbyOffersList : [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offersList = action.payload;
      state.offersListCopy = state.offersList.filter((offer) => offer.city.name === state.currentCity);
    })
    .addCase(loadFavoritesAction, (state, action) => {
      state.favoriteOffersList = action.payload;
      state.favoriteOffersListCopy = action.payload;
    })
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(filteringOffersAction, (state, action) => {
      state.offersListCopy = state.offersList.filter((offer) => offer.city.name === action.payload);
    })
    .addCase(loadOfferAction, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearbyOffersAction, (state, action) => {
      state.nearbyOffersList = action.payload;
    })
    .addCase(requierAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isLoadingOffersData = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.reviewsList = action.payload;
    })
    .addCase(sortingOffersAction, (state, action) => {
      if (action.payload.sortType === OPTIONS.POPULAR) {
        state.offersListCopy = state.offersListCopy.filter((offer) => offer.city.name === action.payload.city);
      }
      if (action.payload.sortType === OPTIONS.PRICE_TO_HIGH) {
        state.offersListCopy = state.offersListCopy.sort(SortToHigh);
      }
      if (action.payload.sortType === OPTIONS.PRICE_TO_LOW) {
        state.offersListCopy = state.offersListCopy.sort(SortToLow);
      }
      if (action.payload.sortType === OPTIONS.TOP_RATED) {
        state.offersListCopy = state.offersListCopy.sort(SortTopRating);
      }
    });
});

export { reducer };
