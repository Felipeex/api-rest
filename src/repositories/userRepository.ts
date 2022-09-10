import { User } from "@models/user";

export interface usersRepository {
  create(user: User): Promise<void>;
  findByEmail(user: User): Promise<boolean>;
}
