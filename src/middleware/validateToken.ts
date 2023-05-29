// import { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// // import UserModel from '../database/models/user.model';
// // import { UserDecoded } from '../types/User';

// const secret = process.env.JWT_SECRET || 'secret';

// async function validateToken(req: Request, res: Response, next: NextFunction): 
// Promise<Response | undefined> {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: 'Token not found' });
//   }
//   try {
//     jwt.verify(token, secret);
//     // const { username } = decoded as UserDecoded;

//     // const user = await UserModel.findOne({ where: { username } });
//     // req.body = { ...req.body, user };
//     next();
//   } catch (error: unknown | Error) {
//     return res.status(401).json(error);
//   }
// }

// export default validateToken;