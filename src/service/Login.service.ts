import bcrypt from 'bcryptjs';
import { ServiceResponse } from '../types/reponse';
import UserModel from '../database/models/user.model';
import eschemas from './validate/schemas';
import createToken from './validate/createToken';

type LoginType = {
  username: string,
  password: string,
};

async function login(body: LoginType): Promise<ServiceResponse<string>> {
  const { username, password } = body;
  const { error } = eschemas.validLogin.validate({ username, password });
  
  if (error) {
    return { status: 'INVALID_DATA', message: error.message };
  }

  const resolves: any = await UserModel.findOne({ where: { username } });
  
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
