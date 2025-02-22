// Socket handler for chat application

const users = {};

export default function (io) {
  io.on('connection', (socket) => {
    // Leer la cookie de usuario si existe
    const cookies = socket.handshake.headers.cookie;
    let username = cookies
      ? cookies.split('; ').find((c) => c.startsWith('username='))
      : null;
    if (username) {
      username = username.split('=')[1];
      users[socket.id] = username;
      socket.emit('message', `Welcome back, ${username}!`);
    }

    console.log('User connected', socket.id);
    // Login handling
    socket.on('login', (username) => {
      users[socket.id] = username;
      socket.emit('message', `Welcome, ${username}!`);
      socket.handshake.headers.cookie = `username=${username}; Path=/; HttpOnly`; // Store cookie
    });
    // Logout handling
    socket.on('logout', () => {
      delete users[socket.id];
      socket.emit('message', 'disconnected.');
      socket.handshake.headers.cookie =
        'username=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'; // Delete cookie
    });

    // Message handling
    socket.on('chatMessage', (msg) => {
      const username = users[socket.id] || 'Anonymous';
      io.emit('message', `${username}: ${msg}`);
    });

    // Discconection handling
    socket.on('disconnect', () => {
      console.log('User disconnected', users[socket.id]);
      delete users[socket.id];
    });

    // Error handling
    socket.on('error', (err) => {
      console.error('Socket error: ', err);
    });
  });
}
