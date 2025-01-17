import { Vets } from '../models/vets.model.js';

export const getVets = async (req, res) => {
  console.log('getVets');
  try {
    const vets = await Vets.findAll();
    res.json(vets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVetById = async (req, res) => {
  try {
    const { id } = req.params;
    const vet = await Vets.findByPk(id);
    res.json(vet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addVet = async (req, res) => {
  try {
    const newVet = await Vets.create(req.body);
    res.json(newVet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteVet = async (req, res) => {
  try {
    const { id } = req.params;
    const vet = await Vets.findByPk(id);
    await vet.destroy();
    res.json({ message: 'Vet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateVet = async (req, res) => {
  try {
    const { id } = req.params;
    const vet = await Vets.findByPk(id);
    await vet.update(req.body);
    res.json(vet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
