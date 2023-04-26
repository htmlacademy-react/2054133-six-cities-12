import { useCallback, useState } from 'react';
import { useAppSelector } from '../../store';
import { getIsLoadingOffersStatus, getOffersListCopy } from '../../store/offers-data/offers-data-selectors';
import CitiesPlaces from '../cities-places/cities-places';
import NoCitiesPlaces from '../no-cities-places/no-cities-places';
import Map from '../map/map';


function CitiesBoard() {

  const isLoading = useAppSelector(getIsLoadingOffersStatus);
  const offersList = useAppSelector(getOffersListCopy);

  const isOffers = offersList.length >= 1;

  const [currentOfferId, setCurrentOfferId] = useState<number>();
  const handleCardOver = useCallback((offerId: number) => {
    if (offerId > 0) {
      return setCurrentOfferId(offerId);
    }
    setCurrentOfferId(-1);
  }, []);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        {(isOffers && !isLoading) && <CitiesPlaces onCardOver={handleCardOver} />}
        {(!isOffers && !isLoading) && <NoCitiesPlaces />}
        <div className="cities__right-section">
          {isOffers && <Map className={'cities__map map'} height={'auto'} currentOfferId={currentOfferId}/>}
        </div>
      </div>
    </div>
  );
}

export default CitiesBoard;
