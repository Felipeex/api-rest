import express, { NextFunction, Request, Response } from "express";

const app = express();
app.use(express.json());

import users from "./routers/users";
app.use("/users", users);
app.use("/user", users);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err} test`,
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Api rodando com sucesso! 🚀");
});
