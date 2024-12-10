const express = require('express');
const app = express();
const vetsRoute = require('./routes/vets.route.js');
const { swaggerDocs } = require('./docs/swagger.js');
app.use(express.json());

app.use('/api/v1/vets', vetsRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
  swaggerDocs(app, 3000);
});

module.exports = app;
