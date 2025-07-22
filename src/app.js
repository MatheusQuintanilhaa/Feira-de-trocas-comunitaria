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

// CORS muito permissivo para debug - REMOVER EM PRODUÇÃO
app.use(
  cors({
    origin: true, // Permite qualquer origem
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: "*",
  })
);

// Log detalhado para debug
app.use((req, res, next) => {
  console.log("=== REQUEST DEBUG ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Origin:", req.headers.origin);
  console.log("User-Agent:", req.headers["user-agent"]);
  console.log("Headers:", JSON.stringify(req.headers, null, 2));
  console.log("=====================");

  // Headers CORS explícitos
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS,PATCH"
  );
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    console.log("OPTIONS preflight handled");
    return res.status(200).end();
  }

  next();
});

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API da Feira de Trocas - DEBUG MODE",
    version: "1.0.0-debug",
    status: "online",
    timestamp: new Date().toISOString(),
    cors: "PERMISSIVO - APENAS PARA DEBUG",
    url_atual: req.get("host"),
    endpoints: {
      users: "/api/users",
      items: "/api/items",
      propostas: "/api/propostas",
      debug: "/api/debug",
    },
  });
});

// Endpoint específico para testar CORS
app.get("/api/debug", (req, res) => {
  res.json({
    success: true,
    message: "CORS funcionando!",
    origin: req.headers.origin,
    host: req.get("host"),
    protocol: req.protocol,
    full_url: req.protocol + "://" + req.get("host") + req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString(),
  });
});

// Teste POST para login
app.post("/api/debug/login", (req, res) => {
  console.log("DEBUG LOGIN - Body:", req.body);
  res.json({
    success: true,
    message: "Endpoint de login acessível",
    received_data: req.body,
    timestamp: new Date().toISOString(),
  });
});

// Registrar as rotas da API
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/propostas", propostaRoutes);

// 404 handler
app.use("*", (req, res) => {
  console.log(`404 - ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    message: "Rota não encontrada",
    path: req.originalUrl,
    method: req.method,
    available_routes: [
      "/",
      "/api/users",
      "/api/items",
      "/api/propostas",
      "/api/debug",
    ],
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error("ERRO:", error);
  res.status(error.status || 500).json({
    message: "Erro interno",
    error: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
});

// Start server
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 SERVIDOR DEBUG rodando em: http://0.0.0.0:${PORT}`);
  console.log(`⚠️  CORS PERMISSIVO - APENAS PARA DEBUG!`);
  console.log(
    `🔍 Teste: GET ${
      process.env.RAILWAY_STATIC_URL || `http://localhost:${PORT}`
    }/api/debug`
  );
});

export default app;
