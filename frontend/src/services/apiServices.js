import api from "./api";

export const authService = {
  login: async (email, senha) => {
    const response = await api.post("/api/users/login", { email, senha });
    return response.data;
  },

  register: async (nome, email, senha) => {
    const response = await api.post("/api/users/register", {
      nome,
      email,
      senha,
    });
    return response.data;
  },
};

export const userService = {
  createUser: async (userData) => {
    const response = await api.post("/api/users", userData);
    return response.data;
  },

  getAllUsers: async () => {
    const response = await api.get("/api/users");
    return response.data;
  },

  getUserById: async (id) => {
    const response = await api.get(`/api/users/${id}`);
    return response.data;
  },

  updateUser: async (id, userData) => {
    const response = await api.put(`/api/users/${id}`, userData);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await api.delete(`/api/users/${id}`);
    return response.data;
  },
};

export const itemService = {
  getAllItems: async () => {
    const response = await api.get("/api/items");
    return response.data;
  },

  getItemById: async (id) => {
    const response = await api.get(`/api/items/${id}`);
    return response.data;
  },

  createItem: async (itemData) => {
    const response = await api.post("/api/items", itemData);
    return response.data;
  },

  updateItem: async (id, itemData) => {
    const response = await api.put(`/api/items/${id}`, itemData);
    return response.data;
  },

  deleteItem: async (id) => {
    const response = await api.delete(`/api/items/${id}`);
    return response.data;
  },

  getItemsByCategory: async (categoria) => {
    const response = await api.get(`/api/items?categoria=${categoria}`);
    return response.data;
  },

  getMyItems: async () => {
    const response = await api.get("/api/items/my-items");
    return response.data;
  },
};

export const proposalService = {
  getAllProposals: async () => {
    const response = await api.get("/api/propostas");
    return response.data;
  },

  getProposalById: async (id) => {
    const response = await api.get(`/api/propostas/${id}`);
    return response.data;
  },

  createProposal: async (proposalData) => {
    const response = await api.post("/api/propostas", proposalData);
    return response.data;
  },

  acceptProposal: async (id) => {
    const response = await api.put(`/api/propostas/${id}/accept`);
    return response.data;
  },

  rejectProposal: async (id) => {
    const response = await api.put(`/api/propostas/${id}/reject`);
    return response.data;
  },

  getReceivedProposals: async () => {
    const response = await api.get("/api/propostas/received");
    return response.data;
  },

  getSentProposals: async () => {
    const response = await api.get("/api/propostas/sent");
    return response.data;
  },
};
