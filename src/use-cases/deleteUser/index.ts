import { PrismaUsersRepository } from "@repositories/prisma/PrismaUserRepository";
import { deleteUser } from "./deleteUser";
import { deleteUserController } from "./deleteUserController";

const PrismaUserRepository = new PrismaUsersRepository();
const DeleteUser = new deleteUser(PrismaUserRepository);
export const deleteUserControllerProvider = new deleteUserController(DeleteUser);
