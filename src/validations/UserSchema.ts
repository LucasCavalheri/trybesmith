import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.base': '"username" must be a string',
    'string.min': '"username" length must be at least 3 characters long',
    'string.required': '"username" is required',
  }),
  vocation: Joi.string().min(3).required().messages({
    'string.base': '"vocation" must be a string',
    'string.min': '"vocation" length must be at least 3 characters long',
    'string.required': '"vocation" is required',
  }),
  level: Joi.number().greater(0).required().messages({
    'number.base': '"level" must be a number',
    'number.greater': '"level" must be greater than or equal to 1',
    'number.required': '"level" is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.base': '"password" must be a string',
    'string.min': '"password" length must be at least 8 characters long',
    'string.required': '"password" is required',
  }),
});

export default userSchema;
