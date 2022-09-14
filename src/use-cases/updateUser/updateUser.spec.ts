import { User } from "@models/user";
import { InMemoryUsersRepository } from "@test/repositories/in-memory/in-memory-users";
import { describe, expect, it } from "vitest";
import { updateUser } from "./updateUser";

const inMemoryUsersRepository = new InMemoryUsersRepository();
const UpdateUser = new updateUser(inMemoryUsersRepository);

describe("create a user", () => {
  it("should update user", async () => {
    const user = new User({
      id: "3949374jiju8374387",
      name: "Felipe Lima",
      email: "felipeexx51@gmail.com",
      photo: "null",
    });

    inMemoryUsersRepository.items.push(user);

    const createdUserDates = {
      id: "3949374jiju8374387",
      name: "Felipe Lima Santos",
      email: "felipeexx49@gmail.com",
      photo: "https://avatars.githubusercontent.com/u/70120728?v=4",
    };

    const update = await UpdateUser.execute(createdUserDates);

    expect(update).toEqual(createdUserDates);
  });

  it("should id is empty", async () => {
    const user = new User({
      id: "3949374jiju8374387",
      name: "Felipe Lima",
      email: "felipeexx51@gmail.com",
      photo: "null",
    });

    inMemoryUsersRepository.items.push(user);

    const createdUserDates = {
      id: "",
      name: "Felipe Lima Santos",
      email: "felipeexx49@gmail.com",
      photo: "https://avatars.githubusercontent.com/u/70120728?v=4",
    };

    expect(async () => {
      await UpdateUser.execute(createdUserDates);
    }).rejects.toThrow('User id is empty')
  })

  it("should id is invalid", async () => {
    const user = new User({
      id: "3949374jiju8374387",
      name: "Felipe Lima",
      email: "felipeexx51@gmail.com",
      photo: "null",
    });

    inMemoryUsersRepository.items.push(user);

    const createdUserDates = {
      id: "dfsdfsdfsdfsdfsdf",
      name: "Felipe Lima Santos",
      email: "felipeexx49@gmail.com",
      photo: "https://avatars.githubusercontent.com/u/70120728?v=4",
    };

    expect(async () => {
      await UpdateUser.execute(createdUserDates);
    }).rejects.toThrow('User id is invalid')
  })
});
