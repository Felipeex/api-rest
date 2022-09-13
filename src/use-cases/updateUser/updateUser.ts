import { User, UserProps } from "@models/user";
import { usersRepository } from "@repositories/userRepository";

export class updateUser {
  constructor(private usersRepository: usersRepository) {}
  async execute(request: UserProps) {
    const user = new User(request);
    const updated = await this.usersRepository.update(user);
    return updated;
  }
}
