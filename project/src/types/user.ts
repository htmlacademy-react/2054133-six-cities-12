type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type UserComment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

type Review = {
  hotelId: number;
  comment: string;
  rating: number;
}

export type { UserComment, Review };
