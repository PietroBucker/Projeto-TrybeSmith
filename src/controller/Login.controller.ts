import { Request, Response } from 'express';
import LoginService from '../service/Login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  const response = await LoginService.login(body);
  if (response.status === 'SUCCESS') {
    return res.status(mapStatusHTTP(response.status)).json({ token: response.message });
  }
  return res.status(mapStatusHTTP(response.status)).json(response);
}

export default {
  login,
};