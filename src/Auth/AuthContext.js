/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useEffect } from 'react';
import { useAuth } from './useAuth';

const AuthContext = createContext();

const NAME_TOKEN = 'token';

function AuthProvider({ children }) {
  const auth = useAuth();

  const [authenticated, setAuthenticated] = useState(true);
  const { data, error } = auth;

  const handleLogin = (data) => {
    auth.signIn(data);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthenticated(false);
    localStorage.removeItem(NAME_TOKEN);
  };

  useEffect(() => {
    const token = localStorage.getItem(NAME_TOKEN);
    if (token) {
      setAuthenticated(true);
    } else if (error === '' && data.accessToken) {
      setAuthenticated(true);
      !token && localStorage.setItem(NAME_TOKEN, data.accessToken);
    } else {
      setAuthenticated(false);
      localStorage.removeItem(NAME_TOKEN);
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
