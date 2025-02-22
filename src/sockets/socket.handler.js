// Socket handler for chat application

const users = {};

export default function (io) {
  io.on('connection', (socket) => {
    console.log('User connected', socket.id);

    // User login
    socket.on('login', (username) => {
      users[socket.id] = username;
      socket.emit('message', `Welcome, ${username}!`);
    });

    // Chat message
    socket.on('chatMessage', (msg) => {
      const username = users[socket.id] || 'Anonymous';
      io.emit('message', `${username}: ${msg}`);
    });

    // User disconnected
    socket.on('disconnect', () => {
      console.log('User disconnected', users[socket.id]);
      delete users[socket.id];
    });

    // Error handling
    socket.on('error', (err) => {
      console.error('Socket error:', err);
    });
  });
}
