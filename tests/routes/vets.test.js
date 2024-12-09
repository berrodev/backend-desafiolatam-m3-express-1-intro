const request = require('supertest');
const app = require('../../src/index.js');

const vets = [
  {
    id: 1,
    name: 'Veterinaria Los Andes',
    address: 'Av. Santa Rosa 1234, Santiago',
    phone: '+56 2 12345678',
  },
  {
    id: 2,
    name: 'Clínica VetCare',
    address: 'Calle Independencia 456, Valparaíso',
    phone: '+56 32 87654321',
  },
  {
    id: 3,
    name: 'Mascotas Felices',
    address: 'Av. Alemania 789, Concepción',
    phone: '+56 41 23456789',
  },
  {
    id: 4,
    name: 'Salud Animal Temuco',
    address: 'Ruta 5 Sur KM 15, Temuco',
    phone: '+56 45 56789012',
  },
];

jest.mock('../../src/models/vets.model.js', () => ({
  getVeterinariesClinics: jest.fn(() => Promise.resolve(vets)),
  addVeterinariesClinics: jest.fn((name, address, phone) => {
    const vet = {
      id: vets.length + 1,
      name,
      address,
      phone,
    };
    vets.push(vet);
    return Promise.resolve();
  }),
  deleteVeterinariesClinics: jest.fn((id) => {
    const vet = vets.find((v) => v.id === parseInt(id));
    if (vet) return Promise.resolve({ rowCount: 1 });
  }),
  updateVeterinariesClinics: jest.fn((id, name, address, phone) => {
    const index = vets.findIndex((v) => v.id === parseInt(id));
    if (index === -1) {
      return Promise.resolve({ rowCount: 0 });
    }
    vets[index] = { id: parseInt(id), name, address, phone };
    return Promise.resolve({ rowCount: 1 });
  }),
}));

describe('GET /api/v1/vets', () => {
  it('should return all veterinaries', async () => {
    const response = await request(app).get('/api/v1/vets');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(vets);
  });

  it('should return a specific veterinary', async () => {
    const response = await request(app).get('/api/v1/vets/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(vets[0]);
  });
});
