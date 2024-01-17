import { User } from "../Interfaces/IUserInterface";
import { IUserReposity } from "../Interfaces/IUserRepository";

export class UserRepositoryMock implements IUserReposity {
  private fake_db: Array<User> = [];

  constructor() {
    this.fake_db = [];
  }

  createUser(user: any): Promise<User> {
    this.fake_db.push(user);

    return this.fake_db[0];
  }
  getUserByEmail(email: string): Promise<Omit<User, "password">> {}
  listAllIUserReposity(): Promise<User[]> {}
}
