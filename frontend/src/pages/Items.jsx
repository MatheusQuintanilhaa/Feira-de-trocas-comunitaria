import React, { useState, useEffect, useContext } from "react";
import { itemService, proposalService } from "../services/apiServices";
import { AuthContext } from "../contexts/AuthContext";

const Items = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [proposalLoading, setProposalLoading] = useState(false);

  const categories = [
    "Livros",
    "Roupas",
    "Brinquedos",
    "Eletrônicos",
    "Ferramentas",
    "Casa e Jardim",
    "Esportes",
    "Música",
    "Outros",
  ];

  useEffect(() => {
    fetchItems();
    if (user) {
      fetchMyItems();
    }
  }, [user]);

  const fetchMyItems = async () => {
    try {
      const data = await itemService.getMyItems();
      setMyItems(data);
    } catch (err) {
      console.error("Erro ao buscar meus itens:", err);
    }
  };

  useEffect(() => {
    const filterItems = () => {
      let filtered = items;

      if (searchTerm) {
        filtered = filtered.filter(
          (item) =>
            item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.descricao.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (categoryFilter) {
        filtered = filtered.filter((item) => item.categoria === categoryFilter);
      }

      setFilteredItems(filtered);
    };

    filterItems();
  }, [items, searchTerm, categoryFilter]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await itemService.getAllItems();
      setItems(data);
    } catch (err) {
      setError("Erro ao carregar itens");
      console.error("Erro ao buscar itens:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePropose = (itemId) => {
    if (!user) {
      alert("Você precisa estar logado para fazer propostas");
      return;
    }
    setSelectedItem(itemId);
    setShowProposalModal(true);
  };

  const createProposal = async (myItemId) => {
    try {
      setProposalLoading(true);
      await proposalService.createProposal({
        itemOfertadoId: myItemId,
        itemDesejadoId: selectedItem,
      });
      setShowProposalModal(false);
      setSelectedItem(null);
      alert("Proposta enviada com sucesso!");
    } catch (err) {
      console.error("Erro ao criar proposta:", err);
      alert(
        "Erro ao enviar proposta: " +
          (err.response?.data?.message || "Tente novamente.")
      );
    } finally {
      setProposalLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Itens Disponíveis
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Buscar
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Buscar por nome ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Categoria
                </label>
                <select
                  id="category"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Todas as categorias</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">
              {searchTerm || categoryFilter
                ? "Nenhum item encontrado com os filtros aplicados"
                : "Nenhum item disponível"}
            </div>
            {(searchTerm || categoryFilter) && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("");
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Limpar filtros
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {item.imagemUrl ? (
                    <img
                      src={item.imagemUrl}
                      alt={item.nome}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <svg
                        className="mx-auto h-12 w-12 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Sem imagem
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.nome}
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {item.categoria}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.descricao}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.disponivelParaTroca
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.disponivelParaTroca ? "Disponível" : "Indisponível"}
                    </span>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    Por: {item.usuario?.nome || "Usuário desconhecido"}
                  </div>

                  <button
                    onClick={() => handlePropose(item.id)}
                    disabled={!item.disponivelParaTroca}
                    className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                      item.disponivelParaTroca
                        ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {item.disponivelParaTroca ? "Propor Troca" : "Indisponível"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showProposalModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">
                Escolha um item para trocar
              </h3>

              {myItems.length === 0 ? (
                <div>
                  <p className="text-gray-600 mb-4">
                    Você não tem itens para trocar.
                  </p>
                  <button
                    onClick={() => setShowProposalModal(false)}
                    className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <div>
                  <div className="max-h-60 overflow-y-auto space-y-2 mb-4">
                    {myItems.map((item) => (
                      <div
                        key={item.id}
                        className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
                        onClick={() => createProposal(item.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{item.nome}</h4>
                            <p className="text-sm text-gray-600">
                              {item.categoria}
                            </p>
                          </div>
                          {item.imagemUrl && (
                            <img
                              src={item.imagemUrl}
                              alt={item.nome}
                              className="w-12 h-12 object-cover rounded"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowProposalModal(false)}
                    className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                    disabled={proposalLoading}
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
