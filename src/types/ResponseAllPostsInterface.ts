import IPost from "./PostInterface";

export default interface ResponseAllPostsInterface {
    ok: boolean;
    message: string;
    posts: IPost[];
  }
  