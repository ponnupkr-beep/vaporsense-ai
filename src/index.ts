import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));  
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
# 1. Show your folder structure
ls -la src/
ls -la src/public/

# 2. Show your index.ts
cat src/index.ts
