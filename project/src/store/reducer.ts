import { createReducer } from '@reduxjs/toolkit';
import { OPTIONS } from '../const';
import { FavoriteOffers } from '../mocks/favorite-offers';
import { Offers } from '../mocks/offers';
import { ReviewsData } from '../mocks/reviews';
import { SortToHigh, SortToLow, SortTopRating } from '../utils';
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
        state.offersList = state.offersList.sort(SortToHigh);
      }
      if (action.payload.sortType === OPTIONS.PRICE_TO_LOW) {
        state.offersList = state.offersList.sort(SortToLow);
      }
      if (action.payload.sortType === OPTIONS.TOP_RATED) {
        state.offersList = state.offersList.sort(SortTopRating);
      }
    });
});

export { reducer };
