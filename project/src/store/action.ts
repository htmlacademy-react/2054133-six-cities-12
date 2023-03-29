import { createAction } from '@reduxjs/toolkit';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILTER_OFFERS: 'FILTER_OFFERS',
  SORT_OFFERS: 'SORT_OFFERS',
} as const;

const changeCityAction = createAction(Action.CHANGE_CITY, (city: string) => ({payload: city}));

const filteringOffersAction = createAction(Action.FILTER_OFFERS, (city: string) => ({payload: city}));

const sortingOffersAction = createAction(Action.SORT_OFFERS, (city: string) => ({payload: []}));

export { Action, changeCityAction, filteringOffersAction, sortingOffersAction };
