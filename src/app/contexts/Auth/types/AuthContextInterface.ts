import IUser from "./UserInterface";

export interface IAuthContext {
  isLogged: boolean;
  user: IUser;
  doLogin: () => void;
  doLogout: () => void;
}
