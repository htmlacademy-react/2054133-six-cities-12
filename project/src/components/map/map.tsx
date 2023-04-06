import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../store';
import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offer';

type MapProps = {
  className: string;
  height: string;
  currentOfferId?: number | string;
}

function Map({className, height, currentOfferId}: MapProps): JSX.Element {

  const param = useParams();

  const offersList = useAppSelector((state) => state.offersListCopy);
  const nearbyOffersList = useAppSelector((state) => state.nearbyOffersList);

  const currentCityData = offersList[0].city;

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
  const currentGroup = useRef<LayerGroup>();

  let offersOnMap: Offer[] = []; // Верное ли решение? Использовать useMemo?

  if (param.id) {
    offersOnMap = nearbyOffersList;
  } else {
    offersOnMap = offersList;
  }

  useEffect(() => {

    if (map) {
      markersGroup.current?.remove();
      markersGroup.current = new LayerGroup().addTo(map);

      currentGroup.current?.remove();
      currentGroup.current = new LayerGroup().addTo(map);

      map.flyTo([
        currentCityData.location.latitude,
        currentCityData.location.longitude
      ], currentCityData.location.zoom);

      offersOnMap.forEach((offer) => {
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
  }, [map, offersOnMap, defaultCustomIcon, currentCityData, currentCustomIcon, currentOfferId]);

  return (
    <section className={className} style={{height: height}} ref={mapRef}></section>
  );
}

export default Map;
