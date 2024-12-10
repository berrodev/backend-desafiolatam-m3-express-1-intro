const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpecs);
  });
};

module.exports = { swaggerDocs };
