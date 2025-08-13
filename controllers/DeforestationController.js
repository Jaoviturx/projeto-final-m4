import Deforestation from "../models/DeforestationModel.js";

// Array para armazenar registros de desmatamento
let registros = [];
let idCounter = 1;

// POST: Cadastrar novo registro
export const createRegistro = (req, res) => {
  const { regiao, causa, ano, areaPerdida } = req.body;

  const novoRegistro = new Deforestation(idCounter++, regiao, causa, ano, areaPerdida);
  registros.push(novoRegistro);

  res.status(201).json({
    message: "Registro de desmatamento cadastrado com sucesso!",
    data: novoRegistro
  });
};