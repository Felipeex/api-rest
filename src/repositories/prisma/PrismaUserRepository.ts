import { User, UserProps } from "@models/user";
import { prisma } from "@database/client";
import { usersRepository } from "@repositories/userRepository";
import { AppError } from "@errors/appError";

export class PrismaUsersRepository implements usersRepository {
  async create(user: UserProps): Promise<User | void> {
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

  async get(id: string): Promise<User[] | any> {
    if (!id) return prisma.user.findMany({});

    if (!id.match("^[0-9a-fA-F]{24}$"))
    throw new AppError("User format is invalid");

    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user)
    throw new AppError("User does not exist");
    
    return user;
  }

  async update(user: UserProps): Promise<void | User> {
    const { id, email, name, photo } = user;

    if (!id)
    throw new AppError("User id is empty");

    const findById = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!findById)
    throw new AppError("User id is invalid");
    const update = await prisma.user.update({
      where: { id },
      data: {
        email,
        name,
        photo
      }
    })

    return update
  }

  async delete(id: string): Promise<User[] | any> {
    if (!id)
    throw new AppError("User id is empty");

    if (!id.match("^[0-9a-fA-F]{24}$"))
    throw new AppError("User format is invalid");

    const findById = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!findById)
    throw new AppError("User id is invalid");

    const Delete = await prisma.user.delete({
      where: { id },
    })

    return Delete
  }
}
