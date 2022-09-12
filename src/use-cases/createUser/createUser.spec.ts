import { InMemoryUsersRepository } from "@test/repositories/in-memory/in-memory-users";
import { User } from "@models/user";
import { describe, expect, it, test } from "vitest";
import { createUser } from "./createUser";

describe("create a user", () => {
  it("should create a user", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const CreateUser = new createUser(inMemoryUsersRepository);

    const user = await CreateUser.execute({
      name: "Felipe Lima",
      email: "felipeexx48@gmail.com",
      photo: "null",
    });

    expect(user).toBeInstanceOf(User);
  });
});

test("validating existing email", async () => {
  const inMemoryUsersRepository = new InMemoryUsersRepository();
  const CreateUser = new createUser(inMemoryUsersRepository);

  await CreateUser.execute({
    name: "Felipe Lima",
    email: "felipeexx48@gmail.com",
    photo: "null",
  });

  const email = await inMemoryUsersRepository.findByEmail(
    "felipeexx48@gmail.com"
  );

  expect(email).toEqual(true);
});

test("validating non-existing email", async () => {
  const inMemoryUsersRepository = new InMemoryUsersRepository();
  const CreateUser = new createUser(inMemoryUsersRepository);

  await CreateUser.execute({
    name: "Felipe Lima",
    email: "felipeexx48@gmail.com",
    photo: "null",
  });

  const email = await inMemoryUsersRepository.findByEmail("felipe@gmail.com");

  expect(email).toEqual(false);
});
