
import 'dotenv/config'; // Carrega as variáveis de ambiente do .env
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '../generated/prisma/index.js';

// Importar as rotas
import userRoutes from './routes/userRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import propostaRoutes from './routes/propostaRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080; // Define a porta, padrão 8080

// Inicializar o PrismaClient
const prisma = new PrismaClient();

// Middlewares
app.use(cors()); // Permite requisições de diferentes origens
app.use(express.json()); // Middleware para parsear JSON no corpo das requisições

// Rota de teste
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bem-vindo à API da Feira de Trocas Comunitária!',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      items: '/api/items', 
      propostas: '/api/propostas'
    }
  });
});

// Registrar as rotas da API
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/propostas', propostaRoutes);

// Middleware de tratamento de erro 404
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

// Middleware de tratamento de erros globais
app.use((error, req, res, next) => {
  console.error('Erro:', error);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
  console.log(`📚 Documentação da API: http://localhost:${PORT}`);
});

// Graceful shutdown para o PrismaClient
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export default app;