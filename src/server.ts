import express from "express";
import { postsRoutes } from './routes/posts';

const app = express();
app.use(express.json())

app.get('/', async (req, res) => {
  return res.json({ message: 'Hello world' });
});

app.use(postsRoutes);

app.listen(3333);