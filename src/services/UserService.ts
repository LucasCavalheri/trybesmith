import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import { User } from '../interfaces';

export default class UserService {
  constructor(private userModel = new UserModel(connection)) {}

  public createUser = async (user: User): Promise<string> => {
    await this.userModel.createUser(user);

    const token = jwt.sign(user, 'secret');
    return token;
  };
}