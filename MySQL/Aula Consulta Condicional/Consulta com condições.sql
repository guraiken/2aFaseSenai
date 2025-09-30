CREATE DATABASE estacionamento;

USE estacionamento;

CREATE TABLE estacionamento(
id_estacionamento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75),
capacidade INT,
subsolo ENUM ("Sim", "Não"),
especial ENUM ("Sim", "Não")
);

INSERT INTO estacionamento
(nome, capacidade, subsolo, especial)
VALUES
("Estacionamento A", 20, "Não", "Não"),
("Estacionamento B", 35, "Sim", "Sim"),
("Estacionamento C", 40, "Sim", "Sim"),
("Estacionamento D", 50, "Sim", "Sim"),
("Estacionamento E", 15, "Sim", "Não"),
("Estacionamento F", 85, "Sim", "Sim"),
("Estacionamento G", 100, "Não", "Não");

CREATE VIEW vw_nome_capacidade AS
SELECT nome, capacidade FROM estacionamento
WHERE capacidade >= 20 AND capacidade <= 40 AND subsolo = "Sim" AND especial = "Sim"
ORDER BY capacidade ASC;

SELECT nome, capacidade FROM estacionamento 
WHERE capacidade > 50 
ORDER BY capacidade DESC;

SELECT nome, capacidade FROM estacionamento
WHERE capacidade > 80 OR nome = "Estacionamento B";

SELECT * FROM estacionamento
WHERE especial = "Sim" AND subsolo = "Sim"






