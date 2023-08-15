import { Request, Response } from 'express';
import LoginService from '../service/Login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  // console.log('controler body', body);
  console.log('controler username', username);
  
  const response = await LoginService.login({ username, password });
  if (response.status === 'SUCCESS') {
    return res.status(mapStatusHTTP(response.status)).json({ token: response.message });
  }
  return res.status(mapStatusHTTP(response.status)).json(response);
}

export default {
  login,
};