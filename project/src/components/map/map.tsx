import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../store';
import { useParams } from 'react-router-dom';

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

  const mapOffers = useMemo(() => {
    if (param.id) {
      const currentOffer = offersList.find((offer) => offer.id === Number(param.id));
      if (currentOffer) {
        return [currentOffer, ...nearbyOffersList];
      }
    }
    return offersList;
  }, [nearbyOffersList, offersList, param.id]);

  useEffect(() => {

    if (map) {
      markersGroup.current?.remove();
      markersGroup.current = new LayerGroup().addTo(map);

      map.flyTo([
        currentCityData.location.latitude,
        currentCityData.location.longitude
      ], currentCityData.location.zoom);

      mapOffers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === currentOfferId) || (offer.id === Number(param.id))
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(markersGroup.current as LayerGroup);
      });
    }
  }, [map, mapOffers, defaultCustomIcon, currentCityData, currentCustomIcon, currentOfferId, param.id]);

  return (
    <section className={className} style={{height: height}} ref={mapRef}></section>
  );
}

export default Map;
