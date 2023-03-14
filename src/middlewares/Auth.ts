import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../errors/HttpException';

export default function AuthMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  try {
    const { authorization: token } = req.headers;

    if (!token) throw new HttpException(400, 'Token not found');

    const payload = jwt.verify(token, 'secret');
    req.body.user = payload;
    next();
  } catch (_err) {
    throw new HttpException(401, 'Invalid token');
  }
}
