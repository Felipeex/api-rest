import { UserProps, User } from "@models/user";
import { usersRepository } from "@repositories/userRepository";

type createUserRequest = UserProps;

export class createUser {
  constructor(private usersRepository: usersRepository) {}

  async execute(request: createUserRequest): Promise<User | void> {
    const EmailAlreadyExists = await this.usersRepository.findByEmail(
      request.email
    );

    if (EmailAlreadyExists) {
      throw new Error("Email already exists.");
    }

    const user = new User(request);
    const created = await this.usersRepository.create(user);
    return created;
  }
}
