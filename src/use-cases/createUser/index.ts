import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-users";
import { createUser } from "./createUser";
import { createUserController } from "./createUserController";

const inMemoryUsersRepository = new InMemoryUsersRepository();
const CreateUser = new createUser(inMemoryUsersRepository);
export const userControllerProvider = new createUserController(CreateUser);
