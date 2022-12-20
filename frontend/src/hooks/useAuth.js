import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";

const AuthContext = createContext({});

// Destructuring the props
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: true,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Currently passing whatever value is declared in AuthContext.Provider
export default function useAuth() {
  return useContext(AuthContext);
}
