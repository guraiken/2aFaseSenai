DROP DATABASE banco_senai;

CREATE DATABASE banco_senai;

USE banco_senai;

CREATE TABLE categoria_cliente(
id_categoria_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100)
);

CREATE TABLE agencia(
id_agencia INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100)
);

CREATE TABLE tipo_conta(
id_tipo_conta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
descricao VARCHAR(100)
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
cpf BIGINT(11),
cpnj BIGINT(14),
num_celular BIGINT,
rua VARCHAR(100),
numero_endereco INT(5),
bairro VARCHAR(75),
CEP INT(7),
cidade VARCHAR(64),
estado VARCHAR(64),
categoria_cliente_id INT,
FOREIGN KEY(categoria_cliente_id)
REFERENCES categoria_cliente(id_categoria_cliente) 
);

CREATE TABLE conta(
id_conta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
val_saldo DECIMAL(8,2),
cliente_id INT,
agencia_id INT,
tipo_conta_id INT,
FOREIGN KEY(cliente_id)
REFERENCES cliente(id_cliente),
FOREIGN KEY (agencia_id)
REFERENCES agencia(id_agencia),
FOREIGN KEY(tipo_conta_id)
REFERENCES tipo_conta(id_tipo_conta)
);

ALTER TABLE cliente
RENAME COLUMN num_celular TO telefone,
ADD COLUMN renda DECIMAL(8,2),
DROP COLUMN estado;

ALTER TABLE categoria_cliente
ADD COLUMN observacao TEXT;

RENAME TABLE categoria_cliente TO categoria;

ALTER TABLE tipo_conta
MODIFY COLUMN descricao TEXT,
ADD COLUMN observacao TEXT;

ALTER TABLE agencia
MODIFY COLUMN nome VARCHAR(45);

-- Popular 1 categoria

-- INSERT INTO categoria_cliente
-- (nome)
-- VALUES
-- ("Private");

-- Popular + de 1 categoria

INSERT INTO categoria
(nome)
VALUES
("Private"),
("Exclusive"),
("Gold"),
("Básico");

-- Consulta a coluna (pesquisa de dados)
SELECT * FROM conta;

INSERT INTO tipo_conta
(descricao)
VALUES
("Poupança"),
("Corrente");

INSERT INTO agencia
(nome)
VALUES
("Campeche"),
("Ingleses"),
("Centro");

INSERT INTO cliente
(nome, cpf, telefone, rua, numero_endereco, bairro, CEP, cidade, renda, categoria_cliente_id)
VALUES
("Carlos", "12312312342", "123132131", "Rua alzira blabla bla", 112, "Ingleses", 8887654, "Florianópolis", 1800, 1),
("Adalberto", "12313212342", "123121131", "Rua Servidao blabla bla", 221, "Ingleses", 8877764, "Florianópolis", 2400, 1),
("João", "45645645678", "987654321", "Av. Brasil", 120, "Trindade", 8803400, "Florianópolis", 3200, 2),
("Ana", "78978978901", "912345678", "Rua João Paulo", 87, "Córrego Grande", 8804000, "Florianópolis", 3500, 2),
("Pedro", "15915915988", "911223344", "Rua do Sol", 300, "Campeche", 8806000, "Florianópolis", 4500, 3),
("Luciana", "95195195133", "933221100", "Rua das Gaivotas", 255, "Ingleses", 8805800, "Florianópolis", 4800, 3),
("Eduardo", "74174174122", "999888777", "Rua Hermon", 180, "Rio Tavares", 8806700, "Florianópolis", 6200, 4),
("Beatriz", "85285285244", "966555444", "Rua Coronel Pedro", 145, "Estreito", 8807500, "Florianópolis", 7000, 4);

INSERT INTO conta
(val_saldo, cliente_id, agencia_id, tipo_conta_id)
VALUES
("8000", 1, 2, 2),
("10000", 2, 2, 2),
("15000", 3, 3, 2),
("18000", 4, 3, 2),
("25300", 5, 1, 1),
("35210", 6, 1, 1),
("41500", 7, 1, 1),
("52000", 8, 2, 2);





