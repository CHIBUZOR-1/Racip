"use client";

import axios from "axios";
import { createContext } from "react";

axios.defaults.withCredentials = true; // <-- SAFE HERE

interface AuthContextType {}

export const AuthContext = createContext<AuthContextType>({});

export default function AuthContextProvider({ children }: any) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}
