export function validateDeforestation(req, res, next) {
  const { regiao, hectaresPerdidos, ano } = req.body;

  if (!regiao || !hectaresPerdidos || !ano) {
    return res.status(400).json({
      message: "Campos obrigatórios: regiao, hectaresPerdidos e ano"
    });
  }

  if (typeof hectaresPerdidos !== "number" || typeof ano !== "number") {
    return res.status(400).json({
      message: "hectaresPerdidos e ano devem ser números"
    });
  }

  next();
}