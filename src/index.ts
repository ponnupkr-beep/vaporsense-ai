import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// In Node 20+, import.meta.dirname is natively available
// We use path.resolve to point to where the HTML file is copied
const publicPath = path.resolve(import.meta.dirname, 'public'); 

app.use(express.static(publicPath));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'VaporSense AI is running! 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
