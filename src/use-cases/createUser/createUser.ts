import { UserProps, User } from "../../models/user";
import { usersRepositoryInMemory } from "../../repositories/user-repository";

type createUserRequest = UserProps;

export class createUser {
  constructor(private usersRepository: usersRepositoryInMemory) {}

  async execute(request: createUserRequest): Promise<User> {
    const user = new User(request);

    await this.usersRepository.createInMemory(request);

    return user;
  }
}
