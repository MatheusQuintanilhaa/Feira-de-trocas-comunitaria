import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              🏪 Feira de Trocas Comunitária
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transforme itens não utilizados em novas oportunidades. Conecte-se
              com sua comunidade e promova o consumo consciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <>
                  <Link to="/items" className="btn-primary text-lg px-8 py-3">
                    Explorar Itens
                  </Link>
                  <Link
                    to="/create-item"
                    className="btn-secondary text-lg px-8 py-3"
                  >
                    Adicionar Item
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="btn-primary text-lg px-8 py-3"
                  >
                    Começar Agora
                  </Link>
                  <Link to="/items" className="btn-secondary text-lg px-8 py-3">
                    Explorar Itens
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Processo simples e seguro para trocar itens com sua comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                1. Cadastre seus itens
              </h3>
              <p className="text-gray-600">
                Adicione fotos e descrições dos itens que você não usa mais
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                2. Encontre o que precisa
              </h3>
              <p className="text-gray-600">
                Explore itens disponíveis e use filtros para encontrar
                exatamente o que busca
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                3. Faça a troca
              </h3>
              <p className="text-gray-600">
                Proponha trocas e negocie diretamente com outros membros da
                comunidade
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Categorias Populares
            </h2>
            <p className="text-xl text-gray-600">
              Encontre itens organizados por categoria
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 overflow-x-auto">
            {[
              { icon: "📚", name: "Livros", count: "120+ itens" },
              { icon: "👕", name: "Roupas", count: "85+ itens" },
              { icon: "🧸", name: "Brinquedos", count: "67+ itens" },
              { icon: "📱", name: "Eletrônicos", count: "43+ itens" },
              { icon: "🔧", name: "Ferramentas", count: "32+ itens" },
              { icon: "🏠", name: "Casa e Jardim", count: "28+ itens" },
              { icon: "⚽", name: "Esportes", count: "25+ itens" },
              { icon: "🎵", name: "Música", count: "18+ itens" },
            ].map((category) => (
              <Link
                key={category.name}
                to={`/items?categoria=${category.name}`}
                className="card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Itens Cadastrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-green-100">Usuários Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">89</div>
              <div className="text-green-100">Trocas Realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {!user && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se à nossa comunidade e faça parte da mudança para um
              consumo mais consciente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary text-lg px-8 py-3">
                Criar Conta Grátis
              </Link>
              <Link to="/login" className="btn-secondary text-lg px-8 py-3">
                Já tenho conta
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
