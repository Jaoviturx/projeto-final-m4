import Deforestation from "../models/DeforestationModel.js";

// Array para armazenar registros de desmatamento
let registros = [desmatamentoInfo = {
  estatisticasGlobais: {
    primaria2023: "3.7 milhões de ha (florestas tropicais primárias)",
    totalGlobal2023: "6.4 milhões de ha (inclui áreas degradadas)"
  },
  brasil2023: {
    totalDesmatado: "1.829.597 ha",
    quedaPercentual: "−11,6 %",
    cerrado: "1.110.326 ha (61% do desmatamento nacional)",
    amazonas: "454.300 ha"
  },
  causas: {
    agropecuaria: "97% do desmatamento no Brasil",
    pecuariaAmazonia: "80% do desmatamento na Amazônia"
  }
}
];
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