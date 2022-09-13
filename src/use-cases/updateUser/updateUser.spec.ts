import { User } from "@models/user";
import { InMemoryUsersRepository } from "@test/repositories/in-memory/in-memory-users";
import { createUser } from "@use-cases/createUser/createUser";
import { describe, expect, it, test } from "vitest";
import { updateUser } from "./updateUser";

describe("create a user", () => {
  it("should update user", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const UpdateUser = new updateUser(inMemoryUsersRepository);
    const CreateUser = new createUser(inMemoryUsersRepository);

    const created = await CreateUser.execute({
      id: '3949374jiju8374387',
      name: "Felipe Lima",
      email: "felipeexx48@gmail.com",
      photo: "null",
    });

    const createdUserDates = {
        id: '3949374jiju8374387',
        name: "Felipe Lima Santos",
        email: "felipeexx49@gmail.com",
        photo: "https://avatars.githubusercontent.com/u/70120728?v=4",
    }

    const update = await UpdateUser.execute(
        createdUserDates
    )

    expect(update)
  });
});