import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Veterinaries and Clinics API',
      version: '1.0.0',
      description: 'A simple API to manage veterinaries and its specialties',
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpecs = swaggerJSDoc(options);

export const swaggerDocs = (app, port) => {
  app.use('', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpecs);
  });
};
