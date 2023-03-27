import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../store';

type MapProps = {
  className: string;
  height: string;
  currentOfferId?: number | string;
}

function Map({className, height, currentOfferId}: MapProps): JSX.Element {

  const OffersList = useAppSelector((state) => state.offersList);

  const currentCityData = OffersList[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCityData);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [28, 40],
    iconAnchor: [14, 0],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [28, 40],
    iconAnchor: [14, 0],
  });

  const markersGroup = useRef<LayerGroup>();

  useEffect(() => {

    if (map) {

      markersGroup.current = new LayerGroup().addTo(map);

      map.setView([
        currentCityData.location.latitude,
        currentCityData.location.longitude
      ], currentCityData.location.zoom);

      OffersList.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === currentOfferId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(markersGroup.current as LayerGroup);
      });
    }

    return () => {
      if (markersGroup.current) {
        markersGroup.current.remove();
      }
    };

  }, [map, OffersList, defaultCustomIcon, currentCityData, currentCustomIcon, currentOfferId]);

  return (
    <section className={className} style={{height: height}} ref={mapRef}></section>
  );
}

export default Map;
