CREATE DATABASE ctrl_estacionamento;

USE ctrl_estacionamento;

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75),
dt_nascimento DATE
);

CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75),
descricao TEXT
);

CREATE TABLE veiculo(
id_veiculo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
placa VARCHAR(45),
cor VARCHAR(75),
cliente_id INT,
categoria_id INT,
FOREIGN KEY (cliente_id)
REFERENCES cliente(id_cliente),
FOREIGN KEY (categoria_id)
REFERENCES categoria(id_categoria)
);

CREATE TABLE estacionamento(
id_estacionamento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75),
capacidade INT,
dt_entrada DATE,
dt_saida DATE,
hs_entrada TIME,
hs_saida TIME,
veiculo_id INT,
FOREIGN KEY (veiculo_id)
REFERENCES veiculo(id_veiculo)
);

INSERT INTO cliente
(nome, dt_nascimento)
VALUES
('Roberto', '2004/04/21'),
('Sam', '2001/02/05'),
('Paulo', '2000/09/26');

INSERT INTO categoria
(nome, descricao)
VALUES
('Utilitário', 'Cabe bastante coisa atrás.'),
('Van', 'Possui 10 portas, pesa 2 toneladas'),
('Pick-up', 'Caçamba grande, carro 4x4, suporta até 1,5 toneladas');

INSERT INTO veiculo
(placa, cor, cliente_id, categoria_id)
VALUES
('AAA-2020', 'Preto', 1, 2),
('BBB-1111', 'Branco', 1, 3),
('CCCC-5050', 'Azul', 2, 3),
('DDD-1234', 'Branco', 1, 2);

INSERT INTO veiculo 
(placa, cor)
VALUES 
('RRR-2525', 'Azul');

INSERT INTO estacionamento 
(nome, capacidade, dt_entrada, dt_saida, hs_entrada, hs_saida, veiculo_id) 
VALUES 
('Estacionamento A', 50, '2025-09-22', '2025-09-22', '10:00:00', '14:00:00', 1),
('Estacionamento B', 75, '2025-09-22', '2025-09-23', '08:30:00', '17:30:00', 2),
('Estacionamento C', 120, '2025-09-23', '2025-09-23', '09:00:00', '16:00:00', 3);

SELECT * FROM veiculo
JOIN categoria
ON categoria.id_categoria = veiculo.categoria_id
JOIN cliente
ON cliente.id_cliente = veiculo.cliente_id;

SELECT * FROM veiculo
LEFT JOIN cliente
ON cliente.id_cliente = veiculo.cliente_id;

SELECT * FROM veiculo
RIGHT JOIN categoria
ON categoria.id_categoria = veiculo.categoria_id;

SELECT * FROM veiculo
LEFT JOIN cliente
ON cliente.id_cliente = veiculo.cliente_id
UNION
SELECT * FROM veiculo
RIGHT JOIN cliente
ON cliente.id_cliente = veiculo.cliente_id;

CREATE VIEW vw_veiculo_cliente AS
SELECT veiculo.id_veiculo, veiculo.placa AS placa_registrada, veiculo.cor, cliente.nome AS nome_do_cliente FROM veiculo
JOIN cliente
ON cliente.id_cliente = veiculo.cliente_id;

