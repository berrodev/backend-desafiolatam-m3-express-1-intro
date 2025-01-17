// const express = require('express');
// const app = express();
// const vetsRoute = require('./routes/vets.route.js');
// const { swaggerDocs } = require('./docs/swagger.js');
// app.use(express.json());

// app.use('/api/v1/vets', vetsRoute);

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
//   swaggerDocs(app, 3000);
// });

// module.exports = app;

import express from 'express';
import {
  getVets,
  addVet,
  deleteVet,
  updateVet,
  getVetById,
} from './database/sequelize/controller/vetsController.js';
import { sequelize } from './database/sequelize/sequelize.js';

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();

app.get('/api/v1/vets', getVets);
app.get('/api/v1/vets/:id', getVetById);
app.post('/api/v1/vets', addVet);
app.delete('/api/v1/vets/:id', deleteVet);
app.put('/api/v1/vets/:id', updateVet);

export default app;
