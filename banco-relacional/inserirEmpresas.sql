INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 98498165131),
    ('Vale', 45846158165),
    ('Cielo', 8646139887)

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);