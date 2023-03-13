DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA IF NOT EXISTS Trybesmith;

CREATE TABLE Trybesmith.users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  vocation TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES Trybesmith.users (id)
);

CREATE TABLE Trybesmith.products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  order_id INTEGER,
  FOREIGN KEY (order_id) REFERENCES Trybesmith.orders (id)
);

INSERT INTO
  Trybesmith.users (username, vocation, level, password)
VALUES
  ("reigal", "Guerreiro", 10, "1dragaonoceu"),
  ("vyrion", "Inventor", 8, "pagandodividas"),
  ("yraa", "Ladina", 5, "valarmorg");

INSERT INTO
  Trybesmith.orders (user_id)
VALUES
  (1),
  (3),
  (2);

INSERT INTO
  Trybesmith.products (name, amount)
VALUES
  ("Espada curta", "10 peças de ouro");

INSERT INTO
  Trybesmith.products (name, amount, order_id)
VALUES
  (
    "Escudo desnecessariamente grande",
    "20 peças de ouro",
    1
  ),
  ("Adaga de Aço Valírico", "1 peça de ouro", 2),
  ("Colar de fogo", "1 peça de ouro", 2),
  ("Engenhoca aleatória", "15 peças de ouro", 3);
