CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
)

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    books_id INTEGER REFERENCES categories(id),
)

CREATE TABLE films (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    films_id INTEGER REFERENCES categories(id),
)


INSERT INTO categories (name)
    values
('Books')
('Films')

INSERT INTO films (name)
  values
('HALLOWEEN'),
('HALLOWEEN 2'),
('THE THING'),
('FRIDAY THE 13TH'),
('NIGHTMARE ON ELM STREET')

INSERT INTO books (name)
  values
('CYCLE OF THE WEREWOLF'),
('CARRIE'),
('MY PET WEREWOLF'),
('THE STAND'),
('DRACULA')
