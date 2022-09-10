import { User } from "../../models/user";
import { usersRepositoryInMemory } from "../user-repository";

export class InMemoryUsersRepository implements usersRepositoryInMemory {
  public items: User[] = [];

  async createInMemory(user: User): Promise<void> {
    this.items.push(user);
  }

  async findByEmailInMemory(email: string): Promise<void> {
    console.log(email);
  }
}
