import { MutableRefObject, useEffect, useRef, useState } from 'react';
import leaflet, { Map } from 'leaflet';
import { Offer } from '../types/offer';

type useMapProp = {
  mapRef: MutableRefObject<null>;
  offersData: Offer[];
}

function useMap({mapRef, offersData}: useMapProp) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: offersData[0].city.location.latitude,
          lng: offersData[0].city.location.longitude,
        },
        zoom: offersData[0].city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</  a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offersData]);

  return map;
}

export default useMap;
