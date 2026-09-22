function Cliente({ nome, email, telefone }) {
  return (
    <div className="cliente">
      <h3>{nome}</h3>

      <p>
        <strong>E-mail:</strong> {email}
      </p>

      <p>
        <strong>Telefone:</strong> {telefone}
      </p>
    </div>
  );
}

export default Cliente;