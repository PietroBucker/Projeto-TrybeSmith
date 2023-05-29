import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import OrderService from '../service/Order.service';

async function findAll(_req: Request, res: Response): Promise<Response> {
  const response = await OrderService.findAll();

  return res.status(mapStatusHTTP(response.status)).json(response.message);
}

// async function insert(req: Request, res: Response): Promise<Response> {
//   const { body } = req;
//   const response: any = await OrderService.insert(body);
  
//   const order = await OrderService.findOne(response.message.id);
//   return res.status(mapStatusHTTP(response.status)).json(order.message);
// }
export default {
  findAll,
  // insert,
};
