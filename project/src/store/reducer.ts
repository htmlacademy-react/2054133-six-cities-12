import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../mocks/offers';
import { changeCityAction, setOffersAction } from './action';

const initialState = {
  currentCity: 'Paris',
  offersList: Offers.filter((offer) => offer.city.name === 'Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offersList = Offers.filter((offer) => offer.city.name === action.payload);
    });
});

export { reducer };
