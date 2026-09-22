CREATE DATABASE sistema_clientes;

USE sistema_clientes;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

INSERT INTO clientes (nome, email, telefone)
VALUES
('Maria Silva', 'maria@email.com', '(71) 99999-1111'),
('João Santos', 'joao@email.com', '(71) 98888-2222'),
('Ana Oliveira', 'ana@email.com', '(71) 97777-3333');