"use client";

import { createContext, useState } from "react";
import { IAuthContext } from "./types/AuthContextInterface";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ name: "", role: "" });

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLogged, setIsLogged}}
    >
      {children}
    </AuthContext.Provider>
  );
};
