## Exercício 1
**a)**
O comando abaixo deleta a coluna _salary_.

**b)**
O comando altera o nome da coluna _gender_ para _sex_.

**c)**
O comando altera a quantidade máxima de caracteres da coluna _gender_ de 6 para 255.

**d)**
~~~ MySQL
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100)
~~~


## Exercício 2
**a)**
~~~SQL
UPDATE Actor
SET 
    name = "Fernanda M.",
    birth_date = "1990-04-24"
WHERE id = "003";
~~~

**b)**
~~~SQL
UPDATE Actor
SET 
    name = "JULIANA PÃES"
WHERE id = "005";
~~~

~~~SQL
UPDATE Actor
SET 
    name = "Juliana Paes"
WHERE id = "005";
~~~

**c)**
~~~SQL
UPDATE Actor
SET
    name = "Juliana P",
    salary = 720000,
    birth_date = "1990-04-24",
    gender = "mulé"
WHERE id = "005";
~~~

**d)**
O teste feito não originou nenhum erro. No entanto, nenhum update foi feito, já que o id utilizado não se refere a qualquer elemento existente na tabela.


## Exercício 3
**a)**
~~~SQL
DELETE
FROM Actor
WHERE name = "Fernanda Montenegro";
~~~

**b)**
~~~SQL
DELETE
FROM Actor
WHERE gender = "male" 
AND salary > 1000000;
~~~


## Exercício 4
**a)**
~~~SQL
SELECT MAX(salary)
FROM Actor;
~~~

**b)**
~~~SQL
SELECT MIN(salary) 
FROM Actor
WHERE gender = "female";
~~~

**c)**
~~~SQL
SELECT count(*)
from Actor
where gender = "female";
~~~

**d)**
~~~SQL
SELECT SUM(salary)
FROM Actor;
~~~


## Exercício 5
**a)**
A query testada agrupa e conta os elementos da tabela Actor de acordo com a coluna gender.

**b)**
~~~SQL
SELECT id, name
FROM Actor
ORDER BY name DESC;
~~~

**c)**
~~~SQL
SELECT *
FROM Actor
ORDER BY salary ASC;
~~~

**d)**
~~~SQL
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
~~~

**e)**
~~~SQL
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
~~~


## Exercício 6
**a)**
~~~SQL
ALTER TABLE Movies 
ADD playing_limit_date DATE;
~~~

**b)**
~~~SQL
ALTER TABLE Movies
CHANGE rating rating FLOAT;
~~~

**c)**
~~~SQL
UPDATE Movies
SET playing_limit_date = "2022-01-13"
WHERE id = "001";
~~~

~~~SQL
UPDATE Movies
SET playing_limit_date = "2010-01-13"
WHERE id = "002";
~~~

**d)**
~~~SQL
DELETE FROM Movies
WHERE id = "001";
~~~

~~~SQL
UPDATE Movies
SET synopsis = "Nova sinopse para teste do exercício 6 do dia 12 de janeiro de 2020"
WHERE id = "001";
~~~

O segundo comando, para fazer o update da sinopse, não originou nenhum erro. No entanto, nenhuma alteração foi realizada na tabela, já que não existe um elemento com o id indicado pela query.


## Exercício 7
**a)**
~~~SQL
SELECT COUNT(*)
FROM Movies
WHERE rating > 7.5;
~~~

**b)**
~~~SQL
SELECT AVG(rating)
FROM Movies;
~~~

**c)**
~~~SQL
SELECT COUNT(*)
FROM Movies
WHERE playing_limit_date > CURDATE();
~~~

**d)**
~~~SQL
SELECT COUNT(*)
FROM Movies
WHERE release_date > CURDATE();
~~~

**e)**
~~~SQL
SELECT MAX(rating)
FROM Movies;
~~~

**f)**
~~~SQL
SELECT MIN(rating)
FROM Movies;
~~~


## Exercício 8
**a)**
~~~SQL
SELECT *
FROM Movies
ORDER BY name ASC;
~~~

**b)**
~~~SQL
SELECT *
FROM Movies
ORDER BY name DESC
LIMIT 5;
~~~

**c)**
~~~SQL
SELECT *
FROM Movies
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
~~~

**d)**
~~~SQL
SELECT *
FROM Movies
ORDER BY rating DESC
LIMIT 3;
~~~