const { Router } = require('express');
const {
  getVeterinariesClinics,
  addVeterinariesClinics,
  deleteVeterinariesClinics,
  updateVeterinariesClinics,
} = require('../models/vets.model.js');

const router = Router();

// /api/v1/vets

//Obtener productos

/**
 * @openapi
 *  /api/v1/vets:
 *    get:
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Returns a mysterious string.
 *        500:
 *          description: Internal server error
 *
 */

// Ruta para obtener todas las veterinarias
router.get('/', async (req, res) => {
  try {
    const vets = await getVeterinariesClinics();
    res.json(vets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @openapi
 * /api/v1/vets/{id}:
 *   get:
 *     description: Get a veterinary by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Veterinary not found
 *       500:
 *         description: Internal server error
 */

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

/**
 * @openapi
 * /api/v1/vets/:
 *   post:
 *     description: Add a veterinary
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - name
 *               - address
 *               - phone
 *     responses:
 *       201:
 *         description: Veterinary added
 *       400:
 *         description: Missing fields
 *       500:
 *         description: Internal server error
 */

// Ruta para agregar una veterinaria
router.post('/', async (req, res) => {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone) {
    res.status(400).json({ error: 'Missing fields' });
    return;
  }
  try {
    await addVeterinariesClinics(name, address, phone);
    res.status(201).send('Veterinary added');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @openapi
 * /api/v1/vets/{id}:
 *  delete:
 *    description: Delete a veterinary by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Veterinary deleted
 *      404:
 *        description: Veterinary not found
 *      500:
 *        description: Internal server error
 */
// Ruta para eliminar una veterinaria
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await deleteVeterinariesClinics(id);
    if (rowCount === 0) {
      res.status(404).send('Veterinary not found');
    } else {
      res.send('Veterinary deleted');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @openapi
 * /api/v1/vets/{id}:
 *   put:
 *     description: Update a veterinary by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - name
 *               - address
 *               - phone
 *     responses:
 *       200:
 *         description: Veterinary updated
 *       404:
 *         description: Veterinary not found
 *       500:
 *         description: Internal server error
 */

// Ruta para actualizar una veterinaria
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address, phone } = req.body;
  try {
    const { rowCount } = await updateVeterinariesClinics(
      id,
      name,
      address,
      phone
    );
    if (rowCount === 0) {
      res.status(404).send('Veterinary not found');
    } else {
      res.send('Veterinary updated');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
