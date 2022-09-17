import { User } from "@models/user";
import { usersRepository } from "@repositories/userRepository";

export class deleteUser {
  constructor(private usersRepository: usersRepository) {}

  async execute(id?: string): Promise<User | void> {
    return this.usersRepository.delete(id)
  }
}
