CREATE DATABASE usinagem_abc;

USE usinagem_abc;

CREATE TABLE fornecedor(
id_fornecedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75),
nacionalidade VARCHAR(75)
);

CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
descricao VARCHAR(200)
);

CREATE TABLE peca(
id_peca INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75),
peso DECIMAL(8,2),
ano_fabricao DATE,
categoria_id INT,
fornecedor_id INT, 
FOREIGN KEY(categoria_id)
REFERENCES categoria(id_categoria),
FOREIGN KEY(fornecedor_id)
REFERENCES fornecedor(id_fornecedor)
);
