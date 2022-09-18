import { Request, Response } from "express";
import { deleteUser } from "./deleteUser";

export class deleteUserController {
  constructor(private deleteUser: deleteUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const deleteUser = await this.deleteUser.execute(id);
    return res.json(deleteUser);
  }
}