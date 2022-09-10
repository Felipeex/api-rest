import { UserProps } from "../../models/user";
import { usersRepositoryInMemory } from "../user-repository";

export class InMemoryUsersRepository implements usersRepositoryInMemory {
  public items: UserProps[] = [];

  async createInMemory(user: UserProps): Promise<void> {
    this.items.push(user);
  }

  async findByEmailInMemory(email: string): Promise<boolean> {
    const findEmail = this.items.find((item) => item.email === email);

    if (findEmail) {
      return true;
    }
    return false;
  }
}
