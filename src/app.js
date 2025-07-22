import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "../generated/prisma/index.js";
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import propostaRoutes from "./routes/propostaRoutes.js";

const app = express();
const PORT = process.env.PORT || 8080;

const prisma = new PrismaClient();

// --- CONFIGURAÇÃO DE CORS PARA PRODUÇÃO ---

// Lista de origens permitidas. Apenas seu site da Vercel pode fazer requisições.
const allowedOrigins = ["https://feira-de-trocas-comunitaria.vercel.app"];

const corsOptions = {
  origin: function (origin, callback) {
    // Permite requisições sem 'origin' (como Postman ou apps mobile) OU se a origem está na lista
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Essencial para enviar tokens/cookies
};

// Aplique o middleware CORS como o PRIMEIRO de todos.
app.use(cors(corsOptions));

// --- FIM DA CONFIGURAÇÃO DE CORS ---

// Middleware de log
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Origin: ${
      req.headers.origin
    }`
  );
  next();
});

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API da Feira de Trocas - Status OK",
    status: "online",
  });
});

// Registrar as rotas da API
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/propostas", propostaRoutes);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Rota não encontrada",
    path: req.originalUrl,
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error("ERRO GLOBAL:", error);
  // Se for um erro de CORS, envie uma mensagem mais clara
  if (error.message === "Not allowed by CORS") {
    return res
      .status(403)
      .json({ message: "Erro de CORS: A sua origem não é permitida." });
  }
  res.status(error.status || 500).json({
    message: "Erro interno do servidor.",
    error: error.message,
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

export default app;
