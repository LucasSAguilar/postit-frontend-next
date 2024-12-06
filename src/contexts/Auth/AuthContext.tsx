"use client";

import { createContext, useEffect, useState } from "react";
import { IAuthContext } from "./types/AuthContextInterface";
import AuthUser from "@/services/api/auth/AuthUser";
import IUser from "../../types/UserInterface";
import Cookie from "js-cookie";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ name: "", role: "" });

  // ====================
  const doLogin = async (user: IUser): Promise<boolean> => {
    try {
      const response = await AuthUser(user);
      setIsLogged(true);
      setUser(user);
      Cookie.set("token", response.token);
      return false;
    } catch (error: any) {
      setIsLogged(false);
      setUser({ name: "", role: "" });
      throw new Error(error.message || "Erro ao autenticar");
    }
  };

  const doLogout = () => {
    Cookie.remove("token");
    setIsLogged(false);
    return true;
  };
  // ====================

  const checkUserCookie = () => {
    console.log(Cookie.get("token"));

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
