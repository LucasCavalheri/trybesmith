import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Login, User } from '../interfaces';

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

  public login = async ({ username, password }: Login) => {
    const [usernameExists] = await this.connection.execute<RowDataPacket[] & User[]>(
      `
        SELECT * FROM Trybesmith.users WHERE username = ?  
      `,
      [username],
    );

    const [passwordExists] = await this.connection.execute<RowDataPacket[] & User[]>(
      `
        SELECT * FROM Trybesmith.users WHERE password = ?
      `,
      [password],
    );

    return { usernameExists, passwordExists };
  };
}
