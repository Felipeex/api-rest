import { PrismaUsersRepository } from "@repositories/prisma/PrismaUserRepository";
import { getUser } from "./getUser";
import { getUserController } from "./getUserController";

const PrismaUserRepository = new PrismaUsersRepository();
const GetUser = new getUser(PrismaUserRepository);
export const getUserControllerProvider = new getUserController(GetUser);
