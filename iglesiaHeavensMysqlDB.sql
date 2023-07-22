CREATE DATABASE iglesiaheavensmysqldb;

USE iglesiaheavensmysqldb;

CREATE TABLE departamento(
    idDepartamento INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreDepartamento VARCHAR(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci; 

CREATE TABLE municipio(
    idMunicipio INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreMunicipio VARCHAR(60) NOT NULL,
    idDepartamento INT NOT NULL,
    Foreign Key (idDepartamento) REFERENCES departamento (idDepartamento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci; 

CREATE TABLE comuna(
    idComuna INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreComuna VARCHAR(60) NOT NULL,
    idMunicipio INT NOT NULL,
    Foreign Key (idMunicipio) REFERENCES municipio (idMunicipio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE barrio(
    idBarrio INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreBarrio VARCHAR(60) NOT NULL,
    idComuna INT NOT NULL,
    Foreign Key (idComuna) REFERENCES comuna (idComuna)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE creyente(
    idIdentificacion INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    nroCelular INT NOT NULL,
    direccion VARCHAR(60) NOT NULL,
    idBarrio INT NOT NULL,
    Foreign Key (idBarrio) REFERENCES barrio (idBarrio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;