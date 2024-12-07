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
