import axios from "axios";

const returnNewPosts = () =>
  axios
    .get(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/post/refresh?timestamp=${new Date().toISOString()}`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Erro ao buscar posts:", error);
    });

export default returnNewPosts;
