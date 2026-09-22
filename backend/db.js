const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "sistema_clientes",
});

conexao.connect((erro) => {
  if (erro) {
    console.error("Erro ao conectar ao MySQL:", erro.message);
    return;
  }

  console.log("Conectado ao MySQL!");
});

module.exports = conexao;