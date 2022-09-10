import { v4 as uuid } from "uuid";
import { describe, expect, it, test } from "vitest";
import { createUser } from "./createUser";
import { User } from "../../models/user";
import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-users";

describe("create a user", () => {
  it("should create a user", () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const CreateUser = new createUser(inMemoryUsersRepository);

    expect(
      CreateUser.execute({
        id: uuid(),
        name: "Felipe Lima",
        email: "felipeexx48@gmail.com",
        photo: "null",
        createAt: new Date(),
        updatedAt: new Date(),
      })
    ).resolves.toBeInstanceOf(User);
  });
});

test("Validate exist email", () => {
  const inMemoryUsersRepository = new InMemoryUsersRepository();
  inMemoryUsersRepository.findByEmailInMemory("felipeexx48@gmail.com");
});
