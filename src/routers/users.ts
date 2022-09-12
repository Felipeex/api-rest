import { CreateUserControllerProvider } from "@use-cases/createUser";
import { getUserControllerProvider } from "@use-cases/getUser";
import express, { Request, Response } from "express";
const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  return CreateUserControllerProvider.handle(req, res);
});

router.get("(/:id)?", (req: Request, res: Response) => {
  return getUserControllerProvider.handle(req, res);
});

export default router;
