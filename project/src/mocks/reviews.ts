import { UserComment } from '../types/user';

const ReviewsData: UserComment[] = [
  {
    'id': 1,
    'user': {
      'id': 17,
      'isPro': false,
      'name': 'Emely',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/8.jpg'
    },
    'rating': 4,
    'comment': 'I stayed here for one night and it was an unpleasant experience.',
    'date': '2023-02-26T07:31:24.950Z'
  },
  {
    'id': 2,
    'user': {
      'id': 16,
      'isPro': true,
      'name': 'Mollie',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/7.jpg'
    },
    'rating': 4,
    'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    'date': '2023-01-31T07:31:24.950Z'
  },
  {
    'id': 3,
    'user': {
      'id': 13,
      'isPro': false,
      'name': 'Zak',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/4.jpg'
    },
    'rating': 5,
    'comment': 'I stayed here for one night and it was an unpleasant experience.',
    'date': '2022-12-21T07:31:24.950Z'
  }
];

export { ReviewsData };
