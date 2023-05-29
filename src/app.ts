import express from 'express';
import productRoute from './router/ProductRoute';
import orderRoute from './router/OrderRoute';
import loginRoute from './router/LoginRoute';

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/products', productRoute);
app.use('/orders', orderRoute);

export default app;
