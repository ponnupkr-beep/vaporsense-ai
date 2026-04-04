import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// --- THE FIX IS HERE ---
// This attempts to find the public folder relative to the script
// If your script is in 'server/index.js', it looks for 'src/public'
const publicPath = path.resolve(__dirname, '../src/public');
app.use(express.static(publicPath));

// OPTIONAL: Log the path to your terminal to see where Express is looking
console.log(`Serving static files from: ${publicPath}`);
// -----------------------

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'VaporSense AI is running! 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
