-- Insertar veterinarias
INSERT INTO vet_clinics (name, address, phone)
VALUES 
('Veterinaria Los Andes', 'Av. Santa Rosa 1234, Santiago', '+56 2 12345678'),
('Clínica VetCare', 'Calle Independencia 456, Valparaíso', '+56 32 87654321'),
('Mascotas Felices', 'Av. Alemania 789, Concepción', '+56 41 23456789'),
('Salud Animal Temuco', 'Ruta 5 Sur KM 15, Temuco', '+56 45 56789012');

-- Insertar especialidades
INSERT INTO specialties (name)
VALUES 
('Medicina General'),
('Cirugía'),
('Cardiología'),
('Dermatología'),
('Mascotas Exóticas');

-- Asignar especialidades a veterinarias
INSERT INTO clinic_specialty (clinic_id, specialty_id)
VALUES 
(1, 1), -- Veterinaria Los Andes - Medicina General
(1, 2), -- Veterinaria Los Andes - Cirugía
(2, 3), -- Clínica VetCare - Cardiología
(2, 4), -- Clínica VetCare - Dermatología
(3, 1), -- Mascotas Felices - Medicina General
(3, 5), -- Mascotas Felices - Mascotas Exóticas
(4, 1), -- Salud Animal Temuco - Medicina General
(4, 2), -- Salud Animal Temuco - Cirugía
(4, 3); -- Salud Animal Temuco - Cardiología

-- Insertar servicios adicionales
INSERT INTO services (name)
VALUES 
('Peluquería'),
('Vacunación'),
('Hotel para Mascotas'),
('Servicios de Emergencia'),
('Visitas a Domicilio');

-- Asignar servicios a veterinarias
INSERT INTO clinic_service (clinic_id, service_id)
VALUES 
(1, 1), -- Veterinaria Los Andes - Peluquería
(1, 2), -- Veterinaria Los Andes - Vacunación
(2, 4), -- Clínica VetCare - Servicios de Emergencia
(2, 3), -- Clínica VetCare - Hotel para Mascotas
(3, 5), -- Mascotas Felices - Visitas a Domicilio
(3, 2), -- Mascotas Felices - Vacunación
(4, 4), -- Salud Animal Temuco - Servicios de Emergencia
(4, 2); -- Salud Animal Temuco - Vacunación

-- Insertar horarios de atención
INSERT INTO business_hours (clinic_id, day_of_week, opening_time, closing_time)
VALUES 
(1, 'Lunes', '09:00', '18:00'),
(1, 'Martes', '09:00', '18:00'),
(1, 'Sábado', '10:00', '14:00'),
(2, 'Lunes', '10:00', '19:00'),
(2, 'Miércoles', '10:00', '19:00'),
(3, 'Martes', '08:30', '17:30'),
(3, 'Jueves', '08:30', '17:30'),
(3, 'Sábado', '09:00', '14:00'),
(4, 'Lunes', '09:00', '18:00'),
(4, 'Viernes', '09:00', '17:00'),
(4, 'Domingo', '10:00', '15:00');
