const toHundredProportion = 10 * 2;
const getRating = (rating:number) => `${Math.round(rating) * toHundredProportion}%`;

export {getRating};
