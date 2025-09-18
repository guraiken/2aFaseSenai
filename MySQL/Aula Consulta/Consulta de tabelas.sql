CREATE DATABASE loja_abc;

USE loja_abc;

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
cidade VARCHAR(45)
);

CREATE TABLE acompanhamento(
id_acompanhamento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
situacao VARCHAR(45)ascii
);

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
data_pedido DATE,
valor DECIMAL(8,2),
cliente_id INT,
acompanhamento_id INT,
FOREIGN KEY (cliente_id)
REFERENCES cliente(id_cliente),
FOREIGN KEY (acompanhamento_id)
REFERENCES acompanhamento(id_acompanhamento)
);

INSERT INTO cliente
(nome, cidade)
VALUES 
('João', 'Macaé'),
('Carlos', 'Salvador'),
('Maria', 'Niterói'),
('Ana', 'Campinas'),
('Marcos', 'Santos');

INSERT INTO acompanhamento
(situacao)
VALUES
('Registrado'),
('Em transporte'),
('Entregue');

INSERT INTO pedido
(data_pedido, valor, cliente_id, acompanhamento_id)
VALUES
('2024-09-24', 250.00, 2, 1),
('2024-09-25', 150.00, 1, 2),
('2024-09-25', 450.00, 4, 3);

-- COMANDO JOIN PRA JUNTAR AS TABELAS

SELECT * FROM pedido
JOIN cliente 
ON pedido.cliente_id = cliente.id_cliente
JOIN acompanhamento
ON pedido.acompanhamento_id = acompanhamento.id_acompanhamento;



