-- Database: vets

DROP DATABASE IF EXISTS vets;

CREATE DATABASE vets;

DROP TABLE IF EXISTS vet_clinics;

-- Table for veterinary clinics
CREATE TABLE vet_clinics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Insert vets clinics
INSERT INTO vet_clinics (name, address, phone)
VALUES 
('Veterinaria Los Andes', 'Av. Santa Rosa 1234, Santiago', '+56 2 12345678'),
('Clínica VetCare', 'Calle Independencia 456, Valparaíso', '+56 32 87654321'),
('Mascotas Felices', 'Av. Alemania 789, Concepción', '+56 41 23456789'),
('Salud Animal Temuco', 'Ruta 5 Sur KM 15, Temuco', '+56 45 56789012');

DROP TABLE IF EXISTS users;

-- Table for users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
