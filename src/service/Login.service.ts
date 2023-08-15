import bcrypt from 'bcryptjs';
import { ServiceResponse } from '../types/reponse';
import UserModel from '../database/models/user.model';
import eschemas from './validate/schemas';
import createToken from './validate/createToken';

export type LoginType = {
  username: string,
  password: string,
};

async function login({ username, password }: LoginType): Promise<ServiceResponse<string>> {
  console.log('body service');
  console.log('username', username);
  
  const { error } = eschemas.validLogin.validate({ username, password });
  console.log(eschemas.validLogin.validate({ username, password }));
  
  if (error) {
    return { status: 'INVALID_DATA', message: error.message };
  }
  console.log('username2', username);
  const resolves: any = await UserModel.findOne({ where: { username } });
  console.log('resolves', resolves);
  
  if (!resolves || !bcrypt.compareSync(password, resolves.password)) {
    return { status: 'UNAUTHORIZED', message: 'Username or password invalid' };
  }

  const { dataValues } = resolves;
  const token = createToken.createToken(dataValues.username, dataValues.password);

  return { status: 'SUCCESS', message: token };
}

export default {
  login,
};
