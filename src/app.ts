import express from 'express';

import { productsRouter, userRouter, orderRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/', userRouter);

app.use('/orders', orderRouter);

export default app;
