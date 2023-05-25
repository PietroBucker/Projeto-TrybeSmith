import expres from 'express';
import ProductController from '../controller/Product.controller';

const productRoute = expres.Router();

productRoute.post('/', ProductController.insert);

export default productRoute;