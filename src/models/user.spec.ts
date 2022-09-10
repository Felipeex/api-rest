import { expect, test } from "vitest";
import { v4 as uuid } from "uuid";
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

test("say error name is empty", () => {
  expect(() => {
    new User({
      id: uuid(),
      name: "",
      email: "felipeexx48@gmail.com",
      photo: "null",
      createAt: new Date(),
      updatedAt: new Date(),
    });
  }).toThrow("name is empty");
});

test("say error email is empty", () => {
  expect(() => {
    new User({
      id: uuid(),
      name: "Felipe Lima",
      email: "",
      photo: "null",
      createAt: new Date(),
      updatedAt: new Date(),
    });
  }).toThrow("email is empty");
});

test("say error photo is empty", () => {
  expect(() => {
    new User({
      id: uuid(),
      name: "Felipe Lima",
      email: "felipeexx48@gmail.com",
      photo: "",
      createAt: new Date(),
      updatedAt: new Date(),
    });
  }).toThrow("photo is empty");
});
