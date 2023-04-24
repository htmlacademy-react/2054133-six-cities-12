import { NameSpace } from '../../const';
import { State } from '../../types/state';
import UserData from '../../types/user-data';

export const getUserData = (state: State): UserData | null => state[NameSpace.User].userLogin;
