import { Users } from "@prisma/client";

interface IUserReposity {
  createUser(user: any): Promise<Users>;
  getUserByEmail(email: string): Promise<Omit<Users, "password"> | null>;
  getUserById(id: string): Promise<Omit<Users, "password"> | null>;
  listAllUsers(): Promise<Users[]>;
  hardDelete(id: string): Promise<void>;
}

export { IUserReposity };
