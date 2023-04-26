import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../store';
import { useParams } from 'react-router-dom';
import { getNearbyOffersList, getOffersListCopy } from '../../store/offers-data/offers-data-selectors';
import { iconAnchor, iconSize } from '../../const';

type MapProps = {
  className: string;
  height: string;
  currentOfferId?: number | string;
}

function Map({className, height, currentOfferId}: MapProps): JSX.Element {

  const param = useParams();

  const offersList = useAppSelector(getOffersListCopy);
  const nearbyOffersList = useAppSelector(getNearbyOffersList);

  const currentCityData = offersList[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCityData);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [iconSize.width, iconSize.height],
    iconAnchor: [iconAnchor.width, iconAnchor.height],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [iconSize.width, iconSize.height],
    iconAnchor: [iconAnchor.width, iconAnchor.height],
  });

  const markersGroup = useRef<LayerGroup>();

  const offers = useMemo(() => {
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

      map.setView([
        currentCityData.location.latitude,
        currentCityData.location.longitude
      ], currentCityData.location.zoom);

      offers.forEach((offer) => {
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
  }, [map, offers, defaultCustomIcon, currentCityData, currentCustomIcon, currentOfferId, param.id]);

  return (
    <section className={className} style={{height: height}} ref={mapRef}></section>
  );
}

export default Map;
