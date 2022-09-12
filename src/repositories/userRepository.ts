import { User } from "@models/user";

export interface usersRepository {
  create(user: User): Promise<User>;
  findByEmail(user: User): Promise<boolean | void>;
  getUser(id?: string): Promise<User[] | void>;
}
