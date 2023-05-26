import expres from 'express';
import ProductController from '../controller/Product.controller';

const productRoute = expres.Router();

productRoute.get('/', ProductController.findAll);
productRoute.post('/', ProductController.insert);

export default productRoute;