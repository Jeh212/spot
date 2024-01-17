import fastify, { FastifyInstance } from "fastify";
import { usersRoutes } from "./Users/Users.routes";
const RouterCaller = fastify();

export function Routes() {
  RouterCaller.register(usersRoutes, { prefix: "/users" });
}
