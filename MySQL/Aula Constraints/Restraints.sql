CREATE DATABASE regra_constraint;

USE regra_constraint;

CREATE TABLE usuario(
id_cliente INT AUTO_INCREMENT,
nome VARCHAR (75) NOT NULL, 
cpf BIGINT UNIQUE,
pais VARCHAR (75) DEFAULT 'Brasil',
graduado ENUM('Sim', 'Nao'),
num_filhos INT,
CHECK (num_filhos >=0),
PRIMARY KEY (id_cliente)
);

SELECT * FROM usuario;

-- Teste da constraint NOT NULL (nome vazio)
INSERT INTO usuario
(nome, cpf, pais, graduado, num_filhos)
VALUES
('Carlos', 12345678901, 'Brasil', 'Sim', 2);

-- Teste da constraint UNIQUE repetindo CPF anterior
INSERT INTO usuario
(nome, cpf, pais, graduado, num_filhos)
VALUES
('Antônio', 12345678901, 'Brasil', 'Sim', 5);

-- Teste da constraint DEFAULT (Deixar o nome do país vazio)
INSERT INTO usuario
(nome, cpf, graduado, num_filhos)
VALUES
('Sérgio', 12345678231, 'Sim', 3);

-- Teste da constraint ENUM (colocar algo que não está predefinido)
INSERT INTO usuario
(nome, cpf, graduado, num_filhos)
VALUES
('Mariana', 12345678222, 'Incompleta', 3);

-- Teste de constraint CHECK (colocar número menor de filhos q o permitido)
INSERT INTO usuario
(nome, cpf, graduado, num_filhos)
VALUES
('Valentana', 12344378222, 'Nao', -2);

DROP DATABASE regra_constraint