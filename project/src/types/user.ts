type GenerUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type UserCommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: GenerUser;
};

export type { UserCommentType };
