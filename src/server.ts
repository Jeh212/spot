import fastify, { FastifyInstance } from "fastify";
import { InitiateDatabase } from "./db";
import { Routes } from "./http/routes/index.routes";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { usersRoutes } from "./http/routes/Users/Users.routes";

const app: FastifyInstance = fastify().withTypeProvider<TypeBoxTypeProvider>();

InitiateDatabase();

app.register(usersRoutes, { prefix: "/users" });

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server Ok!");
});
