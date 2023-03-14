import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.userService.createUser(user);
    return res.status(201).json({ token });
  };
}