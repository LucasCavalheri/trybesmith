import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/HttpException';
import ZodException from '../errors/ZodException';

function HttpErrorMiddleware(
  err: HttpException | ZodException,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof HttpException) {
    return res.status(err.status).json({ message: err.message });
  }

  if (err instanceof ZodException) {
    return res.status(err.status).json({ message: err.flatten().fieldErrors });
  }
  const { status, message } = err;
  res.status(status || 500).json({ message });
}

export default HttpErrorMiddleware;
