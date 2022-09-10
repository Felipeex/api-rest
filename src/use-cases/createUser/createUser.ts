import { UserProps, User } from "@models/user";
import { usersRepository } from "@repositories/userRepository";

type createUserRequest = UserProps;

export class createUser {
  constructor(private usersRepository: usersRepository) {}

  async execute(request: createUserRequest): Promise<User> {
    const EmailAlreadyExists = await this.usersRepository.findByEmail(
      request.email
    );

    if (EmailAlreadyExists) {
      throw new Error("Email already exists.");
    }

    const user = new User(request);

    await this.usersRepository.create(user);

    return user;
  }
}
