import { PrismaUsersRepository } from "@repositories/prisma/PrismaUserRepository";
import { updateUser } from "./updateUser";
import { updateUserController } from "./updateUserController";

const PrismaUserRepository = new PrismaUsersRepository();
const UpdateUser = new updateUser(PrismaUserRepository);
export const updateUserControllerProvider = new updateUserController(UpdateUser);
