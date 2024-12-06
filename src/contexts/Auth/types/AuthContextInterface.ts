import IUser from "../../../types/UserInterface";

export interface IAuthContext {
  isLogged: boolean;
  user: IUser;
  setIsLogged: (isLogged: boolean) => void;
  setUser: (user: IUser) => void;

}
