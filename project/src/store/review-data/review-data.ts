import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchCommentsAction, sendReviewAction } from '../api-action';
import { UserComment } from '../../types/user';

type TInitialState = {
  reviewsList: UserComment[];
}

const initialState: TInitialState = {
  reviewsList: [],
};

export const reviewData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
      });
  }
});
