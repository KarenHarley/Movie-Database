DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
  id AUTO_INCREMENT INT NOT NULL,
  movies_name VARCHAR(100)
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id AUTO_INCREMENT INT NOT NULL,
  movie_id INT,
  review TEXT,
 -- PRIMARY KEY (id)--
  FOREIGN KEY (movie_id)
  REFERENCES movies(id)
  ON DELETE SET NULL
);