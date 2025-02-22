import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// define the path to the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// define the route for the chat
router.get('/', (req, res) => {
  console.log('Chat route');
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

export default router;
