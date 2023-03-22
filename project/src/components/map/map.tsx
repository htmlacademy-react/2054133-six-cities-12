import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { OfferType } from '../../types/offer';

type MapProp = {
  offersData: OfferType[];
}

function Map({offersData}: MapProp): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, offersData});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg', // '../../../public/img/pin-active.svg' не получается добавить иконку или './public/img/pin-active.svg'
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offersData.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offersData]);


  return (
    <section className="cities__map map" style={{height: 'auto'}} ref={mapRef}></section>
  );
}

export default Map;
