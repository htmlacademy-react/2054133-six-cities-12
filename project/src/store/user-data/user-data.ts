import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchUserDataAction } from '../api-action';
import UserData from '../../types/user-data';

type TinitialState = {
  userLogin: UserData | null;
}

const initialState: TinitialState = {
  userLogin: null,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    removeUserData: (state, action: PayloadAction<null>) => {
      state.userLogin = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserDataAction.fulfilled, (state, action) => {
        state.userLogin = action.payload;
      });
  }
});

export const { removeUserData } = userData.actions;
