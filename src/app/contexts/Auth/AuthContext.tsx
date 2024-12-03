"use client";

import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IAuthContext } from "./types/AuthContextInterface";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ name: "", role: "" });
  const doLogin = () => setIsLogged(true);
  const doLogout = () => setIsLogged(false);

  const checkUserCookie = () => {
    console.log("Verificando cookie...");
    Cookies.get("token") ? doLogin() : doLogout();
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
