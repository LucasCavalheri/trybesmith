import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import { User } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export default class UserService {
  constructor(private userModel = new UserModel(connection)) {}

  public createUser = async (user: User): Promise<string> => {
    await this.userModel.createUser(user);

    const token = jwt.sign(user, JWT_SECRET);
    return token;
  };
}