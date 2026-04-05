import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Initialize environment variables
dotenv.config();

// 2. Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// 3. Middleware
app.use(express.json());

/**
 * 4. Serve Static Files
 * After 'npm run build', index.js and index.html are both inside the '/dist' folder.
 * We serve from __dirname directly to ensure the path is always correct.
 */
app.use(express.static(__dirname));

// 5. Health Check Endpoint
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

// 7. Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
