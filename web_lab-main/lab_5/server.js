import express, { json } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import cors from 'cors';

const app = express();
const DATA_FILE = './planes.json';

app.use(cors());
app.use(json());

app.get('/api/planes', (req, res) => {
  const planes = JSON.parse(readFileSync(DATA_FILE));
  res.json(planes);
});

app.post('/api/planes', (req, res) => {
  const planes = JSON.parse(readFileSync(DATA_FILE));
  const newPlane = req.body;
  planes.push(newPlane);
  writeFileSync(DATA_FILE, JSON.stringify(planes));
  res.json(newPlane);
});

app.put('/api/planes/:index', (req, res) => {
  const planes = JSON.parse(readFileSync(DATA_FILE));
  const index = req.params.index;
  planes[index] = req.body;
  writeFileSync(DATA_FILE, JSON.stringify(planes));
  res.json(planes[index]);
});

app.delete('/api/planes/:index', (req, res) => {
  const planes = JSON.parse(readFileSync(DATA_FILE));
  const index = req.params.index;
  const deletedPlane = planes.splice(index, 1);
  writeFileSync(DATA_FILE, JSON.stringify(planes));
  res.json(deletedPlane);
});

app.listen(3001, () => console.log(`Server running`));
