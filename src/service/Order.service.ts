import { ServiceResponse } from '../types/reponse';
import OrderModel from '../database/models/order.model';
import { OrderOpt } from '../types/Order';
import ProductModel from '../database/models/product.model';

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

export default {
  findAll,
};
