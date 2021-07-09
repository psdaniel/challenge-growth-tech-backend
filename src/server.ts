import express from "express";
import { postsRoutes } from './routes/posts';

const app = express();
app.use(express.json())

app.use(postsRoutes);

app.listen(3333);