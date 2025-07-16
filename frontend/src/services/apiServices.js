import api from './api';

export const authService = {
  // Login de usuário
  login: async (email, senha) => {
    const response = await api.post('/login', { email, senha });
    return response.data;
  },
};

export const userService = {
  // Criar usuário
  createUser: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  // Buscar todos os usuários
  getAllUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },

  // Buscar usuário por ID
  getUserById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // Atualizar usuário
  updateUser: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  // Deletar usuário
  deleteUser: async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },
};

export const itemService = {
  // Buscar todos os itens
  getAllItems: async () => {
    const response = await api.get('/items');
    return response.data;
  },

  // Buscar item por ID
  getItemById: async (id) => {
    const response = await api.get(`/items/${id}`);
    return response.data;
  },

  // Criar item
  createItem: async (itemData) => {
    const response = await api.post('/items', itemData);
    return response.data;
  },

  // Atualizar item
  updateItem: async (id, itemData) => {
    const response = await api.put(`/items/${id}`, itemData);
    return response.data;
  },

  // Deletar item
  deleteItem: async (id) => {
    const response = await api.delete(`/items/${id}`);
    return response.data;
  },

  // Buscar itens por categoria
  getItemsByCategory: async (categoria) => {
    const response = await api.get(`/items?categoria=${categoria}`);
    return response.data;
  },

  // Buscar itens do usuário logado
  getMyItems: async () => {
    const response = await api.get('/items/my-items');
    return response.data;
  },
};

export const proposalService = {
  // Buscar todas as propostas
  getAllProposals: async () => {
    const response = await api.get('/proposals');
    return response.data;
  },

  // Buscar proposta por ID
  getProposalById: async (id) => {
    const response = await api.get(`/proposals/${id}`);
    return response.data;
  },

  // Criar proposta
  createProposal: async (proposalData) => {
    const response = await api.post('/proposals', proposalData);
    return response.data;
  },

  // Aceitar proposta
  acceptProposal: async (id) => {
    const response = await api.put(`/proposals/${id}/accept`);
    return response.data;
  },

  // Recusar proposta
  rejectProposal: async (id) => {
    const response = await api.put(`/proposals/${id}/reject`);
    return response.data;
  },

  // Buscar propostas recebidas
  getReceivedProposals: async () => {
    const response = await api.get('/proposals/received');
    return response.data;
  },

  // Buscar propostas enviadas
  getSentProposals: async () => {
    const response = await api.get('/proposals/sent');
    return response.data;
  },
};
