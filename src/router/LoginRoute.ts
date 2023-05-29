import express from 'express';
import LoginController from '../controller/Login.controller';

const loginRoute = express.Router();

loginRoute.post('/', LoginController.login);

export default loginRoute;