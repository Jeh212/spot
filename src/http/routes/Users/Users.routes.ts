import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  handlerCreateUserController,
  handlerGetUserByEmailController,
  handlerRemoveUserController,
} from "../../controllers/UsersController";
import {
  CreateUserInput,
  GetUserByEmailInput,
  RemoveUserByIdInput,
  createUserSchema,
} from "../Schemas/UserRequestSchema";

async function usersRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: CreateUserInput }>(
    "/newUser",
    {
      schema: {
        body: createUserSchema,
      },
    },
    handlerCreateUserController
  );
  fastify.post<{ Body: GetUserByEmailInput }>(
    "/findByEmail",
    handlerGetUserByEmailController
  );
  fastify.delete<{ Body: RemoveUserByIdInput }>(
    "/remove/:id",
    handlerRemoveUserController
  );
}

export { usersRoutes };
