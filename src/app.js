

require('dotenv').config(); // Carrega as variáveis de ambiente do .env
const express = require('express');
const { PrismaClient } = require('../generated/prisma');

const app = express();
const PORT = process.env.PORT || 8080; // Define a porta, padrão 3000
// Inicialize o PrismaClient
const prisma = new PrismaClient();

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à API da Feira de Trocas Comunitária!');
});




// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Acesse: http://localhost:${PORT}`);
});

// Adicione um graceful shutdown para o PrismaClient
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});