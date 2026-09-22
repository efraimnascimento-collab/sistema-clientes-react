const express = require("express");
const cors = require("cors");

const clientesRoutes = require("./routes/clientes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do Sistema de Clientes funcionando!",
  });
});

app.use("/clientes", clientesRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});