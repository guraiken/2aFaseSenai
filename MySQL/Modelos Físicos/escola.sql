CREATE DATABASE escola;

USE escola;

CREATE TABLE sala(
id_sala INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
capacidade INT
);

CREATE TABLE turma(
id_turma INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
periodo VARCHAR(45),
sala_id INT,
FOREIGN KEY(sala_id)
REFERENCES sala (id_sala)
);

CREATE TABLE professor(
id_professor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
periodo VARCHAR(45),
sala_id INT,
FOREIGN KEY(sala_id)
REFERENCES sala (id_sala)
);
