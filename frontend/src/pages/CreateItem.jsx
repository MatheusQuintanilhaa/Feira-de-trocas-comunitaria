import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { createItem } from "../services/apiServices";

const CreateItem = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    imagem: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return;

    try {
      const itemData = {
        nome: form.nome,
        descricao: form.descricao,
        categoria: form.categoria,
        imagemUrl: form.imagem || null,
        disponivelParaTroca: true,
      };

      await createItem(itemData);
      navigate("/my-items");
    } catch (error) {
      alert(
        "Erro ao criar item: " +
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
            Você precisa estar logado para criar um item.
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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Criar Novo Item
          </h1>
          <p className="text-gray-600">
            Cadastre um item que você gostaria de trocar.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
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
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Ex: iPhone 12, Livro de Programação, Bicicleta..."
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
                value={form.categoria}
                onChange={(e) =>
                  setForm({ ...form, categoria: e.target.value })
                }
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Selecione uma categoria</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
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
                value={form.descricao}
                onChange={(e) =>
                  setForm({ ...form, descricao: e.target.value })
                }
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Descreva o item, seu estado de conservação, características importantes..."
              />
            </div>

            <div>
              <label
                htmlFor="imagem"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                URL da Imagem
              </label>
              <input
                type="url"
                id="imagem"
                name="imagem"
                value={form.imagem}
                onChange={(e) => setForm({ ...form, imagem: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="https://exemplo.com/imagem.jpg"
              />
              <p className="text-sm text-gray-500 mt-1">
                Link para uma imagem do item (opcional)
              </p>
            </div>

            <div className="flex space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate("/my-items")}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700"
              >
                Criar Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
