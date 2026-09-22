const express = require("express");
const router = express.Router();
const conexao = require("../db");

// GET /clientes
router.get("/", (req, res) => {
  const sql = "SELECT * FROM clientes";

  conexao.query(sql, (erro, resultados) => {
    if (erro) {
      console.error("Erro ao buscar clientes:", erro);
      return res.status(500).json({
        erro: "Erro ao buscar clientes.",
      });
    }

    res.json(resultados);
  });
});

// POST /clientes
router.post("/", (req, res) => {
  const { nome, email, telefone } = req.body;

  if (!nome || !email || !telefone) {
    return res.status(400).json({
      erro: "Nome, e-mail e telefone são obrigatórios.",
    });
  }

  const sql =
    "INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)";

  conexao.query(
    sql,
    [nome, email, telefone],
    (erro, resultado) => {
      if (erro) {
        console.error("Erro ao cadastrar cliente:", erro);
        return res.status(500).json({
          erro: "Erro ao cadastrar cliente.",
        });
      }

      res.status(201).json({
        id: resultado.insertId,
        nome,
        email,
        telefone,
      });
    }
  );
});

module.exports = router;