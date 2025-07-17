import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const sign = (data) => API.post("/api/users/login", data);
export const registerUser = (data) => API.post("/api/users/register", data);

export const getUsers = () => API.get("/api/users");
export const getUserById = (id) => API.get(`/api/users/${id}`);
export const createUser = (data) => API.post("/api/users", data);
export const updateUser = (id, data) => API.put(`/api/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/api/users/${id}`);

export const getItems = () => API.get("/api/items");
export const getItemById = (id) => API.get(`/api/items/${id}`);
export const createItem = (data) => API.post("/api/items", data);
export const updateItem = (id, data) => API.put(`/api/items/${id}`, data);
export const deleteItem = (id) => API.delete(`/api/items/${id}`);
export const getMyItems = () => API.get("/api/items/my-items");

export const getProposals = () => API.get("/api/propostas");
export const getProposalById = (id) => API.get(`/api/propostas/${id}`);
export const createProposal = (data) => API.post("/api/propostas", data);
export const acceptProposal = (id) => API.put(`/api/propostas/${id}/accept`);
export const rejectProposal = (id) => API.put(`/api/propostas/${id}/reject`);
export const getReceivedProposals = () => API.get("/api/propostas/received");
export const getSentProposals = () => API.get("/api/propostas/sent");

export const authService = {
  login: async (email, senha) => {
    const response = await sign({ email, senha });
    return response.data;
  },

  register: async (nome, email, senha) => {
    const response = await registerUser({ nome, email, senha });
    return response.data;
  },
};

export const userService = {
  createUser: async (userData) => {
    const response = await createUser(userData);
    return response.data;
  },

  getAllUsers: async () => {
    const response = await getUsers();
    return response.data;
  },

  getUserById: async (id) => {
    const response = await getUserById(id);
    return response.data;
  },

  updateUser: async (id, userData) => {
    const response = await updateUser(id, userData);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await deleteUser(id);
    return response.data;
  },
};

export const itemService = {
  getAllItems: async () => {
    const response = await getItems();
    return response.data;
  },

  getItemById: async (id) => {
    const response = await getItemById(id);
    return response.data;
  },

  createItem: async (itemData) => {
    const response = await createItem(itemData);
    return response.data;
  },

  updateItem: async (id, itemData) => {
    const response = await updateItem(id, itemData);
    return response.data;
  },

  deleteItem: async (id) => {
    const response = await deleteItem(id);
    return response.data;
  },

  getItemsByCategory: async (categoria) => {
    const response = await API.get(`/api/items?categoria=${categoria}`);
    return response.data;
  },

  getMyItems: async () => {
    const response = await getMyItems();
    return response.data;
  },
};

export const proposalService = {
  getAllProposals: async () => {
    const response = await getProposals();
    return response.data;
  },

  getProposalById: async (id) => {
    const response = await getProposalById(id);
    return response.data;
  },

  createProposal: async (proposalData) => {
    const response = await createProposal(proposalData);
    return response.data;
  },

  acceptProposal: async (id) => {
    const response = await acceptProposal(id);
    return response.data;
  },

  rejectProposal: async (id) => {
    const response = await rejectProposal(id);
    return response.data;
  },

  getReceivedProposals: async () => {
    const response = await getReceivedProposals();
    return response.data;
  },

  getSentProposals: async () => {
    const response = await getSentProposals();
    return response.data;
  },
};
