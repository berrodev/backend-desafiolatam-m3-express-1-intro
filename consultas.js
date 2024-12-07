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
  console.log(rows);
  return rows;
};

//Agregar Veterinaria
const addVeterinariesClinics = async (name, address, phone) => {
  const consulta = 'INSERT INTO vet_clinics values (DEFAULT, $1, $2, $3)';
  const values = [name, address, phone];
  const result = await pool.query(consulta, values);
  console.log('Veterinaria agregada');
  console.log(result);
  getVeterinariesClinics();
};

addVeterinariesClinics('Veterinaria Zoo', 'Providencia 9000', '22222222');

getVeterinariesClinics();
