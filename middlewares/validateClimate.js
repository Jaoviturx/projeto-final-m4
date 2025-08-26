export function validateClimate(req, res, next) {
  const {  nome, descricao, ano, impacto } = req.body;

  if (!nome ||  !descricao|| !ano|| !impacto) {
    return res.status(400).json({
      message: "Preencha todos os campos obrigatórios"
    });
  }

  next(); // passa para o próximo (controller)
}