import { User } from "@models/user";
import { InMemoryUsersRepository } from "@test/repositories/in-memory/in-memory-users";
import { createUser } from "@use-cases/createUser/createUser";
import { describe, expect, it } from "vitest";
import { getUser } from "./getUser";

describe("create and return users", async () => {
  const inMemoryUsersRepository = new InMemoryUsersRepository();
  const CreateUser = new createUser(inMemoryUsersRepository);
  const GetUser = new getUser(inMemoryUsersRepository);

  await CreateUser.execute({
    name: "Felipe Lima",
    email: "felipeexx48@gmail.com",
    photo: "null",
  });

  await CreateUser.execute({
    name: "Felipe Lima",
    email: "felipeexx49@gmail.com",
    photo: "null",
  });

  await CreateUser.execute({
    name: "Felipe Lima",
    email: "felipeexx50@gmail.com",
    photo: "null",
  });

  await CreateUser.execute({
    id: "3949374jiju8374387",
    name: "Felipe Lima",
    email: "felipeexx51@gmail.com",
    photo: "null",
  });

  it("should get user", async () => {
    const user = await GetUser.execute("3949374jiju8374387");
    expect(user).toBeInstanceOf(User);
  });

  it("should getAll users", async () => {
    const user = await GetUser.execute();
    expect(user).toBeInstanceOf(Array<User>);
  });

  it("should users not exist", async () => {
    const user = await GetUser.execute("noExist");
    expect(user).undefined;
  });
});
