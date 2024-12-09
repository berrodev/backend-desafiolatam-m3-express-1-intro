const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '141414',
  database: 'vets',
  allowExitOnIdle: true,
});

const getVeterinariesClinics = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM vet_clinics');
  return rows;
};

//Agregar Veterinaria
const addVeterinariesClinics = async (name, address, phone) => {
  const consulta = 'INSERT INTO vet_clinics values (DEFAULT, $1, $2, $3)';
  const values = [name, address, phone];
  return await pool.query(consulta, values);
};

// Eliminar Veterinaria
const deleteVeterinariesClinics = async (id) => {
  const consulta = 'DELETE FROM vet_clinics WHERE id = $1';
  const values = [id];
  return await pool.query(consulta, values);
};

// Actualizar Veterinaria
const updateVeterinariesClinics = async (id, name, address, phone) => {
  const consulta =
    'UPDATE vet_clinics SET name = $2, address = $3, phone = $4 WHERE id = $1';
  const values = [id, name, address, phone];
  return await pool.query(consulta, values);
};

// addVeterinariesClinics('Veterinaria Zoo', 'Providencia 9000', '22222222');

// getVeterinariesClinics();

// deleteVeterinariesClinics(1);

// updateVeterinariesClinics(2, 'Veterinaria Petco', 'Providencia 111', '333333');

module.exports = {
  getVeterinariesClinics,
  addVeterinariesClinics,
  deleteVeterinariesClinics,
  updateVeterinariesClinics,
};
