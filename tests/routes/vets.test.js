const request = require('supertest');
const app = require('../../src/index.js');

const DUMMY_VETS = [
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
];

// Se intercepta el módulo de la base de datos para simular su comportamiento
jest.mock('../../src/models/vets.model.js', () => ({
  getVeterinariesClinics: jest.fn(() => Promise.resolve(DUMMY_VETS)),
  addVeterinariesClinics: jest.fn((name, address, phone) => {
    const vet = {
      id: DUMMY_VETS.length + 1,
      name,
      address,
      phone,
    };
    DUMMY_VETS.push(vet);
    return Promise.resolve();
  }),
  deleteVeterinariesClinics: jest.fn((id) => {
    const vet = DUMMY_VETS.find((v) => v.id === parseInt(id));
    if (vet)
      return Promise.resolve(DUMMY_VETS.splice(DUMMY_VETS.indexOf(vet), 1));
    else {
      return Promise.resolve({ rowCount: 0 });
    }
  }),
  updateVeterinariesClinics: jest.fn((id, name, address, phone) => {
    const index = DUMMY_VETS.findIndex((v) => v.id === parseInt(id));
    if (index === -1) {
      return Promise.resolve({ rowCount: 0 });
    }
    DUMMY_VETS[index] = { id: parseInt(id), name, address, phone };
    return Promise.resolve({ rowCount: 1 });
  }),
}));

describe('/api/v1/vets', () => {
  it('GET should return all veterinaries', async () => {
    const { statusCode, body } = await request(app).get('/api/v1/vets');
    expect(statusCode).toBe(200);
    expect(body).toEqual(DUMMY_VETS);
  });

  it('GET should return a specific veterinary', async () => {
    const { statusCode, body } = await request(app).get('/api/v1/vets/1');
    expect(statusCode).toBe(200);
    expect(body).toEqual(DUMMY_VETS[0]);
  });

  it('GET should return 404 if veterinary is not found', async () => {
    const { statusCode } = await request(app).get('/api/v1/vets/3');
    expect(statusCode).toBe(404);
  });

  it('POST should add a new veterinary', async () => {
    const newVet = {
      name: 'Clínica Veterinaria Animalia',
      address: 'Calle Larga 789, La Serena',
      phone: '+569123123123',
    };
    const { statusCode } = await request(app).post('/api/v1/vets').send(newVet);
    expect(statusCode).toBe(201);
    expect(DUMMY_VETS).toContainEqual(expect.objectContaining(newVet));
  });

  it('POST should return 400 if missing fields', async () => {
    const { statusCode } = await request(app).post('/api/v1/vets').send({});
    expect(statusCode).toBe(400);
  });

  it('DELETE should remove a veterinary', async () => {
    const { statusCode } = await request(app).delete('/api/v1/vets/1');
    console.log(statusCode);

    expect(statusCode).toBe(200);
    expect(DUMMY_VETS).not.toContainEqual(expect.objectContaining({ id: 1 }));
  });

  it('DELETE should return 404 if veterinary is not found', async () => {
    const { statusCode } = await request(app).delete('/api/v1/vets/5');
    expect(statusCode).toBe(404);
  });

  it('PUT should update a veterinary', async () => {
    const updatedVet = {
      name: 'Clínica Veterinaria Animalia',
      address: 'Calle Larga 789, La Serena',
      phone: '+569123123123',
    };
    const { statusCode } = await request(app)
      .put('/api/v1/vets/2')
      .send(updatedVet);
    expect(statusCode).toBe(200);
    expect(DUMMY_VETS).toContainEqual(expect.objectContaining(updatedVet));
  });

  it('PUT should return 404 if veterinary is not found', async () => {
    const { statusCode } = await request(app).put('/api/v1/vets/5').send({
      name: 'Clínica Veterinaria Animalia',
      address: 'Calle Larga 789, La Serena',
      phone: '+569123123123',
    });
    expect(statusCode).toBe(404);
  });

  it('PUT should return 400 if missing fields', async () => {
    const { statusCode } = await request(app).put('/api/v1/vets/1').send({});
    expect(statusCode).toBe(400);
  });
});
