"use client";

import { createContext, useState } from "react";
import { IAuthContext } from "./types/AuthContextInterface";
import Cookie from "js-cookie";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ name: "", role: "" });

  const hasCookieLogin = (): boolean => {
    if (Cookie.get("token") && Cookie.get("user")) {
      setIsLogged(true);
      setUser(JSON.parse(Cookie.get("user") as string));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLogged, setIsLogged, hasCookieLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
