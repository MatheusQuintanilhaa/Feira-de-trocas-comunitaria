import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { itemService } from "../services/apiServices";

const CreateItem = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    imagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Você precisa estar logado para criar um item");
      return;
    }

    if (!formData.nome || !formData.descricao || !formData.categoria) {
      setError("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const itemData = {
        nome: formData.nome,
        descricao: formData.descricao,
        categoria: formData.categoria,
        imagemUrl: formData.imagem || null, // Mapear 'imagem' para 'imagemUrl'
        disponivelParaTroca: true,
      };

      await itemService.createItem(itemData);
      setSuccess(true);

      setFormData({
        nome: "",
        descricao: "",
        categoria: "",
        imagem: "",
      });

      setTimeout(() => {
        window.location.href = "/my-items";
      }, 2000);
    } catch (err) {
      setError("Erro ao criar item. Tente novamente.");
      console.error("Erro ao criar item:", err);
    } finally {
      setLoading(false);
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
            onClick={() => (window.location.href = "/login")}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Fazer Login
          </button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-16 w-16 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Item Criado com Sucesso!
          </h2>
          <p className="text-gray-600 mb-6">
            Seu item foi cadastrado e está disponível para troca.
          </p>
          <p className="text-gray-500">Redirecionando para seus itens...</p>
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
                value={formData.categoria}
                onChange={handleChange}
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
                value={formData.descricao}
                onChange={handleChange}
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
                value={formData.imagem}
                onChange={handleChange}
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
                onClick={() => window.history.back()}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                  loading
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {loading ? "Criando..." : "Criar Item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
