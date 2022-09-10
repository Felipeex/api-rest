import { CreateUserControllerProvider } from "../use-cases/createUser";
import express, { Request, Response } from "express";
const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  return CreateUserControllerProvider.handle(req, res);
});

router.get("/", (req: Request, res: Response) => {});

export default router;
