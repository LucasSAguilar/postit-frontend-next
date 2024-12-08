import IPost from "@/types/PostInterface";
import ResponseInsertPostInterface from "@/types/ResponseInsertPostInterface";
import axios from "axios";
import Cookie from "js-cookie";

const insertNewPost = async (
  newPost: IPost
): Promise<ResponseInsertPostInterface> => {
  try {
    const cookie = Cookie.get("token");

    if (!cookie) {
      throw new Error("Usuário não autenticado");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/post`,
      newPost,
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(`Ocorreu um erro ao inserir o post ${error.message}`);
  }
};

export default insertNewPost;
