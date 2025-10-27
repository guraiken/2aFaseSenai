CREATE DATABASE posto_gasolina;

USE posto_gasolina;

CREATE TABLE posto(
id_posto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
estoque DECIMAL(8,2),
preco DECIMAL(8,2) DEFAULT(6.5)
);

CREATE TABLE veiculo(
id_carro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
placa VARCHAR(75),
litros_abastecidos DECIMAL(8,2),
posto_id INT,
FOREIGN KEY(posto_id)
REFERENCES posto(id_posto)
);



INSERT INTO estoque 
(combustivel_estoq)
VALUES
('250.00')

