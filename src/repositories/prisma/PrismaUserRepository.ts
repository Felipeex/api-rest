import { User, UserProps } from "@models/user";
import { prisma } from "src/database/client";
import { usersRepository } from "../userRepository";

export class PrismaUsersRepository implements usersRepository {
  async create(user: UserProps): Promise<User> {
    const { email, name, photo } = user;
    const created = await prisma.user.create({
      data: {
        email,
        name,
        photo,
      },
    });
    return created;
  }

  async findByEmail(email: string): Promise<boolean> {
    const findEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return !!findEmail;
  }

  async getUser(id: string): Promise<User[] | any> {
    try {
      if (id) return await prisma.user.findFirst({ where: { id } });
    } catch (err) {
      throw new Error("User not found");
    }
    return await prisma.user.findMany({ where: {} });
  }
}
