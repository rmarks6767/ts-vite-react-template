import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api/health', (_req, res) => {
  res.status(200).send({ status: 'ok' });
});

app.use(express.static(path.join(__dirname, '../../dist/client')));

app.get('{*path}', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
