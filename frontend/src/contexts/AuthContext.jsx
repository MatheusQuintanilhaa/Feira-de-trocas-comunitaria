import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/apiServices";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser && token.trim() !== "") {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (
          parsedUser &&
          parsedUser.id &&
          parsedUser.nome &&
          parsedUser.email
        ) {
          setUser(parsedUser);
        } else {
          console.warn("Dados de usuário inválidos no localStorage");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Erro ao recuperar dados do usuário:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    try {
      const response = await authService.login(email, senha);

      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.id,
          nome: response.nome,
          email: response.email,
          isAdmin: response.isAdmin,
        })
      );

      setUser({
        id: response.id,
        nome: response.nome,
        email: response.email,
        isAdmin: response.isAdmin,
      });

      return { success: true };
    } catch (error) {
      console.error("Erro no login:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Erro ao fazer login",
      };
    }
  };

  const register = async (nome, email, senha) => {
    try {
      await authService.register(nome, email, senha);

      const loginResult = await login(email, senha);

      if (!loginResult.success) {
        throw new Error(loginResult.message);
      }

      return loginResult;
    } catch (error) {
      console.error("Erro no registro:", error);
      throw new Error(
        error.response?.data?.message || error.message || "Erro ao criar conta"
      );
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      setUser(null);
    }
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return user !== null && token !== null && token.trim() !== "";
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, useAuth, AuthProvider };
