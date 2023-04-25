import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import { offersData } from './offers-data/offers-data';
import { reviewData } from './review-data/review-data';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.UserProcess]: userProcess.reducer,
});
