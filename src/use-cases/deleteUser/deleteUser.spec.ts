import { User } from "@models/user";
import { InMemoryUsersRepository } from "@test/repositories/in-memory/in-memory-users";
import { describe, expect, it } from "vitest";
import { deleteUser } from "./deleteUser";

const inMemoryUsersRepository = new InMemoryUsersRepository();
const DeleteUser = new deleteUser(inMemoryUsersRepository);

describe("delete a user", () => {
  it("should delete user", async () => {
    const user = new User({
      id: "3949374jiju8374387",
      name: "Felipe Lima",
      email: "felipeexx51@gmail.com",
      photo: "null",
    });

    inMemoryUsersRepository.items.push(user);

    const update = await DeleteUser.execute('3949374jiju8374387');
    expect(update).toEqual(true)
  });

  it("should user id is empty", async () => {
    const user = new User({
      id: "3949374jiju8374387",
      name: "Felipe Lima",
      email: "felipeexx51@gmail.com",
      photo: "null",
    });

    inMemoryUsersRepository.items.push(user);

    expect(async () => {
        await DeleteUser.execute('');
      }).rejects.toThrow('User id is empty')
  });

  it("should user id is invalid", async () => {
    const user = new User({
      id: "3949374jiju8374387",
      name: "Felipe Lima",
      email: "felipeexx51@gmail.com",
      photo: "null",
    });

    inMemoryUsersRepository.items.push(user);

    expect(async () => {
        await DeleteUser.execute('saasasasasas');
      }).rejects.toThrow()
  });
});
