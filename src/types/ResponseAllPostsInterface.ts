import IPost from "./PostInterface";

export default interface ResponseAllPostsInterface {
    success: boolean;
    message: string;
    posts: IPost[];
  }
  