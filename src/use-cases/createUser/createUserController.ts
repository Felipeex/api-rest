import { Request, Response } from "express";
import { UserProps } from "@models/user";
import { createUser } from "@use-cases/createUser/createUser";

export class createUserController {
  constructor(private createUser: createUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, photo }: UserProps = req.body;

    const createUser = await this.createUser.execute({
      name,
      email,
      photo: photo ? photo : "null",
    });

    return res.json(createUser);
  }
}
