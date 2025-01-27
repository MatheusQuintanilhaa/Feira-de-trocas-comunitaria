import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

class UserController {
  async createUser(req, res) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ message: "Nome, email e senha são obrigatórios." });
    }

    try {
      const existingUser = await prisma.usuario.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Usuário já existe com este email." });
      }

      const hashedPassword = await bcrypt.hash(senha, 10);

      const newUser = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha: hashedPassword,
        },
        select: {
          id: true,
          nome: true,
          email: true,
          createdAt: true,
        },
      });

      res.status(201).json({
        message: "Usuário criado com sucesso!",
        user: newUser,
      });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  }

  async login(req, res) {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res
        .status(400)
        .json({ message: "Email e senha são obrigatórios." });
    }

    try {
      const user = await prisma.usuario.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ message: "Credenciais inválidas." });
      }

      const isPasswordValid = await bcrypt.compare(senha, user.senha);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Credenciais inválidas." });
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || "fallback-secret",
        { expiresIn: "24h" }
      );

      res.json({
        message: "Login realizado com sucesso!",
        id: user.id,
        nome: user.nome,
        email: user.email,
        isAdmin: user.isAdmin || false,
        token,
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
              propostasFeitas: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
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
              disponivelParaTroca: true,
            },
          },
          _count: {
            select: {
              itens: true,
              propostasFeitas: true,
            },
          },
        },
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
