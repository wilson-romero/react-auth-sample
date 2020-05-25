import React, { useState, createContext, useEffect } from 'react';
import { useAuth } from './useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const auth = useAuth();
  const { data, error } = auth;

  const handleLogin = (data) => {
    auth.signIn(data);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthenticated(false);
  };

  useEffect(() => {
    if (error === '' && data.accessToken) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [data, error]);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        error,
        setAuthenticated,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
