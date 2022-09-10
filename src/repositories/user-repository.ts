import { User } from "../models/user";

export interface usersRepositoryInMemory {
  createInMemory(user: User): Promise<void>;
  findByEmailInMemory(user: User): Promise<boolean>;
}
