import jwt, { SignOptions, Secret, JwtPayload } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = {
  expiresIn: '1y',
  algorithm: 'HS256',
};

const createToken = (username: string, password: string): string => {
  const payload: JwtPayload = {
    username,
    password,
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

export default {
  createToken,
};
