import Climate from '../models/ClimateModel.js';

// Array para armazenar os locais
let locais = [];
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
