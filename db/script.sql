-- Database: vets

DROP DATABASE IF EXISTS vets;

CREATE DATABASE vets;
    
-- Table for veterinary clinics
CREATE TABLE vet_clinics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phone VARCHAR(15) NOT NULL
);




-- -- Table for specialties
-- CREATE TABLE specialties (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL
-- );

-- -- Relationship between vet clinics and specialties
-- CREATE TABLE clinic_specialty (
--     clinic_id INT REFERENCES vet_clinics(id) ON DELETE CASCADE,
--     specialty_id INT REFERENCES specialties(id) ON DELETE CASCADE,
--     PRIMARY KEY (clinic_id, specialty_id)
-- );

-- -- Table for additional services
-- CREATE TABLE services (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL
-- );

-- -- Relationship between vet clinics and additional services
-- CREATE TABLE clinic_service (
--     clinic_id INT REFERENCES vet_clinics(id) ON DELETE CASCADE,
--     service_id INT REFERENCES services(id) ON DELETE CASCADE,
--     PRIMARY KEY (clinic_id, service_id)
-- );

-- -- Table for business hours
-- CREATE TABLE business_hours (
--     id SERIAL PRIMARY KEY,
--     clinic_id INT REFERENCES vet_clinics(id) ON DELETE CASCADE,
--     day_of_week VARCHAR(15) NOT NULL, -- Example: "Monday", "Tuesday"
--     opening_time TIME NOT NULL,
--     closing_time TIME NOT NULL
-- );
