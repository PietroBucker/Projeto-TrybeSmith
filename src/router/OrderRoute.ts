import express from 'express';
import OrderController from '../controller/Order.controller';
// import validateToken from '../middleware/validateToken';

const orderRoute = express.Router();

orderRoute.get('/', OrderController.findAll);
// orderRoute.post('/', OrderController.insert);
export default orderRoute;