import { FastifyRequest, FastifyReply, fastify } from "fastify";
import { UsersServices } from "../../services/Users/UsersServices";
import {
  CreateUserInput,
  GetUserByEmailInput,
  RemoveUserByIdInput,
} from "../routes/Schemas/UserRequestSchema";
import { UserRepository } from "../../Repository/Users/UserRepository";

export const handlerCreateUserController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const userData = request.body as CreateUserInput;

  const userService = await userServices.newUser(userData);
  reply.status(203).send(userService);
};

export const handlerGetUserByEmailController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { email } = request.body as GetUserByEmailInput;

  const user = await userServices.findUserByEmail(email);
  reply.status(203).send(user);
};

export const handlerRemoveUserController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as RemoveUserByIdInput;
  await userServices.removeUser(id);
  reply.status(204);
};

const userRepository = new UserRepository();
const userServices = new UsersServices(userRepository);
