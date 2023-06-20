import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState("#4CAF50");
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
