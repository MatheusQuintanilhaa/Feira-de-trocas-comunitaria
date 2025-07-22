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

// --- ALTERAÇÃO PARA DEBUG ---
// Aplicando o middleware CORS da forma mais permissiva possível para o teste.
// Isso ajuda a confirmar se o problema está na camada de rede/infra do Railway.
app.use(
  cors({
    origin: "*", // Permite QUALQUER origem
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "*", // Permite QUALQUER cabeçalho
    credentials: true,
  })
);

// Middleware de log (opcional, mas útil para debug)
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Origin: ${
      req.headers.origin
    }`
  );
  next();
});

// Body parsing (depois do CORS e log)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// --- O RESTANTE DO SEU CÓDIGO PERMANECE IGUAL ---

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
