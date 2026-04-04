import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
// Welcome page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// API health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'VaporSense AI is running! 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;



# 1. Show your folder structure
ls -la src/
ls -la src/public/

# 2. Show your index.ts
cat src/index.ts
