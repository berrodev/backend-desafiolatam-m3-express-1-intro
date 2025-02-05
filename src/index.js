import vetsRoute from './routes/vets.routes.js';
import usersRoute from './routes/users.routes.js';
import { swaggerDocs } from '../docs/swagger.js';
import express from 'express';
import { sequelize } from './config/sequelize.js';

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
  swaggerDocs(app, 3000);
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

app.use('/api/v1/vets', vetsRoute);
app.use('/api/v1/users', usersRoute);

export default app;
