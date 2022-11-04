import express from 'express';

import { productsRouter, userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', userRouter);

export default app;
