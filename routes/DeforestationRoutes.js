import express from "express";
import { createRegistro, getAllRegistros, getRegistroById, updateRegistro, deleteRegistro } from "../controllers/DeforestationController.js";

const router = express.Router();

// POST: Cadastrar novo registro de desmatamento
router.post("/", createRegistro);

// GET: Listar todos os registros
router.get("/", getAllRegistros);

// GET/:id: Ver registro específico
router.get("/:id", getRegistroById);

// PUT/:id: Atualizar registro
router.put("/:id", updateRegistro);

// DELETE/:id: Excluir registro
router.delete("/:id", deleteRegistro);

export default router;