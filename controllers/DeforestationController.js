import Deforestation from "../models/DeforestationModel.js";

// Array para armazenar registros de desmatamento
let registros = [
  {
    id: 1,
    nome: "Florestas Tropicais Primárias (Mundo)",
    areaDesmatada: "3.7 milhões ha",
    ano: 2023,
    causa: "Expansão agropecuária, extração de madeira"
  },
  {
    id: 2,
    nome: "Florestas Tropicais (Global total, incluindo degradação)",
    areaDesmatada: "6.4 milhões ha",
    ano: 2023,
    causa: "Agropecuária, mineração, extração ilegal de madeira"
  },
  {
    id: 3,
    nome: "Brasil (Total)",
    areaDesmatada: "1.829.597 ha",
    ano: 2023,
    causa: "Principalmente agropecuária (97%)"
  },
  {
    id: 4,
    nome: "Cerrado (Brasil)",
    areaDesmatada: "1.110.326 ha",
    ano: 2023,
    causa: "Expansão agropecuária (soja e pecuária)"
  },
  {
    id: 5,
    nome: "Amazônia (Brasil)",
    areaDesmatada: "454.300 ha",
    ano: 2023,
    causa: "Pecuária (80% do desmatamento)"
  }
];

// POST: Cadastrar novo registro
export const createRegistro = (req, res) => {
  const { regiao, causa, ano, areaPerdida } = req.body;

  const novoRegistro = new Deforestation(registros.length + 1, regiao, causa, ano, areaPerdida);
  registros.push(novoRegistro);

  res.status(201).json({
    message: "Registro de desmatamento cadastrado com sucesso!",
    data: novoRegistro
  });
};
// GET: Listar todos os registros
export const getAllRegistros = (req, res) => {
  res.json(registros);
};

// GET/ Ver registro específico
export const getRegistroById = (req, res) => {
  const { id } = req.params;
  const registro = registros.find(r => r.id === parseInt(id));

  if (!registro) {
    return res.status(404).json({ message: "Registro não encontrado" });
  }

  res.json(registro);
};

// PUT/ Atualizar registro
export const updateRegistro = (req, res) => {
  const { id } = req.params;
  const index = registros.findIndex(r => r.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Registro não encontrado" });
  }

  registros[index] = { ...registros[index], ...req.body };
  res.json({
    message: "Registro atualizado com sucesso!",
    data: registros[index]
  });
};

// DELETE/ Excluir registro
export const deleteRegistro = (req, res) => {
  const { id } = req.params;
  const registro = registros.find(r => r.id === parseInt(id));

  if (!registro) {
    return res.status(404).json({ message: "Registro não encontrado" });
  }

  registros = registros.filter(r => r.id !== parseInt(id));
  res.json({ message: "Registro excluído com sucesso!" });
};