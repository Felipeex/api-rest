import { Request, Response } from "express";
import { UserProps } from "@models/user";
import { updateUser } from "./updateUser";

export class updateUserController {
  constructor(private updateUser: updateUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, name, email, photo }: UserProps = req.body;

    const updateUser = await this.updateUser.execute({
      id,
      name,
      email,
      photo
    });

    return res.json(updateUser);
  }
}