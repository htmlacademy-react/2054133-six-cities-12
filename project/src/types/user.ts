type GenerUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type User = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: GenerUser;
};

export type { User };
