import { Request, Response } from 'express';
import HttpException from '../errors/HttpException';
import { Login } from '../interfaces';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body as Login;

    if (!username) throw new HttpException(400, '"username" is required');
    if (!password) throw new HttpException(400, '"password" is required');

    const token = await this.loginService.login({ username, password });
    return res.status(200).json({ token });
  };
}