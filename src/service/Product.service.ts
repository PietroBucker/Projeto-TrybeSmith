import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/reponse';
import schemas from './validate/schemas';

async function findAll(): Promise<ServiceResponse<Product[]>> {
  const response = await ProductModel.findAll();
  const data = response.map((ele) => ele.dataValues);
  
  return { status: 'SUCCESS', message: data };
}

async function insert(body: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const { error } = schemas.validInserProduct.validate(body);
  
  if (error && error.message.includes('required')) {    
    return { status: 'INVALID_DATA', message: error.message };  
  }
  
  if (error) {
    return { status: 'UNPROCESSABLE_CONTENT', message: error.message };  
  }
  const response = await ProductModel.create(body);

  return { status: 'CREATED', message: response.dataValues };  
}

export default {
  insert,
  findAll,
};
