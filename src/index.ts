import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Initialize environment variables
dotenv.config();

// 2. Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// 3. Middleware
app.use(express.json());

/**
 * 4. Serve Static Files
 * Our build command copies index.html into the /dist folder.
 * This script runs from /dist/index.js, so we serve from __dirname directly.
 */
app.use(express.static(__dirname));

// 5. Health Check API
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'VaporSense AI is running! 🚀' 
  });
});

// 6. SPA Root Route
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 7. Lifecycle
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
