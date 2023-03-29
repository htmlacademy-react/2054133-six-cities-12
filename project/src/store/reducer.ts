import { createReducer } from '@reduxjs/toolkit';
import { FavoriteOffers } from '../mocks/favorite-offers';
import { Offers } from '../mocks/offers';
import { ReviewsData } from '../mocks/reviews';
import { changeCityAction, filteringOffersAction } from './action';

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
    });
});

export { reducer };
