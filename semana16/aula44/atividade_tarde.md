## Exercício 1
**a)** 
CREATE TABLE: cria tabela
VARCHAR(255): define string de até 255 caracteres
PRIMARY KEY: define o identificador único de cada item
NOT NULL: define que aquele valor não pode ser nulo
DATE: representa uma data no formato YYYY-MM-DD

**b)**
O comando SHOW DATABASES mostra a database em que a tabela está.
O comando SHOW TABLES mostra as tabelas dentro daquela database.

**c)**
O comando DESCRIBE Actor retorna:
    - os campos da tabela
    - o tipo de cada campo
    - se cada campo pode ter valor nulo ou não
    - qual deles é o PRIMARY KEY


## Exercício 2
**b)**
A mensagem de erro é "Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'".
O erro 1062 indica que o id do elemento descrito na query já foi usado em outro elemento.
Como o id é o PRIMARY KEY, o workbench retorna um erro e não permite a inclusão do elemento.

**c)**
A mensagem de erro é "Error Code: 1136. Column count doesn't match value count at row 1".
O workbench retornou esse erro pois apenas parte das colunas foi passada no comando INSERT INTO (apenas id, name, salary), mas o elemento foi passado com todos os valores (id, name, salary, birth_date, gender).
Para incluir esse elemento, o comando deve ser:

~~~ 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
~~~

**d)**
A mensagem de erro é "Error Code: 1364. Field 'name' doesn't have a default value".
Esse erro foi retornado pois o valor do campo "name" (que não pode ser nulo) não foi passado.
Para incluir esse elemento, o comando deve ser:

~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antonio Fagundes",
400000,
"1949-04-18", 
"male"
);
~~~

**e)**
A mensagem de erro é "Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1".
O erro aconteceu porque o campo birth_date, do tipo DATE, foi preenchido sem aspas.
Para que o código funcione e o elemento seja adicionado, o comando deve ser:

~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005", 
"Juliana Paes",
719333.33,
"1979-03-26", 
"female"
);
~~~


## Exercício 3
**a)**
Para retornar todas as informações sobre as atrizes, a query deve ser:
~~~
SELECT *
FROM Actor
WHERE gender = "female";
~~~

**b)**
Para retornar o salário do ator Tony Ramos, a query deve ser:
~~~
SELECT salary
FROM Actor
WHERE name = "Tony Ramos";
~~~

**c)**
A query abaixo retorna uma tabela com todos os campos, mas nenhum elemento. 
~~~ 
SELECT *
FROM Actor
WHERE gender = "invalid";
~~~
Isso acontece porque todos os elementos da tabela têm o campo gender com informações válidas.

**d)**
Para retornar id, nome e salário de todes que tenham um salário máximo de R$500.000, a query deve ser:
~~~
SELECT id, name, salary
FROM Actor
WHERE salary <= 500000;
~~~

**e)**
A mensagem de erro é "Error Code: 1054. Unknown column 'nome' in 'field list'".
Esse erro aconteceu porque o nome da coluna _name_ foi passado incorretamente.
Para que a query funcione corretamente, o comando deve ser:
~~~
SELECT id, name
FROM Actor
WHERE id = "002";
~~~


## Exercício 4
**a)**
A query acima retorna todas as informações da tabela para os elementos cujo campo _name_ comece com A ou com J e cujo campo _salary_ seja maior do que 300000.

**b)**
A query que retorna atores e atrizes cujos nomes não começam com a letra A e que têm salário acima de R$350.000 é:
~~~
SELECT *
FROM Actor
WHERE name NOT LIKE "A%"
AND salary > 350000;
~~~

**c)**
A query que retorna atrizes e atores que possuam "G" ou "g" em qualquer parte do nome é:
~~~
SELECT *
FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");
~~~

**d)**
A query que retorna atrizes e atores cujos nomes contenham as letras "A", "a", "G" ou "g" e cujos salários estão entre R$350.000 e R$900.000 é:
~~~
SELECT *
FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%")
AND salary BETWEEN 350000 AND 900000;
~~~


## Exercício 5
**a)**
~~~
CREATE TABLE Movies
(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
rating FLOAT NOT NULL
);
~~~
A query acima cria uma tabela chamada Movies, cujas colunas são _id_, _name_, _synopsis_, *release_date* e _rating_.
Cada coluna tem seu respectivo tipo e nenhuma delas pode ter valor nulo. A PRIMARY KEY é a _id_.

**b)**
~~~
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
~~~

**c)**
~~~
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES (
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
~~~

**d)**
~~~
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
~~~

**e)**
~~~
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES (
"004",
"Estômago",
"Raimundo Nonato foi para a cidade grande na esperança de ter uma vida melhor. Contratado como faxineiro em um bar, logo ele descobre que possui um talento nato para a cozinha. Com suas coxinhas Raimundo transforma o bar num sucesso. Giovanni, o dono de um conhecido restaurante italiano da região, o contrata como assistente de cozinheiro. A cozinha italiana é uma grande descoberta para Raimundo, que passa também a ter uma casa, roupas melhores, relacionamentos sociais e um amor: a prostituta Iria.",
"2008-04-11",
9.5
); 
~~~


## Exercício 6
**a)**
~~~
SELECT id, name, rating
FROM Movies
WHERE id = "003";
~~~

**b)**
~~~
SELECT *
FROM Movies
WHERE name = "Estômago";
~~~

**c)**
~~~
SELECT id, name, synopsis
FROM Movies
WHERE rating >= 7;
~~~


## Exercício 7
**a)**
~~~
SELECT *
FROM Movies
WHERE name LIKE "%vida%";
~~~

**b)**
~~~
SELECT *
FROM Movies
WHERE name LIKE "%cidade%"
OR synopsis LIKE "%cidade%";
~~~

**c)**
~~~
SELECT *
FROM Movies
WHERE release_date < CURDATE();
~~~

**d)**
~~~
SELECT *
FROM Movies
WHERE release_date < CURDATE()
AND (name LIKE "%flor%" OR synopsis LIKE "%flor%")
AND rating > 7;
~~~