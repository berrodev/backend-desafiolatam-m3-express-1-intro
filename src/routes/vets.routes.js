import { Router } from 'express';
import {
  getVets,
  addVet,
  deleteVet,
  updateVet,
  getVetById,
} from '../controllers/vets.controller.js';

const router = Router();

// /api/v1/vets

//Obtener productos

/**
 * @openapi
 *  /api/v1/vets:
 *    get:
 *      description: Get all veterinaries
 *      responses:
 *        200:
 *          description: Success
 *        500:
 *          description: Internal server error
 *
 */

// Ruta para obtener todas las veterinarias
router.get('/', getVets);

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

router.get('/:id', getVetById);

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
router.post('/', addVet);
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
router.delete('/:id', deleteVet);

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
router.put('/:id', updateVet);

export default router;
