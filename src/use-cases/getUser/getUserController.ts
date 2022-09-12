import { Request, Response } from "express";
import { getUser } from "./getUser";

export class getUserController {
  constructor(private getUser: getUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const createUser = await this.getUser.execute(id);
      return res.json(createUser);
    } catch ({ message }) {
      return res.json({
        code: 400,
        message,
      });
    }
  }
}
