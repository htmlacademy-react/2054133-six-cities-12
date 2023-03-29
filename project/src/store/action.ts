import { createAction } from '@reduxjs/toolkit';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS: 'FILL_OFFERS',
} as const;

const changeCityAction = createAction(Action.CHANGE_CITY, (city: string) => ({payload: city}));

const setOffersAction = createAction(Action.FILL_OFFERS, (city: string) => ({payload: city}));

export { changeCityAction, setOffersAction, Action };
