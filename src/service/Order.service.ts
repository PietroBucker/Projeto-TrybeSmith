import { ServiceResponse } from '../types/reponse';
import OrderModel from '../database/models/order.model';
import { OrderOpt } from '../types/Order';
import ProductModel from '../database/models/product.model';
// import schemas from './validate/schemas';
// import UserModel from '../database/models/user.model';

async function findAll(): Promise<ServiceResponse<OrderOpt[]>> {
  const response = await OrderModel.findAll(
    { include: { model: ProductModel, as: 'productIds', attributes: ['id'] } },
  );
  const data = response.map(({ dataValues }) => ({
    ...dataValues,
    productIds: dataValues.productIds?.map((el) => el.id) || [],
  }));
 
  return { status: 'SUCCESS', message: data };
}

// async function findOne(id: number): Promise<ServiceResponse<OrderOpt>> {
//   const response = await OrderModel.findByPk(
//     id,
//     { include: { model: ProductModel, as: 'productIds', attributes: ['id'] } },
//   );
  
//   if (!response) {
//     return { status: 'NOT_FOUND', message: 'not found' };
//   }

//   return { status: 'SUCCESS', message: response.dataValues };
// }

// async function insert(body: Order): Promise<ServiceResponse<OrderOpt>> {
//   const { error } = schemas.vailidInsertOrder.validate(body);

//   if (error && error.message.includes('required')) { 
//     return { status: 'INVALID_DATA', message: error.message }; 
//   }
//   if (error) {
//     return { status: 'UNPROCESSABLE_CONTENT', message: error.message };
//   }

//   const user = await UserModel.findByPk(body.userId);

//   if (!user) {
//     return { status: 'NOT_FOUND', message: '"userId" not found' };
//   }

//   const createdOrder = await OrderModel.create(body);

//   return { status: 'SUCCESS', message: createdOrder.dataValues };
// }

export default {
  findAll,
  // insert,
  // findOne,
};
