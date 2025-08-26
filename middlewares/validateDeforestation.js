export function validateDeforestation(req, res, next) {
  const { nome, areaDesmatada, ano, causa } = req.body;

  if (!nome || !areaDesmatada || !ano || !causa) {
    return res.status(400).json({
      message: "Preencha todos os campos obrigatórios"
    });
  }



  next();
}