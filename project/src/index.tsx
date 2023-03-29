import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Offers } from './mocks/offers';
import { ReviewsData } from './mocks/reviews';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersData={Offers}
        reviewsData={ReviewsData}
      />
    </Provider>
  </React.StrictMode>,
);
