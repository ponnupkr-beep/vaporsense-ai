import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

/**
 * ARCHITECT'S FIX:
 * On Render, the folder structure changes after build. 
 * We serve from __dirname because index.html was copied into /dist.
 */
app.use(express.static(__dirname));

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'VaporSense AI is running! 🚀' });
});

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[SYSTEM] VaporSense AI Online on Port ${PORT}`);
});

export default app;
