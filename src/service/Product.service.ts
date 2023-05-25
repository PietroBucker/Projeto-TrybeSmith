import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/reponse';

async function insert(body: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const response = await ProductModel.create(body);
  
  return { status: 'CREATED', message: response.dataValues };  
}

export default {
  insert,
};