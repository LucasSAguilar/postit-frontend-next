import IUser from "../../../types/UserInterface";

export interface IAuthContext {
  isLogged: boolean;
  user: IUser;
  doLogin: (user: IUser) => Promise<boolean>;
  doLogout: () => boolean;
}
