import { useState } from "react";

function FormularioCliente({ onClienteCadastrado }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function cadastrarCliente(event) {
    event.preventDefault();

    if (!nome || !email || !telefone) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    try {
      const resposta = await fetch("http://localhost:3000/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
        }),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar cliente.");
      }

      const novoCliente = await resposta.json();

      onClienteCadastrado(novoCliente);

      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("Cliente cadastrado com sucesso!");
    } catch (error) {
      setMensagem(
        "Não foi possível cadastrar o cliente. Verifique se a API está funcionando."
      );
    }
  }

  return (
    <form className="formulario" onSubmit={cadastrarCliente}>
      <h2>Cadastrar cliente</h2>

      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        placeholder="Digite o nome"
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Digite o e-mail"
      />

      <label htmlFor="telefone">Telefone</label>
      <input
        id="telefone"
        type="tel"
        value={telefone}
        onChange={(event) => setTelefone(event.target.value)}
        placeholder="Digite o telefone"
      />

      <button type="submit">Cadastrar cliente</button>

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </form>
  );
}

export default FormularioCliente;