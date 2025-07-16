// src/controllers/userController.js

import { PrismaClient } from '../../generated/prisma/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

class UserController {
  // Criar um novo usuário (cadastro)
  async createUser(req, res) {
    const { nome, email, senha } = req.body;

    // Validação básica
    if (!nome || !email || !senha) {
      return res.status(400).json({ message: "Nome, email e senha são obrigatórios." });
    }

    try {
      // Verificar se o usuário já existe
      const existingUser = await prisma.usuario.findUnique({
        where: { email }
      });

      if (existingUser) {
        return res.status(400).json({ message: "Usuário já existe com este email." });
      }

      // Hash da senha
      const hashedPassword = await bcrypt.hash(senha, 10);

      // Criar o usuário
      const newUser = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha: hashedPassword
        },
        select: {
          id: true,
          nome: true,
          email: true,
          createdAt: true
        }
      });

      res.status(201).json({
        message: "Usuário criado com sucesso!",
        user: newUser
      });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  }

  // Login do usuário
  async login(req, res) {
    const { email, senha } = req.body;

    // Validação básica
    if (!email || !senha) {
      return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }

    try {
      // Buscar o usuário
      const user = await prisma.usuario.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(401).json({ message: "Credenciais inválidas." });
      }

      // Verificar a senha
      const isPasswordValid = await bcrypt.compare(senha, user.senha);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Credenciais inválidas." });
      }

      // Gerar token JWT
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || 'fallback-secret',
        { expiresIn: '24h' }
      );

      res.json({
        message: "Login realizado com sucesso!",
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email
        },
        token
      });
    } catch (error) {
      console.error("Erro no login:", error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  }

  // Listar todos os usuários (para admin)
  async getAllUsers(req, res) {
    try {
      const users = await prisma.usuario.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          createdAt: true,
          _count: {
            select: {
              itens: true,
              propostasFeitas: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      res.json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  }

  // Buscar usuário por ID
  async getUserById(req, res) {
    const { id } = req.params;

    try {
      const user = await prisma.usuario.findUnique({
        where: { id },
        select: {
          id: true,
          nome: true,
          email: true,
          createdAt: true,
          itens: {
            select: {
              id: true,
              nome: true,
              categoria: true,
              disponivelParaTroca: true
            }
          },
          _count: {
            select: {
              itens: true,
              propostasFeitas: true
            }
          }
        }
      });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      res.json(user);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new UserController();
