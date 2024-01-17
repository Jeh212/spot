import { Static, Type } from "@sinclair/typebox";

export const createUserSchema = Type.Object({
  name: Type.String(),
  email: Type.String(),
  age: Type.Number(),
  password: Type.String(),
  nickname: Type.String(),
  lastLocation: Type.Object({
    lat: Type.String(),
    long: Type.String(),
  }),
});

export const getUserByEmailSchema = Type.Object({
  email: Type.String(),
});

export const removeUserByIdSchema = Type.Object({
  id: Type.String(),
});

export type CreateUserInput = Static<typeof createUserSchema>;
export type GetUserByEmailInput = Static<typeof getUserByEmailSchema>;
export type RemoveUserByIdInput = Static<typeof removeUserByIdSchema>;
