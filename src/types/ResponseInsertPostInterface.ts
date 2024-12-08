import IPost from "./PostInterface";

export default interface ResponseInsertPostInterface {
    ok: boolean;
    message: string;
    post: IPost;
}