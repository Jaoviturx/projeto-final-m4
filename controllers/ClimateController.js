import Climate from '../models/ClimateModel.js';

// Array para armazenar os locais
let locais = [
  {
    id: 1,
    nome: "Aumento da temperatura global",
    descricao: "A temperatura média da Terra já aumentou em cerca de 1,1°C desde a era pré-industrial.",
    ano: 2023,
    impacto: "Maior ocorrência de ondas de calor, secas e incêndios florestais."
  },
  {
    id: 2,
    nome: "Degelo das calotas polares",
    descricao: "O Ártico perdeu aproximadamente 13% de sua camada de gelo marinho por década desde 1979.",
    ano: 2023,
    impacto: "Elevação do nível do mar e ameaça a espécies polares."
  },
  {
    id: 3,
    nome: "Eventos climáticos extremos",
    descricao: "Fenômenos como furacões, ciclones e tempestades têm ficado mais intensos e frequentes.",
    ano: 2023,
    impacto: "Perdas econômicas bilionárias e aumento de mortes relacionadas a desastres naturais."
  },
  {
    id: 4,
    nome: "Acidificação dos oceanos",
    descricao: "Os oceanos absorvem cerca de 30% do CO₂ emitido, tornando-se mais ácidos.",
    ano: 2023,
    impacto: "Danos a corais e ecossistemas marinhos."
  },
  {
    id: 5,
    nome: "Perda de biodiversidade",
    descricao: "Mudanças climáticas aceleram a extinção de espécies e reduzem habitats naturais.",
    ano: 2023,
    impacto: "Desequilíbrio ecológico e ameaça à segurança alimentar."
  }
];

// POST: Cadastrar novo local
export const createLocal = (req, res) => {
  const { nome, descricao, ano, impacto } = req.body;

  const novoLocal = new Climate(locais.length + 1, nome, descricao, ano, impacto);
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
