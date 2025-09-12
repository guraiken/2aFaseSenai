CREATE DATABASE livraria_xpto;

USE livraria_xpto;

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(80),
rg INT, 
cpf BIGINT(11),
cidade VARCHAR(75),
bairro VARCHAR(75),
rua VARCHAR(75),
numero_casa INT
);

CREATE TABLE financiador(
id_financiador INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(80),
cnpj BIGINT(14)
);

CREATE TABLE autor(
id_autor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(80),
rg INT
);

CREATE TABLE editora(
id_editora INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_fantasia VARCHAR(80),
razao_social VARCHAR(80),
estado VARCHAR(80),
cidade VARCHAR(80),
rua VARCHAR(80),
numero_casa VARCHAR(80),
telefone BIGINT
);

CREATE TABLE livro(
id_livro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
isbn BIGINT,
titulo VARCHAR(80),
preco DECIMAL(8,2),
categoria VARCHAR(80),
financiador_id INT,
autor_id INT,
editora_id INT,
FOREIGN KEY (financiador_id)
REFERENCES financiador(id_financiador),
FOREIGN KEY (autor_id)
REFERENCES autor(id_autor),
FOREIGN KEY (editora_id)
REFERENCES editora(id_editora)
);

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
livro_id INT,
cliente_id INT,
qtd_pedido INT,
FOREIGN KEY (livro_id)
REFERENCES livro(id_livro),
FOREIGN KEY (cliente_id)
REFERENCES cliente(id_cliente)
);

INSERT INTO cliente 
(nome, rg, cpf, cidade, bairro, rua, numero_casa) 
VALUES
('João Silva', 1234567, 12345678901, 'São Paulo', 'Centro', 'Rua das Flores', 123),
('Maria Souza', 2345678, 23456789012, 'Rio de Janeiro', 'Copacabana', 'Av. Atlântica', 456),
('Carlos Pereira', 3456789, 34567890123, 'Belo Horizonte', 'Savassi', 'Rua Amazonas', 789),
('Ana Oliveira', 4567890, 45678901234, 'Curitiba', 'Batel', 'Rua XV de Novembro', 101),
('Lucas Almeida', 5678901, 56789012345, 'Porto Alegre', 'Moinhos de Vento', 'Av. Independência', 202);

INSERT INTO editora 
(nome_fantasia, razao_social, estado, cidade, rua, numero_casa, telefone) 
VALUES
('Editora Alpha', 'Alpha LTDA', 'SP', 'São Paulo', 'Av. Central', '111', 1122334455),
('Editora Beta', 'Beta Publicações SA', 'RJ', 'Rio de Janeiro', 'Av. Norte', '222', 2233445566),
('Editora Gama', 'Gama Books LTDA', 'MG', 'Belo Horizonte', 'Av. Sul', '333', 3344556677),
('Editora Delta', 'Delta Editora ME', 'PR', 'Curitiba', 'Av. Leste', '444', 4455667788),
('Editora Omega', 'Omega Corp', 'RS', 'Porto Alegre', 'Av. Oeste', '555', 5566778899);

INSERT INTO autor 
(nome, rg) 
VALUES
('Paulo Coelho', 7890123),
('Machado Assis', 8901234),
('Clarice Lispector', 9012345),
('Cecília Meireles', 1234568),
('Monteiro Lobato', 2345679);

INSERT INTO financiador 
(nome, cnpj) 
VALUES
('Banco do Livro', 12345678000199),
('Fundação Letras', 23456789000188),
('Cultura Viva', 34567890000177),
('Instituto Saber', 45678901000166),
('Edital Nacional', 56789012000155);

INSERT INTO livro 
(isbn, titulo, preco, categoria, financiador_id, autor_id, editora_id) 
VALUES
(9781234567890, 'O Alquimista', 49.90, 'Romance', 1, 1, 1),
(9789876543210, 'Dom Casmurro', 39.90, 'Clássico', 2, 2, 2),
(9781122334455, 'A Hora da Estrela', 29.90, 'Drama', 3, 3, 3),
(9782233445566, 'Romanceiro da Inconfidência', 34.50, 'Poesia', 4, 4, 4),
(9783344556677, 'Sítio do Picapau Amarelo', 59.90, 'Infantil', 5, 5, 5);

INSERT INTO pedido
(livro_id, cliente_id, qtd_pedido)
VALUES
(1,1,1),
(2,2,2),
(3,3,3),
(4,4,4),
(5,5,5);

SELECT * FROM cliente;
SELECT * FROM financiador;
SELECT * FROM autor;
SELECT * FROM editora;
SELECT * FROM livro;
SELECT * FROM pedido;

DROP TABLE autor;

DROP TABLE cliente;

DROP DATABASE livraria_xpto;



