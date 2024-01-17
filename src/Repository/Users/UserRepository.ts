import { Prisma, Users } from "@prisma/client";
import { prisma } from "../../db";

import { IUserReposity } from "./Interfaces/IUserRepository";

interface CreateUserData {
  name: string;
  age: number;
  email: string;
  nickname: string;
  password: string;
  lastLocation: {
    lat: string;
    long: string;
  };
}

export class UserRepository implements IUserReposity {
  private database = prisma;

  async createUser(user: CreateUserData): Promise<Users> {
    const createUser = await this.database.users.create({
      data: {
        ...user,
        created_at: new Date(),
      },
    });

    return createUser;
  }

  async getUserByEmail(email: string): Promise<Omit<Users, "password"> | null> {
    const user = await this.database.users.findFirst({
      where: {
        email,
      },
    });
    return user;
  }

  async listAllUsers(): Promise<Users[]> {
    const users = await this.database.users.findMany();

    return users;
  }

  async hardDelete(id: string): Promise<void> {
    await this.database.users.delete({
      where: {
        id,
      },
    });
    return;
  }

  async getUserById(id: string): Promise<Omit<Users, "password"> | null> {
    const user = await this.database.users.findFirst({
      where: {
        id,
      },
    });
    return user;
  }
}
