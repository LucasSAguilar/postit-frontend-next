import IResponseAuthUserInterface from "@/types/ResponseAuthUserInterface";
import IUser from "@/types/UserInterface";
import axios from "axios";

const AuthUser = async (user: IUser): Promise<IResponseAuthUserInterface> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth`,
      { ...user }
    );

    if (!response.data.ok) {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        error.response.data.message || "Ocorreu um erro na autenticação"
      );
    } else if (error.request) {
      throw new Error("Erro de rede. Tente novamente mais tarde");
    } else {
      throw new Error("Ocorreu um erro desconhecido");
    }
  }
};

export default AuthUser;
