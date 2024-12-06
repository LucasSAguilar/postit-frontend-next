import IUser from "./UserInterface";

export default interface IResponseAuthUserInterface {
  ok: boolean;
  user: IUser;
  token: string;
}
