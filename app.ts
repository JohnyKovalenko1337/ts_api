import express = require('express');
import bodyParser from 'body-parser';
import todousRouter from './routes/todous';

const app = express();

app.use(bodyParser.json());

app.use(todousRouter);

app.listen({ port: 3000 });