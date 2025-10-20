CREATE DATABASE escola_xyz;

USE escola_xyz;

CREATE TABLE aluno (
id_aluno INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
nome VARCHAR(75)
);

CREATE TABLE curso (
id_curso INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(150),
duracao INT
);

CREATE TABLE inscricao (
id_inscricao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
aluno_id INT,
dt_inscricao DATE,
curso_id INT,
FOREIGN KEY(aluno_id)
REFERENCES aluno(id_aluno),
FOREIGN KEY(curso_id)
REFERENCES curso(id_curso)
);

CREATE TABLE mensalidade (
id_mensalidade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
inscricao_id INT,
dt_vencimento DATE,
valor DECIMAL(8,2),
status_pagamento ENUM('Pago', 'Não Pago'),
FOREIGN KEY(inscricao_id)
REFERENCES inscricao(id_inscricao)
);

INSERT INTO aluno
(nome)
VALUES
('Mathuê'),
('Fred Flappury'),
('Groomit'),
('Wallace'),
('Franklin Roberts');

INSERT INTO curso
(nome, duracao)
VALUES
("Venda de Cursos", "5"),
('Curso de Suborno', 300),
('Curso de Arte no Século 10', 1000),
('Curso de Como Fazer Bolo no Norte do Brasil', 200),
('Curso de Enve-stimentos e Poruguês', 150);

INSERT INTO inscricao
(dt_inscricao, aluno_id, curso_id)
VALUES
('2020-01-02', 4, 4),
('2020-01-02', 3, 3),
('2020-01-02', 2, 2),
('2020-06-02', 4, 4),
('2020-06-02', 3, 3),
('2020-06-02', 2, 2);

INSERT INTO inscricao
(dt_inscricao)
VALUES
('2020-06-02');

INSERT INTO mensalidade
(dt_vencimento, valor, status_pagamento, inscricao_id)
VALUES
(2020-01-10, 550, 'Pago', 1),
(2020-01-10, 540, 'Pago', 2),
(2020-01-10, 530, 'Pago', 3),	
(2020-06-10, 580, 'Não Pago', 4),
(2020-06-10, 570, 'Não Pago', 5),
(2020-06-10, 560, 'Não Pago', 6);

SELECT aluno.nome, sum(mensalidade.valor) FROM inscricao
JOIN aluno
ON aluno.id_aluno = inscricao.aluno_id
JOIN mensalidade
ON inscricao.id_inscricao = mensalidade.inscricao_id
GROUP BY aluno.nome;

SELECT sum(mensalidade.valor) as valor_total_nao_pago FROM inscricao
JOIN mensalidade
ON inscricao.id_inscricao = mensalidade.inscricao_id
WHERE mensalidade.status_pagamento = "Não Pago"
GROUP BY  mensalidade.status_pagamento;

SELECT aluno.nome, avg(mensalidade.valor) FROM inscricao
JOIN aluno
ON aluno.id_aluno = inscricao.aluno_id
JOIN mensalidade
ON inscricao.id_inscricao = mensalidade.inscricao_id
WHERE mensalidade.status_pagamento = "Pago"
GROUP BY aluno.nome;

SELECT max(valor) FROM mensalidade;

SELECT min(valor) FROM mensalidade;

SELECT min(valor) from mensalidade
WHERE status_pagamento = "Não Pago";

SELECT nome FROM aluno
GROUP BY nome;

SELECT aluno.nome, mensalidade.dt_vencimento FROM inscricao
JOIN aluno
ON aluno.id_aluno = inscricao.aluno_id
JOIN mensalidade
ON inscricao.id_inscricao = mensalidade.inscricao_id
WHERE mensalidade.dt_vencimento > '2020-06-09';

SELECT aluno.nome, mensalidade.dt_vencimento FROM inscricao
JOIN aluno
ON aluno.id_aluno = inscricao.aluno_id
JOIN mensalidade
ON inscricao.id_inscricao = mensalidade.inscricao_id
WHERE mensalidade.dt_vencimento < '2020-06-10';

SELECT aluno.nome, sum(mensalidade.valor) FROM inscricao
JOIN aluno
ON aluno.id_aluno = inscricao.aluno_id
JOIN mensalidade
ON inscricao.id_inscricao = mensalidade.inscricao_id
WHERE mensalidade.id_mensalidade >=2 AND mensalidade.id_mensalidade <= 5
GROUP BY aluno.nome;