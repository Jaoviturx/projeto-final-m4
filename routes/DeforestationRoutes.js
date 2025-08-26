import express from "express";
import { createRegistro, getAllRegistros, getRegistroById, updateRegistro, deleteRegistro } from "../controllers/DeforestationController.js";
import { validateDeforestation } from "../middlewares/validateDeforestation.js";
const router = express.Router();

// POST: Cadastrar novo registro de desmatamento
router.post("/deforestation",validateDeforestation, createRegistro);

// GET: Listar todos os registros
router.get("/deforestation", getAllRegistros);

// GET/:id: Ver registro específico
router.get("/deforestation/:id", getRegistroById);

// PUT/:id: Atualizar registro
router.put("/deforestation/:id", updateRegistro);

// DELETE/:id: Excluir registro
router.delete("/deforestation/:id", deleteRegistro);

export default router;