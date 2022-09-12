import { expect, test } from "vitest";
import { User } from "@models/user";

test("create a user", () => {
  const user = new User({
    name: "Felipe Lima",
    email: "felipeexx48@gmail.com",
    photo: "null",
  });

  expect(user).toBeInstanceOf(User);
});

test("say error name is empty", () => {
  expect(() => {
    new User({
      name: "",
      email: "felipeexx48@gmail.com",
      photo: "null",
    });
  }).toThrow("name is empty");
});

test("say error email is empty", () => {
  expect(() => {
    new User({
      name: "Felipe Lima",
      email: "",
      photo: "null",
    });
  }).toThrow("email is empty");
});
