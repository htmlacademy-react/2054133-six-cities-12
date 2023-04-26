import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getOffersListCopy = (state: State): Offer[] => state[NameSpace.Offers].offersListCopy;

export const getFavoriteOffersListCopy = (state: State): Offer[] => state[NameSpace.Offers].favoriteOffersListCopy;

export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Offers].currentOffer;

export const getNearbyOffersList = (state: State): Offer[] => state[NameSpace.Offers].nearbyOffersList;

export const getCurrentCity = (state: State): string => state[NameSpace.Offers].currentCity;

export const getIsLoadingOffersStatus = (state: State): boolean => state[NameSpace.Offers].isLoadingOffersData;

export const getIsLoadingRoomStatus = (state: State): boolean => state[NameSpace.Offers].isLoadingRoomData;
