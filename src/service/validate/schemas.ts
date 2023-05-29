import joi from 'joi';

const validLogin = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
}).messages({
  'any.required': '"username" and "password" are required',
});

const validInserProduct = joi.object({
  name: joi.string().min(3).required(),
  price: joi.string().min(3).required(),
  orderId: joi.number().required(),
});

const vailidInsertOrder = joi.object({
  productIds: joi.array().items(joi.number().min(1)).required(),
  userId: joi.number().required(),
});

export default {
  validLogin,
  validInserProduct,
  vailidInsertOrder,
};