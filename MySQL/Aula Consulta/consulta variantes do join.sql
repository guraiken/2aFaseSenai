CREATE DATABASE familia;

USE familia;

CREATE TABLE filho(
id_filho INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_filho VARCHAR(45)
);

CREATE TABLE pai(
id_pai INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_pai VARCHAR(45),
filho_id INT,
FOREIGN KEY (filho_id)
REFERENCES filho(id_filho)
);

INSERT INTO filho
(nome_filho)
VALUES
('Joaozinho'),
('Mariazinha'),
('Carlinha'),
('Aninha');

INSERT INTO pai 
(nome_pai, filho_id)
VALUES
('Antonio', 4),
('Antonio', 3),
('Carlos', 2);

INSERT INTO pai 
(nome_pai)
VALUE
('Mateus');

-- UTILIZANDO JOIN
SELECT pai.nome_pai, filho.nome_filho FROM pai
JOIN filho
ON pai.filho_id = filho.id_filho;

SELECT pai.nome_pai, filho.nome_filho FROM pai
LEFT JOIN filho
ON pai.filho_id = filho.id_filho;
