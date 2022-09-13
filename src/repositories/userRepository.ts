import { User } from "@models/user";

export interface usersRepository {
  create(user: User): Promise<User | void>;
  update(user: User): Promise<User | void>
  get(id?: string): Promise<User[] | void>;
  findByEmail(user: User): Promise<boolean | void>;
}
