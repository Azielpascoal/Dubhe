import React, { createContext, useState, useContext } from "react";
const AppContext = createContext();

export function ApplicationProvider({ children }) {
  const [token, setToken] = useState();
  const [nameUser, setNameUser] = useState();
  const [id, setID] = useState();
  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        nameUser,
        setNameUser,
        id,
        setID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApplication() {
  const context = useContext(AppContext);
  return context;
}
