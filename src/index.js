const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const app = express();

const vetsRoute = require('./routes/vets.route.js');

// Base de datos simulada de usuarios
const users = [];

// Middleware de autenticación
const SECRET_KEY = '123456';
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

app.use(express.json());

app.use('/api/v1/vets', vetsRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
