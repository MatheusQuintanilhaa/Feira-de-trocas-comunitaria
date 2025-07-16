// src/routes/userRoutes.js

import { Router } from "express";
import userController from "../controllers/userController.js";
import authenticate from "../../middlewares/authenticate.js";

const router = Router();

// Rotas públicas (não precisam de autenticação)
router.post("/register", userController.createUser); // Cadastro de usuário
router.post("/login", userController.login); // Login

// Rotas protegidas (precisam de autenticação)
router.get("/", authenticate, userController.getAllUsers); // Listar usuários
router.get("/:id", authenticate, userController.getUserById); // Buscar usuário por ID

export default router;
