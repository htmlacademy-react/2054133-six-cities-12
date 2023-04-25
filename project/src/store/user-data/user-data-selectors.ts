import { NameSpace } from '../../const';
import { State } from '../../types/state';
import LoginData from '../../types/login-data';

export const getUserData = (state: State): LoginData | null => state[NameSpace.User].userLogin;
