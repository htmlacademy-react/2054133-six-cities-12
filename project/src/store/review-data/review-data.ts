import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchCommentsAction, sendReviewAction } from '../api-action';
import { TReviewData } from '../../types/state';
import { toast } from 'react-toastify';

const initialState: TReviewData = {
  reviewsList: [],
  isReviewSending: false,
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
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewSending = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
        state.isReviewSending = false;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        toast.error('Whoops, failed to post review, please try again');
        state.isReviewSending = false;
      });
  }
});
