import { UserProps } from "@models/user";
import { usersRepository } from "../userRepository";

export class PrismaUsersRepository implements usersRepository {
  public items: UserProps[] = [];

  async create(user: UserProps): Promise<void> {
    this.items.push(user);
  }

  async findByEmail(email: string): Promise<boolean> {
    const findEmail = this.items.find((item) => item.email === email);

    if (findEmail) {
      return true;
    }
    return false;
  }
}
