import { User, UserProps } from "@models/user";
import { AppError } from "@errors/appError";
import { usersRepository } from "@repositories/userRepository";

export class InMemoryUsersRepository implements usersRepository {
  public items: UserProps[] & User[]  = [];

  async create(user: UserProps): Promise<User> {
    this.items.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<boolean> {
    const findEmail = this.items.find((item) => item.email === email);
    return !!findEmail
  }

  async get(id: string): Promise<UserProps[] | any> {
    try {
      if (id) return this.items.find((item) => item.id === id);
    } catch (err) {
      throw new AppError("User not found");
    }
    return this.items;
  }

  async update(user: UserProps): Promise<User> {
    this.items.push(user);
    return user;
  }
}
