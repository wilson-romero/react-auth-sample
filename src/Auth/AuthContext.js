import React, { useState, createContext } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthenticated(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
