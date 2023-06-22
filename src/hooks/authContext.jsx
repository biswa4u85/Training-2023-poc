import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const AppContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState("#4CAF50");
  // const [phone, setPhone] = useState(null);
  const [phone, setPhone] = useLocalStorage("phone", {});
  return (
    <AppContext.Provider value={{ user, setUser, phone, setPhone }}>
      {children}
    </AppContext.Provider>
  );
}
