import { MutableRefObject, useEffect, useRef, useState } from 'react';
import leaflet, { Map } from 'leaflet';
import { City } from '../types/offer';

function useMap(mapRef: MutableRefObject<null>, getCityData: City) {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: getCityData.location.latitude,
          lng: getCityData.location.longitude,
        },
        zoom: getCityData.location.zoom,
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
  }, [mapRef, getCityData]);

  return map;
}

export default useMap;
