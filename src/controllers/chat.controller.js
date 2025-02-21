const sendMessage = (io, message) => {
  io.emit('chat', message);
};

export const ChatController = {
  sendMessage,
};
