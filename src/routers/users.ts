import express, { Request, Response } from "express";
import { CreateUserControllerProvider } from "@use-cases/createUser";
import { updateUserControllerProvider } from "@use-cases/updateUser";
import { deleteUserControllerProvider } from "@use-cases/deleteUser";
import { getUserControllerProvider } from "@use-cases/getUser";
const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  return CreateUserControllerProvider.handle(req, res);
});

router.get("(/:id)?", (req: Request, res: Response) => {
  return getUserControllerProvider.handle(req, res);
});

router.put("/", (req: Request, res: Response) => {
  return updateUserControllerProvider.handle(req, res);
});

router.delete("/", (req: Request, res: Response) => {
  return deleteUserControllerProvider.handle(req, res);
});

export default router;
