import { UserProps, User } from "../../models/user";
import { usersRepositoryInMemory } from "../../repositories/user-repository";

type createUserRequest = UserProps;

export class createUser {
  constructor(private usersRepository: usersRepositoryInMemory) {}

  async execute(request: createUserRequest): Promise<User> {
    const EmailAlreadyExists = await this.usersRepository.findByEmailInMemory(
      request.email
    );

    if (EmailAlreadyExists) {
      throw new Error("Email already exists.");
    }

    const user = new User(request);

    await this.usersRepository.createInMemory(user);

    return user;
  }
}
