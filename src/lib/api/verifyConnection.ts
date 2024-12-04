import axios from "axios";

const testServer = () =>
  axios
    .get(process.env.NEXT_PUBLIC_API_URL as string)
    .then((response) => {
      console.log("Servidor está online:", response.data);
    })
    .catch((error) => {
      console.log("Não houve respostas do servidor: ", error);
    });
export default testServer;
