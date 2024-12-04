import axios from "axios";
import ResponseAllPostsInterface from "@/types/ResponseAllPostsInterface";

const collectAllPosts = async (): Promise<ResponseAllPostsInterface> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/post/all`
    );
    
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: "Erro ao buscar posts: " + error,
      posts: [],
    };
  }
};

export default collectAllPosts;
