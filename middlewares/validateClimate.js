export function validateClimate(req, res, next) {
  const { nome, temperatura, umidade } = req.body;

  if (!nome || !temperatura || !umidade) {
    return res.status(400).json({
      message: "Campos obrigatórios: nome, temperatura e umidade"
    });
  }

  if (typeof temperatura !== "number" || typeof umidade !== "number") {
    return res.status(400).json({
      message: "Temperatura e umidade devem ser números"
    });
  }

  next(); // passa para o próximo (controller)
}