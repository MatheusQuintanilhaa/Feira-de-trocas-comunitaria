import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { itemService } from "../services/apiServices";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    imagemUrl: "",
    disponivelParaTroca: true,
  });

  const categorias = [
    "Eletrônicos",
    "Roupas",
    "Livros",
    "Casa e Jardim",
    "Esportes",
    "Brinquedos",
    "Móveis",
    "Outros",
  ];

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchItem = async () => {
      try {
        setLoading(true);
        const item = await itemService.getItemById(id);

        if (item.userId !== user.id) {
          setError("Você não tem permissão para editar este item");
          return;
        }

        setFormData({
          nome: item.nome,
          descricao: item.descricao,
          categoria: item.categoria,
          imagemUrl: item.imagemUrl || "",
          disponivelParaTroca: item.disponivelParaTroca,
        });
      } catch (err) {
        setError("Erro ao carregar item");
        console.error("Erro ao buscar item:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [user, id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await itemService.updateItem(id, formData);
      navigate("/my-items", {
        state: { message: "Item atualizado com sucesso!" },
      });
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao atualizar item");
      console.error("Erro ao atualizar item:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error && !formData.nome) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Erro</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate("/my-items")}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Voltar aos Meus Itens
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Editar Item
            </h1>
            <p className="text-gray-600">
              Atualize as informações do seu item para troca
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nome do Item *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ex: iPhone 12, Livro de Ficção, etc."
              />
            </div>

            <div>
              <label
                htmlFor="categoria"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Categoria *
              </label>
              <select
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Selecione uma categoria</option>
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="descricao"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Descrição *
              </label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Descreva o item, seu estado de conservação, etc."
              />
            </div>

            <div>
              <label
                htmlFor="imagemUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                URL da Imagem
              </label>
              <input
                type="url"
                id="imagemUrl"
                name="imagemUrl"
                value={formData.imagemUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="https://exemplo.com/imagem.jpg"
              />
              <p className="text-sm text-gray-500 mt-1">
                Cole aqui o link de uma imagem do seu item (opcional)
              </p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="disponivelParaTroca"
                name="disponivelParaTroca"
                checked={formData.disponivelParaTroca}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="disponivelParaTroca"
                className="ml-2 block text-sm text-gray-900"
              >
                Item disponível para troca
              </label>
            </div>

            <div className="flex space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate("/my-items")}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-400 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Salvando..." : "Salvar Alterações"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
