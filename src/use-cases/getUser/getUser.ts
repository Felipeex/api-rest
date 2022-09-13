import { User } from "@models/user";
import { usersRepository } from "@repositories/userRepository";

export class getUser {
  constructor(private usersRepository: usersRepository) {}

  async execute(id?: string): Promise<User | void> {
    const getUser = await this.usersRepository.get(id);
    return getUser;
  }
}
