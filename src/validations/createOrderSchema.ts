import Joi from 'joi';

const createOrderSchema = Joi.object({
  user: Joi.object({
    id: Joi.number(),
    username: Joi.string(),
    iat: Joi.number(),
  }),
  productsIds: Joi.array().min(1).items(Joi.number()).required()
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});

export default createOrderSchema;