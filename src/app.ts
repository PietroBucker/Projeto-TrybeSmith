import express from 'express';
import productRoute from './router/ProductRoute';
import orderRoute from './router/OrderRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/orders', orderRoute);

export default app;
