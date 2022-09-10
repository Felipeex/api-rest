import { PrismaUsersRepository } from "@repositories/prisma/PrismaUserRepository";
import { createUser } from "./createUser";
import { createUserController } from "./createUserController";

const PrismaUserRepository = new PrismaUsersRepository();
const CreateUser = new createUser(PrismaUserRepository);
export const CreateUserControllerProvider = new createUserController(
  CreateUser
);
