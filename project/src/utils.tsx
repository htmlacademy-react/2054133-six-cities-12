import { Offer } from './types/offer';

const toHundredProportion = 10 * 2;
const getRating = (rating:number) => `${Math.round(rating) * toHundredProportion}%`;

const SortToHigh = (a: Offer, b: Offer) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
};

const SortToLow = (a: Offer, b: Offer) => {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
};

const SortTopRating = (a: Offer, b: Offer) => {
  if (a.rating > b.rating) {
    return -1;
  }
  if (a.rating < b.rating) {
    return 1;
  }
  return 0;
};

export { getRating, SortToHigh, SortToLow, SortTopRating };
