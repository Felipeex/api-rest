import { Request, Response } from "express";
import { getUser } from "./getUser";

export class getUserController {
  constructor(private getUser: getUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const createUser = await this.getUser.execute(id);
    return res.json(createUser);
  }
}
