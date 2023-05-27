import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import OrderService from '../service/Order.service';

async function findAll(_req: Request, res: Response): Promise<Response> {
  const response = await OrderService.findAll();

  return res.status(mapStatusHTTP(response.status)).json(response.message);
}
export default {
  findAll,
};
