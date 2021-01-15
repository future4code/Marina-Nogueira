~~~SQL
CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
~~~

~~~SQL
CREATE TABLE Task (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    limit_date DATE NOT NULL,
    creatorUserId VARCHAR(255),
    FOREIGN KEY (creatorUserId)
        REFERENCES User (id)
);
~~~

~~~SQL
INSERT INTO User (id, name, nickname, email)
VALUES
("a", "Laura", "laureta", "laureta@gmail.com"),
("b", "Leia", "boi", "leia@gmail.com"),
("c", "Luke", "lusca", "luke@gmail.com");
~~~

~~~SQL
INSERT INTO Task (id, title, description, limit_date, creatorUserId)
VALUES
("001", "caçar mosca", "acabar com essa praga que assola nosso reino", "2021-02-15", "a"),
("002", "comer mato", "inspecionar, analisar e, por fim, ingerir quaisquer matinhos que pareçam interessantes", "2021-01-25", "b"),
("003", "invadir o quarto da humana", "tornar a entrada viável e discreta. ps: pára de abanar o rabo!!!", "2021-01-20", "c")
-- ("004", "brincar de lutinha", "5 minutinhos de pancadaria sem perder a amizade", "2021-02-15", "a")
;
~~~