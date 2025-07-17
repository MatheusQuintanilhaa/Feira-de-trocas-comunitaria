import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏪</span>
              </div>
              <span className="text-xl font-bold">Feira de Trocas</span>
            </div>
            <p className="text-gray-300 mb-4">
              Promovendo o consumo consciente e fortalecendo vínculos
              comunitários através da troca de itens em bom estado.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 Feira de Trocas Comunitária. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-green-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/items"
                  className="hover:text-green-400 transition-colors"
                >
                  Explorar Itens
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-green-400 transition-colors"
                >
                  Entrar
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="hover:text-green-400 transition-colors"
                >
                  Cadastrar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="hover:text-green-400 transition-colors">
                  📚 Livros
                </span>
              </li>
              <li>
                <span className="hover:text-green-400 transition-colors">
                  👕 Roupas
                </span>
              </li>
              <li>
                <span className="hover:text-green-400 transition-colors">
                  🧸 Brinquedos
                </span>
              </li>
              <li>
                <span className="hover:text-green-400 transition-colors">
                  ⚽ Esportes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                🌱 Sustentabilidade • 🤝 Comunidade • ♻️ Reutilização
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
