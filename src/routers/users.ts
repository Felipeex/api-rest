import { userControllerProvider } from "../use-cases/createUser";
import express, { Request, Response } from "express";
const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  return userControllerProvider.handle(req, res);
});

router.get("/");

export default router;
