import { User } from "@models/user";
import { InMemoryUsersRepository } from "@test/repositories/in-memory/in-memory-users";
import { createUser } from "@use-cases/createUser/createUser";
import { describe, expect, it } from "vitest";
import { getUser } from "./getUser";

describe("create and return users", async () => {
  const inMemoryUsersRepository = new InMemoryUsersRepository();
  const GetUser = new getUser(inMemoryUsersRepository);

  const user = new User({
    id: "3949374jiju8374387",
    name: "Felipe Lima",
    email: "felipeexx51@gmail.com",
    photo: "null",
  });

  inMemoryUsersRepository.items.push(user)

  it("should get user", async () => {
    const user = await GetUser.execute("3949374jiju8374387");
    expect(user).toBeInstanceOf(User);
  });

  it("should getAll users", async () => {
    const user = await GetUser.execute();
    expect(user).toBeInstanceOf(Array<User>);
  });

  it("should users not exist", async () => {
    const user = await GetUser.execute("w94wuy7hugjvndfjv");
    expect(user).undefined;
  });
});
