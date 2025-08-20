CREATE DATABASE projeto_xpto;

USE projeto_xpto;

CREATE TABLE empresa(
id_empresa INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
codigo INT,
nome VARCHAR(75),
rua VARCHAR(45),
numero INT,
bairro VARCHAR(45),
cidade VARCHAR(45),
estado VARCHAR(45),
cep INT
);

CREATE TABLE consultor(
id_consultor INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
cpf BIGINT(11),
especializacao VARCHAR(75),
funcao_exercida VARCHAR(75)
);

CREATE TABLE unidade(
id_unidade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_gerente VARCHAR(75),
nome_supervisor VARCHAR(75)
);

CREATE TABLE departamento(
id_departamento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(75),
sigla VARCHAR(10),
centro_custo INT,
unidade_id INT,
FOREIGN KEY (unidade_id)
REFERENCES unidade(id_unidade) 
);

-- A tabela projeto recebe as chaves estrangeiras: id_departamento, id_empresa, id_consultor

CREATE TABLE projeto(
id_projeto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
numero INT,
data_inicio DATE,
data_fim DATE, 
valor_projeto DECIMAL(8,2),
departamento_id INT, 
empresa_id INT,
consultor_id INT,
FOREIGN KEY (departamento_id)
REFERENCES departamento(id_departamento),
FOREIGN KEY (empresa_id)
REFERENCES empresa(id_empresa),
FOREIGN KEY (consultor_id)
REFERENCES consultor(id_consultor)
);