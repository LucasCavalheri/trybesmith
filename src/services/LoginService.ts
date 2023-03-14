import connection from '../models/connection';
import UserModel from '../models/UserModel';
import HttpException from '../errors/HttpException';
import { Login } from '../interfaces';

export default class LoginService {
  constructor(private userModel = new UserModel(connection)) {}

  public login = async ({ username, password }: Login) => {
    const user = await this.userModel.login({ username, password });

    if (user.usernameExists.length === 0 || user.passwordExists.length === 0) {
      throw new HttpException(401, 'Username or password invalid');
    }

    return user;
  };
}
