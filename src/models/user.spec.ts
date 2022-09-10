import { v4 as uuid } from "uuid";
import { expect, test } from "vitest";
import { User } from "./user";

test("create a user", () => {
  const user = new User({
    id: uuid(),
    name: "Felipe Lima",
    email: "felipeexx48@gmail.com",
    photo: "null",
    createAt: new Date(),
    updatedAt: new Date(),
  });

  expect(user).toBeInstanceOf(User);
});
