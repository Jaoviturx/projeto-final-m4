import express from "express";
import { createLocal, getAllLocais, getLocalById, updateLocal, deleteLocal } from "../controllers/ClimateController.js";

const router = express.Router();

// POST: Cadastrar novo local
router.post("/climate", createLocal);

// GET: Listar todos os locais
router.get("/climate", getAllLocais);

// GET/:id: Ver local específico
router.get("/climate/:id", getLocalById);

// PUT/:id: Atualizar local
router.put("/climate/:id", updateLocal);

// DELETE/:id: Excluir local
router.delete("/climate/:id", deleteLocal);

export default router;