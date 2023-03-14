// import * as faker from 'faker';
import { OfferType } from '../types/offer';

const Offers: OfferType[] = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'https://i.pravatar.cc/128',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 1,
    'images': [
      'img/1.png'
    ],
    'isFavorite': false,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'http://picsum.photos/300/200?r=0.0762163005163319',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment'
  },
  {
    'bedrooms': 1,
    'city': {
      'location': {
        'latitude': 51.370216,
        'longitude': 3.895168,
        'zoom': 10
      },
      'name': 'Madrid'
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'https://i.pravatar.cc/128',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 2,
    'images': [
      'img/1.png'
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'http://picsum.photos/300/200?r=0.0762563205163319',
    'price': 350,
    'rating': 4.8,
    'title': 'Loft Studio in the Central Area',
    'type': 'room'
  },
  {
    'bedrooms': 2,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Paris'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'https://i.pravatar.cc/128',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 3,
    'images': [
      'img/1.png'
    ],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'http://picsum.photos/300/200?r=0.0762563005113319',
    'price': 182,
    'rating': 4.8,
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment'
  },
  {
    'bedrooms': 5,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'https://i.pravatar.cc/128',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 4,
    'images': [
      'img/1.png'
    ],
    'isFavorite': false,
    'isPremium': true,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'http://picsum.photos/300/200?r=0.0762563005163419',
    'price': 240,
    'rating': 4.8,
    'title': 'The Pondhouse - A Magical Place',
    'type': 'flat'
  },
];

export { Offers };
