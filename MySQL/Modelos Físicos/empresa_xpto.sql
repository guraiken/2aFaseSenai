CREATE DATABASE empresa_xpto;

USE empresa_xpto;

CREATE TABLE fornecedor(
id_fornecedor INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(80),
nacionalidade VARCHAR(75),
PRIMARY KEY(id_fornecedor)
-- Dois jeitos de usar primary key
);

CREATE TABLE peca(
id_peca INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75),
peso DECIMAL(8,2),
ano_fabricacao DATE,
fornecedor_id INT,
-- Chave estrangeira (aonde esta o N)
FOREIGN KEY(fornecedor_id)
REFERENCES fornecedor (id_fornecedor)
);

-- altera alguma tabela, coluna, banco de dados.
-- ALTER TABLE fornecedor
-- DROP COLUMN nome;
-- drop é o delete
