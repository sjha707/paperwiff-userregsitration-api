import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ childern }) => {
  return <AuthContext.Provider value="rajesh">{childern}</AuthContext.Provider>;
};
