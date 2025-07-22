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

app.use(
  cors({
    origin: "https://feira-de-trocas-comunitaria.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Bem-vindo à API da Feira de Trocas Comunitária!",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      items: "/api/items",
      propostas: "/api/propostas",
    },
  });
});

// Registrar as rotas da API
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/propostas", propostaRoutes);

// Middleware de tratamento de erro 404
app.use("*", (req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware de tratamento de erros globais
app.use((error, req, res, next) => {
  console.error("Erro:", error);
  res.status(500).json({ message: "Erro interno do servidor" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
  console.log(`📚 Documentação da API: http://localhost:${PORT}`);
});

process.on("beforeExit", async () => {
  await prisma.$disconnect();
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export default app;
