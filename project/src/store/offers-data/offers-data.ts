import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultCity, NameSpace, OPTIONS } from '../../const';
import { fetchFavoritesAction, fetchNearbyOffersAction, fetchOfferAction, fetchOffersAction, sendFavoritesAction } from '../api-action';
import { SortToHigh, SortToLow, SortTopRating } from '../../utils';
import { TOffersData } from '../../types/state';

const initialState: TOffersData = {
  offersList: [],
  offersListCopy : [],
  favoriteOffersList: [],
  favoriteOffersListCopy: [],
  isLoadingOffersData: true,
  currentOffer: null,
  isLoadingRoomData: true,
  nearbyOffersList: [],
  currentCity: defaultCity,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCityAction: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    changeCurrentOffer: (state, action: PayloadAction<boolean>) => {
      if (state.currentOffer) {
        state.currentOffer.isFavorite = action.payload;
      }
    },
    removeFavoriteOffers: (state) => {
      state.favoriteOffersList = [];
      state.favoriteOffersListCopy = [];
    },
    sortingOffersAction: (state, action: PayloadAction<{sortType: string; city: string}>) => {
      if (action.payload.sortType === OPTIONS.POPULAR) {
        state.offersListCopy = state.offersList.filter((offer) => offer.city.name === action.payload.city);
      }
      if (action.payload.sortType === OPTIONS.PRICE_TO_HIGH) {
        state.offersListCopy = state.offersListCopy.sort(SortToHigh);
      }
      if (action.payload.sortType === OPTIONS.PRICE_TO_LOW) {
        state.offersListCopy = state.offersListCopy.sort(SortToLow);
      }
      if (action.payload.sortType === OPTIONS.TOP_RATED) {
        state.offersListCopy = state.offersListCopy.sort(SortTopRating);
      }
    },
    filteringOffersAction: (state, action: PayloadAction<string>) => {
      state.offersListCopy = state.offersList.filter((offer) => offer.city.name === action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoadingOffersData = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.offersListCopy = state.offersList.filter((offer) => offer.city.name === state.currentCity);
        state.isLoadingOffersData = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoadingOffersData = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteOffersList = action.payload;
        state.favoriteOffersListCopy = action.payload;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoadingRoomData = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isLoadingRoomData = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoadingRoomData = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffersList = action.payload;
      })
      .addCase(sendFavoritesAction.fulfilled, (state, action) => {
        const data = action.payload;
        const currentOffer = state.favoriteOffersListCopy.find((item) => item.id === data.id);
        state.offersListCopy.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });
        state.offersList.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });
        state.nearbyOffersList.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });
        if (currentOffer) {
          state.favoriteOffersListCopy = state.favoriteOffersListCopy.filter((offer) => offer.id !== currentOffer.id);
        }
        else {
          state.favoriteOffersListCopy = [...state.favoriteOffersListCopy, data];
        }
      });
  }
});

export const { changeCityAction, changeCurrentOffer, removeFavoriteOffers, sortingOffersAction, filteringOffersAction } = offersData.actions;
