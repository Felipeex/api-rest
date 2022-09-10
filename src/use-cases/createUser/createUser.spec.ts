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

test("validating existing email", async () => {
  const inMemoryUsersRepository = new InMemoryUsersRepository();
  const CreateUser = new createUser(inMemoryUsersRepository);

  await CreateUser.execute({
    id: uuid(),
    name: "Felipe Lima",
    email: "felipeexx48@gmail.com",
    photo: "null",
    createAt: new Date(),
    updatedAt: new Date(),
  });

  const email = await inMemoryUsersRepository.findByEmailInMemory(
    "felipeexx48@gmail.com"
  );

  expect(email).toEqual(true);
});

test("validating non-existing email", async () => {
  const inMemoryUsersRepository = new InMemoryUsersRepository();
  const CreateUser = new createUser(inMemoryUsersRepository);

  await CreateUser.execute({
    id: uuid(),
    name: "Felipe Lima",
    email: "felipeexx48@gmail.com",
    photo: "null",
    createAt: new Date(),
    updatedAt: new Date(),
  });

  const email = await inMemoryUsersRepository.findByEmailInMemory(
    "felipe@gmail.com"
  );

  expect(email).toEqual(false);
});
