import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public createUser = async (user: User) => {
    const { username, vocation, level, password } = user;

    const query = `
      INSERT INTO Trybesmith.users (username, vocation, level, password)
      VALUES (?, ?, ?, ?)
    `;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, vocation, level, password],
    );

    return insertId;
  };
}
