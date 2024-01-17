import { FastifyRequest, FastifyReply } from "fastify";
import { UserRepository } from "../../Repository/Users/UserRepository";
import { IUserReposity } from "../../Repository/Users/Interfaces/IUserRepository";

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

export class UsersServices {
  constructor(private userRepository: IUserReposity) {}

  async newUser(user: CreateUserData) {
    const isThisUserAlreadyExists = await this.userRepository.getUserByEmail(
      user.email
    );

    if (isThisUserAlreadyExists)
      throw new Error(`User ${user.name} already exists`);

    const newUser = await this.userRepository.createUser(user);

    return newUser;
  }

  async findUserByEmail(email: string) {
    const findUser = await this.userRepository.getUserByEmail(email);

    if (!findUser) throw new Error(`User not found!`);

    return findUser;
  }

  async listAllUsers() {
    const findAll = await this.userRepository.listAllUsers();

    return findAll;
  }

  async removeUser(id: string) {
    const findUser = await this.userRepository.getUserById(id);

    if (!findUser) throw new Error(`User already deleted!`);

    await this.userRepository.hardDelete(id);
    return;
  }
}
