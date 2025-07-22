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

// Configuração CORS para Railway + Vercel
const corsOptions = {
  origin: [
    "https://feira-de-trocas-comunitaria.vercel.app",
    "http://localhost:3000", // para desenvolvimento local
    /\.vercel\.app$/, // qualquer domínio vercel
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "Cache-Control",
    "X-Forwarded-For",
    "X-Real-IP",
  ],
  exposedHeaders: ["Authorization"],
  maxAge: 86400, // Cache preflight por 24h
};

// CORS deve ser a primeira coisa
app.use(cors(corsOptions));

// Middleware CORS mais agressivo para Railway
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = [
    "https://feira-de-trocas-comunitaria.vercel.app",
    "http://localhost:3000",
  ];

  // Se a origem está na lista permitida ou é uma origem vercel, permite
  if (
    !origin ||
    allowedOrigins.includes(origin) ||
    origin.endsWith(".vercel.app")
  ) {
    res.header("Access-Control-Allow-Origin", origin || "*");
  }

  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS,PATCH,HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization,Cache-Control,X-Forwarded-For,X-Real-IP,User-Agent,Referer"
  );
  res.header("Access-Control-Max-Age", "86400");

  // Log para debug (remover em produção se não precisar)
  console.log(
    `${new Date().toISOString()} - ${req.method} ${req.url} - Origin: ${origin}`
  );

  // Responder imediatamente para OPTIONS (preflight)
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  next();
});

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check para Railway
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Bem-vindo à API da Feira de Trocas Comunitária!",
    version: "1.0.0",
    status: "online",
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || "development",
    endpoints: {
      users: "/api/users",
      items: "/api/items",
      propostas: "/api/propostas",
    },
  });
});

// Health check específico
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    memory: process.memoryUsage(),
    pid: process.pid,
  });
});

// Ping endpoint para manter a aplicação acordada
app.get("/ping", (req, res) => {
  res.status(200).json({ pong: true, timestamp: Date.now() });
});

// Auto-ping para manter aplicação acordada (executa a cada 14 minutos)
const keepAlive = () => {
  setInterval(() => {
    const url = process.env.RAILWAY_STATIC_URL || `http://localhost:${PORT}`;
    fetch(`${url}/ping`)
      .then((response) => {
        console.log(
          `🏓 Keep-alive ping: ${
            response.status
          } em ${new Date().toISOString()}`
        );
      })
      .catch((error) => {
        console.log(`❌ Keep-alive ping falhou: ${error.message}`);
      });
  }, 14 * 60 * 1000); // 14 minutos
};

// Iniciar keep-alive após 2 minutos do boot
setTimeout(() => {
  if (process.env.NODE_ENV === "production") {
    keepAlive();
    console.log("🔄 Keep-alive iniciado para Railway");
  }
}, 2 * 60 * 1000);

// Registrar as rotas da API
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/propostas", propostaRoutes);

// Middleware de tratamento de erro 404
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Rota não encontrada",
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString(),
  });
});

// Middleware de tratamento de erros globais
app.use((error, req, res, next) => {
  console.error("Erro capturado:", {
    message: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
  });

  res.status(error.status || 500).json({
    message: "Erro interno do servidor",
    error:
      process.env.NODE_ENV === "development"
        ? error.message
        : "Algo deu errado",
    timestamp: new Date().toISOString(),
  });
});

// Iniciar servidor
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando em: http://0.0.0.0:${PORT}`);
  console.log(`📚 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(
    `🔗 CORS configurado para: https://feira-de-trocas-comunitaria.vercel.app`
  );
  console.log(`⏰ Iniciado em: ${new Date().toISOString()}`);
});

// Configurar timeouts
server.keepAliveTimeout = 120000; // 2 minutos
server.headersTimeout = 120000; // 2 minutos

// Graceful shutdown
const shutdown = async (signal) => {
  console.log(`\n📴 Recebido ${signal}. Iniciando shutdown graceful...`);

  server.close(async () => {
    console.log("✅ Servidor HTTP fechado.");

    try {
      await prisma.$disconnect();
      console.log("✅ Conexão com banco de dados fechada.");
    } catch (error) {
      console.error("❌ Erro ao fechar conexão com banco:", error);
    }

    console.log("👋 Shutdown completo. Tchau!");
    process.exit(0);
  });

  // Force shutdown após 30 segundos
  setTimeout(() => {
    console.error("❌ Shutdown forçado após timeout");
    process.exit(1);
  }, 30000);
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

// Capturar erros não tratados
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

export default app;
