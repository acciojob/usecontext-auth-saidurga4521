import React, { useState, useContext, createContext } from "react";
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [ishuman, setIsHuman] = useState(false);
  return (
    <AuthContext.Provider value={{ ishuman, setIsHuman }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
