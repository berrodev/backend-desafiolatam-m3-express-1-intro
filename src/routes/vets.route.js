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

module.exports = router;
