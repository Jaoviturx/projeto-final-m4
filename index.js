import express from "express";
import climateRoutes from "./routes/ClimateRoutes.js";
import deforestationRoutes from "./routes/DeforestationRoutes.js";

const app = express();
app.use(express.json()); // Para o servidor entender JSON

// Rotas
app.use(climateRoutes);
app.use(deforestationRoutes);

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});