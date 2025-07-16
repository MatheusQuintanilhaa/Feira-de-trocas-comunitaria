// src/routes/itemRoutes.js

import { Router } from "express";
import itemController from "../controllers/itemController.js";
import authenticate from "../../middlewares/authenticate.js"; // Para proteger as rotas

const router = Router();

// Rotas de Item

// Rota para listar categorias (não precisa de autenticação para facilitar o uso)
router.get("/categories", itemController.getCategories);

// Rota para estatísticas (requer autenticação)
router.get("/stats", authenticate, itemController.getStats);

// Rotas que exigem autenticação:
router.post("/", authenticate, itemController.createItem); // Criar item
router.get("/", authenticate, itemController.getAllItems); // Listar todos os itens (com filtros)
router.get("/:id", authenticate, itemController.getItemById); // Buscar item por ID

// Rotas que exigem autenticação e verificação de propriedade
router.put("/:id", authenticate, itemController.updateItem); // Atualizar item
router.delete("/:id", authenticate, itemController.deleteItem); // Deletar item

export default router;
