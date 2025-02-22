import vetsRoute from './routes/vets.routes.js';
import usersRoute from './routes/users.routes.js';
import chatRoute from './routes/chat.routes.js';
import { swaggerDocs } from '../docs/swagger.js';
import express from 'express';
import { sequelize } from './config/sequelize.js';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import http from 'http';
import { Server } from 'socket.io';
import socketHandler from './sockets/socket.handler.js';
import cookieParser from 'cookie-parser';
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // allow all origins
    methods: ['GET', 'POST'],
  },
});
app.use(cors());

app.use(cookieParser());

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => {
  console.log('Server running on port 3000');
  swaggerDocs(app, 3000);
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();

app.use('/api/v1/vets', vetsRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/chat', chatRoute);

// chatHandler(io);
socketHandler(io);

export default app;
