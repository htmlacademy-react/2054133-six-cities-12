import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './components/app/app';
import { Offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  CountPlaces: 320
} as const;

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App
        countPlaces = {Setting.CountPlaces}
        offersData = {Offers}
      />
    </HelmetProvider>
  </React.StrictMode>,
);
