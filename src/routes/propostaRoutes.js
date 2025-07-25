// src/routes/propostaRoutes.js

import { Router } from "express";
import propostaController from "../controllers/propostaController.js";
import authenticate from "../../middlewares/authenticate.js"; // Para proteger as rotas

const router = Router();

// Todas as rotas de proposta exigem autenticação
router.use(authenticate); // Aplica o middleware de autenticação a todas as rotas deste router

// Criar uma nova proposta
router.post("/", propostaController.createProposta);

// Listar propostas (pode ter filtros: status, ofertanteId, itemDesejadoId, isMyProposal=true)
// GET /proposals?isMyProposal=true
// GET /proposals?status=pendente
router.get("/", propostaController.getAllPropostas);

// Histórico de propostas do usuário logado
router.get("/my-history", propostaController.getMyProposalHistory);

// Buscar propostas recebidas
router.get("/received", propostaController.getReceivedProposals);

// Buscar propostas enviadas
router.get("/sent", propostaController.getSentProposals);

// Buscar proposta por ID
router.get("/:id", propostaController.getPropostaById);

// Aceitar uma proposta (requer autenticação e que o usuário seja o dono do item desejado)
router.put("/:id/accept", propostaController.acceptProposta);

// Rejeitar uma proposta (requer autenticação e que o usuário seja o dono do item desejado)
router.put("/:id/reject", propostaController.rejectProposta);

// Deletar uma proposta (requer autenticação e que seja o ofertante ou admin)
router.delete("/:id", propostaController.deleteProposta); // Pode ser protegido por 'authorization' se apenas admin puder deletar

export default router;
