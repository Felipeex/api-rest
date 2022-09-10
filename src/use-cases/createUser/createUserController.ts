import { Request, Response } from "express";
import { UserProps } from "../../models/user";
import { createUser } from "./createUser";
import { v4 as uuid } from "uuid";

export class createUserController {
  constructor(private createUser: createUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, photo, createAt, updatedAt }: UserProps = req.body;
    const id = uuid();

    try {
      const createUser = await this.createUser.execute({
        id,
        name,
        email,
        photo,
        createAt,
        updatedAt,
      });

      return res.json(createUser);
    } catch ({ message }) {
      return res.json({
        code: 400,
        message,
      });
    }
  }
}
