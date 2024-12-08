import axios from "axios";
import ResponseAllPostsInterface from "@/types/ResponseAllPostsInterface";

const collectAllPosts = async (): Promise<ResponseAllPostsInterface> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/post/all`
    );

    return response.data;
  } catch (error: any) {
    return {
      ok: false,
      message: `Ocorreu um erro ao buscar os posts: ${error.message}`,
      posts: [],
    };
  }
};

export default collectAllPosts;
