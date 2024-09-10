CREATE DATABASE fhd_cinema;

USE fhd_cinema;

CREATE TABLE IF NOT EXISTS fhd_cinema.greetings (
    id INTEGER AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    PRIMARY KEY (id)
);
