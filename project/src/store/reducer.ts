import { createReducer } from '@reduxjs/toolkit';
import { OPTIONS } from '../const';
import { FavoriteOffers } from '../mocks/favorite-offers';
import { Offers } from '../mocks/offers';
import { ReviewsData } from '../mocks/reviews';
import { Offer } from '../types/offer';
import { changeCityAction, filteringOffersAction, sortingOffersAction } from './action';

const initialState = {
  currentCity: 'Paris',
  offersList: Offers.filter((offer) => offer.city.name === 'Paris'),
  favoriteOffersList: FavoriteOffers,
  reviewsList: ReviewsData,
  nearbyOffersList : Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(filteringOffersAction, (state, action) => {
      state.offersList = Offers.filter((offer) => offer.city.name === action.payload);
    })
    .addCase(sortingOffersAction, (state, action) => {
      if (action.payload.sortType === OPTIONS.POPULAR) {
        state.offersList = Offers.filter((offer) => offer.city.name === action.payload.city);
      }
      if (action.payload.sortType === OPTIONS.PRICE_TO_HIGH) {
        state.offersList = state.offersList.sort(high);
      }
      if (action.payload.sortType === OPTIONS.PRICE_TO_LOW) {
        state.offersList = state.offersList.sort(low);
      }
      if (action.payload.sortType === OPTIONS.TOP_RATED) {
        state.offersList = state.offersList.sort(rating);
      }
    });
});

const high = (a: Offer, b: Offer) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
};

const low = (a: Offer, b: Offer) => {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
};

const rating = (a: Offer, b: Offer) => {
  if (a.rating > b.rating) {
    return -1;
  }
  if (a.rating < b.rating) {
    return 1;
  }
  return 0;
};

export { reducer };
