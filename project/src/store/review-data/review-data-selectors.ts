import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserComment } from '../../types/user';

export const getCommentsData = (state: State): UserComment[] => state[NameSpace.Review].reviewsList;

export const getReviewSendingStatus = (state: State): boolean => state[NameSpace.Review].isReviewSending;
