## Exercício 1
**a)**
A _chave estrangeira_ é uma chave cuja propriedade e valor se referencia à _primary key_ de outra tabela.

**b)**
~~~SQL
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id INT,
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
~~~

~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("um", "TOP!", 9.5, 1),
("dois", "super emocionante", 10, 2),
("três", "engraçado, selton mello é ótimo!", 9, 4),
("quatro", "um dos meus filmes br favoritos!", 10, 5),
("cinco", "história clássica recontada", 8, 3);
~~~

**c)**
~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("seis", "muita gritaria pra pouca história", 4, 10);
~~~

A mensagem de erro é 
>"Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-marina-azzi`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))"

ou seja, não é possível criar uma linha que se referencia a um item de outra tabela se esse item não existe de fato.

**d)**
~~~SQL
ALTER TABLE Movie
DROP COLUMN rating;
~~~

**e)**
~~~SQL
DELETE FROM Movie
WHERE title = "Estômago";
~~~

A mensagem de erro é
>Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-marina-azzi`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

ou seja, não é possível deletar uma linha se a primary key desse item está sendo referenciada em outra tabela.


## Exercício 2
**a)**
~~~SQL
CREATE TABLE MovieCast (
movie_id INT,
actor_id INT,
FOREIGN KEY (movie_id) REFERENCES Movie(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
~~~

A tabela acima relaciona os dados da tabela Actor com a tabela Movie, através das id's (movie_id e actor_id) que referenciam as primary keys dessas tabelas.

**b)**
~~~SQL
INSERT INTO MovieCast
VALUES
(1, 1),
(1, 3),
(2, 2),
(2, 3),
(3, 5),
(3, 4),
(4, 1),
(4, 2),
(5, 4),
(5, 5);
~~~

**c)**
~~~SQL
INSERT INTO MovieCast
VALUES
(7, 2);
~~~

A mensagem de erro é

>Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-marina-azzi`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

ou seja, não é possível criar uma relação entre os itens de duas tabelas se um ou mais desses itens não existem.

**d)**
~~~SQL
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
~~~

A mensagem de erro é

>Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-marina-azzi`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

ou seja, não é possível apagar uma linha se a primary key desse item é referenciada em outra tabela.


## Exercício 3
**a)**
A query acima relaciona as tabelas Movie e Rating, organizando os dados de acordo com os id's de cada uma delas (Movie.id e Rating.movie_id). O operador _ON_ faz essa condição e mantém os dados exibidos na resposta da query organizados e sem repetições.

**b)**
~~~SQL
SELECT Movie.id, title, rate
FROM Movie
JOIN Rating ON Movie.id = Rating.movie_id;
~~~


## Exercício 4
**a)**
~~~SQL
SELECT Movie.id, title, rate, comment
FROM Movie
LEFT JOIN Rating 
ON Movie.id = Rating.movie_id;
~~~

**b)**
~~~SQL
SELECT Movie.id, title, actor_id 
FROM Movie
RIGHT JOIN MovieCast 
ON Movie.id = MovieCast.movie_id;
~~~

**c)**
~~~SQL
SELECT AVG(rate), title
FROM Rating
LEFT JOIN Movie
ON Movie.id = Rating.movie_id
GROUP BY title;
~~~


## Exercício 5
**a)**
A query mostrada relaciona os dados de três tabelas diferentes: Movie, MovieCast e Actor.
Movie e Actor são tabelas independentes, ou seja, elas não tem nenhuma coluna que referencia outra tabela.
Já a MovieCast é uma tabela construída a partir de referências da Movie (*movie_id*) e da Actor (*actor_id*).
Assim, são necessários dois JOIN's: um para relacionar Movie e MovieCast e outro para relacionar MovieCast e Actor.

**b)**
~~~SQL
SELECT 
    Movie.id as ID_do_Filme, title as Título_do_Filme, Actor.id as ID_do_Elenco, name as Nome_do_Elenco
FROM
    Movie
        LEFT JOIN
    MovieCast ON Movie.id = MovieCast.movie_id
        JOIN
    Actor ON Actor.id = MovieCast.actor_id;
~~~

**c)**
O resultado foi o mesmo.

**d)**
~~~SQL
SELECT 
    Movie.id AS Id_do_Filme,
    title AS Título_do_Filme,
    Actor.id AS Id_do_Elenco,
    Actor.name AS Nome_do_Elenco,
    Rating.rate AS Nota,
    Rating.comment AS Comentários
FROM
    Movie
        LEFT JOIN
    Rating ON Rating.movie_id = Movie.id
        LEFT JOIN
    MovieCast ON Movie.id = MovieCast.movie_id
        JOIN
    Actor ON Actor.id = MovieCast.actor_id;
~~~