import { User, UserProps } from "@models/user";
import { usersRepository } from "../../../src/repositories/userRepository";

export class InMemoryUsersRepository implements usersRepository {
  public items: UserProps[] = [];

  async create(user: UserProps): Promise<User> {
    this.items.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<boolean> {
    const findEmail = this.items.find((item) => item.email === email);

    if (findEmail) {
      return true;
    }
    return false;
  }

  async getUser(id: string): Promise<UserProps[] | any> {
    try {
      if (id) return this.items.find((item) => item.id === id);
    } catch (err) {
      throw new Error("User not found");
    }
    return this.items;
  }
}
