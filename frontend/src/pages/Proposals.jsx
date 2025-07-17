import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { proposalService } from "../services/apiServices";

const Proposals = () => {
  const { user } = useContext(AuthContext);
  const [receivedProposals, setReceivedProposals] = useState([]);
  const [sentProposals, setSentProposals] = useState([]);
  const [activeTab, setActiveTab] = useState("received");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      fetchProposals();
    }
  }, [user]);

  const fetchProposals = async () => {
    try {
      setLoading(true);
      const [received, sent] = await Promise.all([
        proposalService.getReceivedProposals(),
        proposalService.getSentProposals(),
      ]);
      setReceivedProposals(received);
      setSentProposals(sent);
    } catch (err) {
      setError("Erro ao carregar propostas");
      console.error("Erro ao buscar propostas:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptProposal = async (proposalId) => {
    try {
      await proposalService.acceptProposal(proposalId);
      await fetchProposals();
    } catch (err) {
      setError("Erro ao aceitar proposta");
      console.error("Erro ao aceitar proposta:", err);
    }
  };

  const handleRejectProposal = async (proposalId) => {
    try {
      await proposalService.rejectProposal(proposalId);
      await fetchProposals();
    } catch (err) {
      setError("Erro ao rejeitar proposta");
      console.error("Erro ao rejeitar proposta:", err);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pendente":
        return "bg-yellow-100 text-yellow-800";
      case "Aceita":
        return "bg-green-100 text-green-800";
      case "Rejeitada":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Acesso Restrito
          </h2>
          <p className="text-gray-600">
            Você precisa estar logado para ver suas propostas.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const currentProposals =
    activeTab === "received" ? receivedProposals : sentProposals;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Propostas de Troca
          </h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("received")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "received"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Recebidas ({receivedProposals.length})
              </button>
              <button
                onClick={() => setActiveTab("sent")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "sent"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Enviadas ({sentProposals.length})
              </button>
            </nav>
          </div>
        </div>

        {currentProposals.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">
              {activeTab === "received"
                ? "Você não recebeu nenhuma proposta ainda"
                : "Você não enviou nenhuma proposta ainda"}
            </div>
            <button
              onClick={() => (window.location.href = "/items")}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Explorar Itens
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {currentProposals.map((proposal) => (
              <div
                key={proposal.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Proposta #{proposal.id}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                          proposal.status
                        )}`}
                      >
                        {proposal.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {proposal.descricao}
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  {activeTab === "received"
                    ? `Proposta de: ${proposal.proponente?.nome || "Usuário"}`
                    : `Proposta para: ${
                        proposal.proprietario?.nome || "Usuário"
                      }`}
                  {" • "}
                  {new Date(proposal.createdAt).toLocaleDateString("pt-BR")}
                </div>

                {activeTab === "received" && proposal.status === "Pendente" && (
                  <div className="mt-6 flex space-x-3">
                    <button
                      onClick={() => handleAcceptProposal(proposal.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Aceitar
                    </button>
                    <button
                      onClick={() => handleRejectProposal(proposal.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Rejeitar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Proposals;
