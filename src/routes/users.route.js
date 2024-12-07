const { Router } = require('express');

const router = Router();

// Ruta para registrarse
router.post('/register', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Usuario y contraseña requeridos');
  }
  users.push({ username, password });
  res.status(201).send('Usuario registrado');
});

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
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

module.exports = router;
