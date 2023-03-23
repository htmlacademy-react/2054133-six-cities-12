import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';

type MapProps = {
  offersData: Offer[];
  className: string;
  height: string;
}

function Map({offersData, className, height}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offersData);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [28, 40],
    iconAnchor: [14, 40],
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
  }, [map, offersData, defaultCustomIcon]);


  return (
    <section className={className} style={{height: height}} ref={mapRef}></section>
  );
}

export default Map;
