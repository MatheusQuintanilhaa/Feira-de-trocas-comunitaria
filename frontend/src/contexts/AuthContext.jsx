import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/apiServices";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    const savedId = localStorage.getItem("id");

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
          setUserId(savedId || parsedUser.id);
          setToken(token);
        } else {
          console.warn("Dados de usuário inválidos no localStorage");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("id");
        }
      } catch (error) {
        console.error("Erro ao recuperar dados do usuário:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("id");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    try {
      const response = await authService.login(email, senha);

      setUserId(response.id);
      setToken(response.token);

      setUser({
        id: response.id,
        nome: response.nome,
        email: response.email,
        isAdmin: response.isAdmin,
      });

      localStorage.setItem("id", response.id);
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
      setUserId(null);
      setToken(null);
      setUser(null);

      localStorage.removeItem("id");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      setUserId(null);
      setToken(null);
      setUser(null);
    }
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return userId !== null && token !== null && token.trim() !== "";
  };

  const value = {
    userId,
    token,
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
export const useAuth = () => useContext(AuthContext);
