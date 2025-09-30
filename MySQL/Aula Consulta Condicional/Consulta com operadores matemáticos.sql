CREATE DATABASE assinatura;

USE assinatura;

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75)
);

CREATE TABLE mensalidade(
id_mensalidade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_id INT,
FOREIGN KEY (cliente_id)
REFERENCES cliente(id_cliente),
valor DECIMAL(8,2),
status_pagamento ENUM ('Fatura Paga', 'Em débito')
);

INSERT INTO cliente
(nome)
VALUES
('Jose'),
('Carlos'),
('Marcos');

INSERT INTO mensalidade 
(cliente_id, valor, status_pagamento)
VALUES
(1, 650.00, 'Fatura Paga'),
(2, 670.00, 'Fatura Paga'),
(3, 690.00, 'Fatura Paga'),
(1, 720.00, 'Em débito'),
(2, 740.00, 'Em débito'),
(3, 760.00, 'Em débito'),
(3, 800.00, 'Em débito');

SELECT cliente_id, cliente.nome, valor, mensalidade.status_pagamento FROM mensalidade
JOIN cliente
ON mensalidade.cliente_id = cliente.id_cliente;

SELECT count(status_pagamento) AS contagem_mensalidades FROM mensalidade;

SELECT cliente.nome, count(status_pagamento) AS contagem_mensalidades FROM mensalidade
JOIN cliente
ON cliente.id_cliente = mensalidade.cliente_id
GROUP BY cliente.nome;

SELECT cliente.nome, sum(mensalidade.valor) AS valor_total FROM mensalidade
JOIN cliente
ON cliente.id_cliente = mensalidade.cliente_id
GROUP BY cliente.nome;

SELECT cliente.nome, avg(mensalidade.valor) AS valor_total FROM mensalidade
JOIN cliente
ON cliente.id_cliente = mensalidade.cliente_id
GROUP BY cliente.nome;

SELECT cliente.nome, sum(mensalidade.valor) AS debito_total FROM mensalidade
JOIN cliente 
ON cliente.id_cliente = mensalidade.cliente_id
WHERE mensalidade.status_pagamento = "Em débito"
GROUP BY cliente.nome;