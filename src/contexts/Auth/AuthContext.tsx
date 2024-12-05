"use client";

import { createContext, useEffect, useState } from "react";
import { IAuthContext } from "./types/AuthContextInterface";
import AuthUser from "@/services/api/auth/AuthUser";
import IUser from "../../types/UserInterface";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ name: "", role: "" });

  // ====================
  const doLogin = async (user: IUser): Promise<boolean> => {
    try {
      await AuthUser(user);
      setIsLogged(true);
      setUser(user);
      return true;
    } catch (error: any) {
      setIsLogged(false);
      setUser({ name: "", role: "" });
      throw new Error(error.message || "Erro ao autenticar");
    }
  };

  const doLogout = () => {
    setIsLogged(false);
    return true;
  };
  // ====================

  const checkUserCookie = () => {
    console.log("Verificando cookie...");
  };

  useEffect(() => {
    checkUserCookie();
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, user, doLogin, doLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
