import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ProductService from '../service/Product.service';

async function findAll(_req: Request, res: Response): Promise<Response> {
  const response = await ProductService.findAll();
  return res.status(mapStatusHTTP(response.status)).json(response.message);
}

async function insert(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  const response = await ProductService.insert(body);
  return res.status(mapStatusHTTP(response.status)).json(response.message);
}

export default {
  insert,
  findAll,
};
