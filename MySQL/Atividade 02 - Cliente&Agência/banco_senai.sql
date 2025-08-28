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
("Personnalite"),
("Básico");

-- Consulta a coluna (pesquisa de dados)
SELECT * FROM cliente;

INSERT INTO cliente
(nome, cpf, telefone, rua, numero_endereco, bairro, CEP, cidade, renda, categoria_cliente_id)
VALUES
("Carlos", "12312312342", "123132131", "Rua alzira blabla bla", 112, "Ingleses", 8887654, "Florianópolis", 2400, 1),
("Adalberto", "12313212342", "123121131", "Rua Servidao blabla bla", 221, "Ingleses", 8877764, "Florianópolis", 3000, 1),
("Saimon", 11212342542, 123122311, "Rua dos Limao blabla bla", 12, "Rio Vermelho", 8843654, "Florianópolis", 1600, 2);




