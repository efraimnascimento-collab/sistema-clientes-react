import { useEffect, useState } from "react";
import Titulo from "./components/Titulo";
import Cliente from "./components/Cliente";
import FormularioCliente from "./components/FormularioCliente";

function App() {
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarClientes() {
    try {
      const resposta = await fetch("http://localhost:3000/clientes");

      if (!resposta.ok) {
        throw new Error("Erro ao buscar clientes.");
      }

      const dados = await resposta.json();

      setClientes(dados);
      setErro("");
    } catch {
      setErro(
        "Não foi possível carregar os clientes. Verifique se o Back-End está funcionando."
      );
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  function adicionarCliente(novoCliente) {
    setClientes((clientesAtuais) => [
      ...clientesAtuais,
      novoCliente,
    ]);
  }

  return (
    <div className="app">
      <Titulo />

      <main>
        <FormularioCliente
          onClienteCadastrado={adicionarCliente}
        />

        <section className="lista-clientes">
          <h2>Clientes cadastrados</h2>

          {carregando && (
            <p className="mensagem">
              Carregando clientes...
            </p>
          )}

          {erro && (
            <p className="mensagem erro">
              {erro}
            </p>
          )}

          {!carregando && !erro && clientes.length === 0 && (
            <p className="mensagem">
              Nenhum cliente cadastrado.
            </p>
          )}

          <div className="clientes">
            {clientes.map((cliente) => (
              <Cliente
                key={cliente.id}
                nome={cliente.nome}
                email={cliente.email}
                telefone={cliente.telefone}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
