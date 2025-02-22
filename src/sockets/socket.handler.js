// Socket handler for chat application

export default (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat', (msg) => {
      console.log(`${socket.id}: ${msg}`);
      io.emit('chat', `${socket.id}: ${msg}`);
    });
  });
};
