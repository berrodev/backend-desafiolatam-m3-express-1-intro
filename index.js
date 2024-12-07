const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor iniciado');
});

// Base de datos simulada de usuarios
const users = [];

// Middleware de autenticación
const SECRET_KEY = '123456';
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    console.log('Token no proporcionado');
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.log('Error de verificación de token:', err.message);
      return res.sendStatus(403);
    }
    req.user = user;
    console.log('Token verificado para el usuario:', user.username);
    next();
  });
}

// Ruta para registrarse
app.post('/register', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Usuario y contraseña requeridos');
  }
  users.push({ username, password });
  res.status(201).send('Usuario registrado');
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciales inválidas');
  }
});

// Ruta de bienvenida (no protegida)
app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

// Ruta protegida
app.get('/veterinaries', authenticateToken, (req, res) => {
  const vets = JSON.parse(fs.readFileSync('veterinaries.json'));
  res.json(vets);
});
