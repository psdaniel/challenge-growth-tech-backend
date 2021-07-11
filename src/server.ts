import express from "express";
import { postsRoutes } from './routes/posts';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors())

app.use(postsRoutes);

app.listen(3333);