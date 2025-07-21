import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { getItemById, updateItem } from "../services/apiServices";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
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
    if (id) {
      getItemById(id).then((res) => {
        const item = res.data;
        setForm({
          nome: item.nome,
          descricao: item.descricao,
          categoria: item.categoria,
          imagemUrl: item.imagemUrl || "",
          disponivelParaTroca: item.disponivelParaTroca,
        });
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return;

    try {
      await updateItem(id, form);
      navigate("/my-items");
    } catch (error) {
      alert(
        "Erro ao atualizar item: " +
          (error.response?.data?.message || "Erro desconhecido")
      );
    }
  };
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Acesso Restrito
          </h2>
          <p className="text-gray-600 mb-6">
            Você precisa estar logado para editar um item.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Fazer Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Editar Item
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Item *
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição *
              </label>
              <textarea
                value={form.descricao}
                onChange={(e) =>
                  setForm({ ...form, descricao: e.target.value })
                }
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria *
              </label>
              <select
                value={form.categoria}
                onChange={(e) =>
                  setForm({ ...form, categoria: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Selecione uma categoria</option>
                {categorias.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL da Imagem
              </label>
              <input
                type="url"
                value={form.imagemUrl}
                onChange={(e) =>
                  setForm({ ...form, imagemUrl: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={form.disponivelParaTroca}
                onChange={(e) =>
                  setForm({ ...form, disponivelParaTroca: e.target.checked })
                }
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Item disponível para troca
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate("/my-items")}
                className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
