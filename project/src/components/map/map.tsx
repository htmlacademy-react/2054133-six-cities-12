import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';

type MapProps = {
  filteredOffers: Offer[];
  className: string;
  height: string;
}

function Map({filteredOffers, className, height}: MapProps): JSX.Element {
  const getCityData = filteredOffers[0].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, getCityData);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [28, 40],
    iconAnchor: [14, 0],
  });

  useEffect(() => {
    if (map) {
      filteredOffers.forEach((offer) => {
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
  }, [map, filteredOffers, defaultCustomIcon]);


  return (
    <section className={className} style={{height: height}} ref={mapRef}></section>
  );
}

export default Map;
