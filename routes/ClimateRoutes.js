import express from "express";
import { createLocal, getAllLocais, getLocalById, updateLocal, deleteLocal } from "../controllers/ClimateController.js";

const router = express.Router();

// POST: Cadastrar novo local
router.post("/", createLocal);

// GET: Listar todos os locais
router.get("/", getAllLocais);

// GET/:id: Ver local específico
router.get("/:id", getLocalById);

// PUT/:id: Atualizar local
router.put("/:id", updateLocal);

// DELETE/:id: Excluir local
router.delete("/:id", deleteLocal);

export default router;