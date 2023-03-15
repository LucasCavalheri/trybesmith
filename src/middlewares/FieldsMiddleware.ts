import { Request, Response, NextFunction } from 'express';
import HttpException from '../errors/HttpException';
import { Product } from '../interfaces';
import productSchema from '../validations/ProductSchema';

export const validateProduct = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const product = req.body as Product;

  const { error } = productSchema.validate(product);

  if (error?.details[0].type.includes('required')) {
    throw new HttpException(400, error.message);
  }

  if (error) throw new HttpException(422, error.message);

  next();
};

export const fn = () => {};
