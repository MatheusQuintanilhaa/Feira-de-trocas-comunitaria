import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg border-b-2 border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏪</span>
              </div>
              <span className="text-xl font-bold text-gray-800">
                Feira de Trocas
              </span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/items"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Explorar Itens
                </Link>
                <Link
                  to="/my-items"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Meus Itens
                </Link>
                <Link
                  to="/proposals"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Propostas
                </Link>
                <Link to="/create-item" className="btn-primary text-sm">
                  Adicionar Item
                </Link>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">
                    Olá, {user.nome}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Sair
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/items"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Explorar Itens
                </Link>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Entrar
                </Link>
                <Link to="/register" className="btn-primary text-sm">
                  Cadastrar
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2">
            {user ? (
              <>
                <Link
                  to="/items"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Explorar Itens
                </Link>
                <Link
                  to="/my-items"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Meus Itens
                </Link>
                <Link
                  to="/proposals"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Propostas
                </Link>
                <Link
                  to="/create-item"
                  className="btn-primary text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Adicionar Item
                </Link>
                <div className="flex items-center space-x-3 px-3">
                  <span className="text-sm text-gray-600">
                    Olá, {user.nome}
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Sair
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/items"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Explorar Itens
                </Link>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Cadastrar
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
