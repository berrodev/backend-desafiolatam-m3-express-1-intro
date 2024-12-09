const { Router } = require('express');
const {
  getVeterinariesClinics,
  addVeterinariesClinics,
  deleteVeterinariesClinics,
  updateVeterinariesClinics,
} = require('../consultas.js');

const router = Router();

// /api/v1/vets

// Ruta para obtener todas las veterinarias
router.get('/', async (req, res) => {
  try {
    const vets = await getVeterinariesClinics();
    res.json(vets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para obtener una veterinaria en particular

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const vets = await getVeterinariesClinics();
    const vet = vets.find((v) => v.id === parseInt(id));
    if (vet) {
      res.json(vet);
    } else {
      res.status(404).send('Veterinary not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para agregar una veterinaria
router.post('/', async (req, res) => {
  const { name, address, phone } = req.body;
  try {
    await addVeterinariesClinics(name, address, phone);

    res.status(201).send('Veterinary added');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para eliminar una veterinaria
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteVeterinariesClinics(id);
    res.send('Veterinary deleted');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar una veterinaria
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address, phone } = req.body;
  try {
    const vet = await updateVeterinariesClinics(id, name, address, phone);
    console.log(vet);
    if (!vet) {
      res.status(404).send('Veterinary not found');
    } else {
      res.send('Veterinary updated');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
