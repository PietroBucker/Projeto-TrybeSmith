import express from 'express';
import OrderController from '../controller/Order.controller';

const orderRoute = express.Router();

orderRoute.get('/', OrderController.findAll);

export default orderRoute;