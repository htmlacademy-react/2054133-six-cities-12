const toHundredProportion = 10 * 2;
const getRating = (rating:number) => `${Math.round(rating) * toHundredProportion}%`;

const getComponentIsBoolean = (value: boolean, component: JSX.Element) => value ? component : '';

export {getRating, getComponentIsBoolean};
