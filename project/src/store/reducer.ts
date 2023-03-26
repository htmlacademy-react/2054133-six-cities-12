import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../mocks/offers';
import { changeCityAction } from './action';

const initialState = {
  currentCity: 'Paris',
  offersList: Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    });
});

export { reducer };
