import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Offer } from './offer';
import { UserComment } from './user';
import UserData from './login-data';

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

type TOffersData = {
  offersList: Offer[];
  offersListCopy: Offer[];
  favoriteOffersList: Offer[];
  favoriteOffersListCopy: Offer[];
  isLoadingOffersData: boolean;
  currentOffer: Offer | null;
  isLoadingRoomData: boolean;
  nearbyOffersList: Offer[];
  currentCity: string;
}

type TReviewData = {
  reviewsList: UserComment[];
  isReviewSending: boolean;
}

type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
};

type TUserData = {
  userLogin: UserData | null;
}

export type { State, AppDispatch, TOffersData, TReviewData, TUserProcess, TUserData };
