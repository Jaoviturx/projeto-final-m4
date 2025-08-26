import Climate from "../models/ClimateModel.js";

// Array para armazenar os locais
let locais = [mudancasClimaticas = {
  causas: [
    "Emissão de gases de efeito estufa (CO₂, metano, óxidos de nitrogênio)",
    "Desmatamento e degradação florestal",
    "Queima de combustíveis fósseis",
    "Agricultura intensiva e pecuária"
  ],
  consequencias: [
    "Aumento da temperatura média global",
    "Degelo das calotas polares e elevação do nível do mar",
    "Eventos climáticos extremos (secas, furacões, enchentes)",
    "Perda da biodiversidade e extinção de espécies",
    "Impactos na saúde humana"
  ],
  dadosRecentes: {
    aquecimentoGlobal: "1,2 °C (variando entre 1,24 a 1,28 °C)",
    aquecimento2024: "1,6 °C",
    nivelDoMarSeculo: "16–21 cm",
    metaAcordoParis: "Limitar à 1,5 °C até 2050"
  }
}];
let idCounter = 1;

// POST: Cadastrar novo local
export const createLocal = (req, res) => {
  const { nome, descricao, ano, impacto } = req.body;

  const novoLocal = new Climate(idCounter++, nome, descricao, ano, impacto);
  locais.push(novoLocal);

  res.status(201).json({
    message: "Local cadastrado com sucesso!",
    data: novoLocal
  });
};

// GET: Listar todos os locais
export const getAllLocais = (req, res) => {
  res.json(locais);
};

// GET/:id: Ver local específico
export const getLocalById = (req, res) => {
  const { id } = req.params;
  const local = locais.find(l => l.id === parseInt(id));

  if (!local) {
    return res.status(404).json({ message: "Local não encontrado" });
  }

  res.json(local);
};

// PUT/:id: Atualizar local
export const updateLocal = (req, res) => {
  const { id } = req.params;
  const index = locais.findIndex(l => l.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Local não encontrado" });
  }

  locais[index] = { ...locais[index], ...req.body };
  res.json({
    message: "Local atualizado com sucesso!",
    data: locais[index]
  });
};

// DELETE/:id: Excluir local
export const deleteLocal = (req, res) => {
  const { id } = req.params;
  const local = locais.find(l => l.id === parseInt(id));

  if (!local) {
    return res.status(404).json({ message: "Local não encontrado" });
  }

  locais = locais.filter(l => l.id !== parseInt(id));
  res.json({ message: "Local excluído com sucesso!" });
};
