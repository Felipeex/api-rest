import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import "express-async-errors";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

import users from "./routers/users";
import { AppError } from "./errors/appError";
app.use("/api/user", users);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      code: err.code,
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Api rodando com sucesso! 🚀");
});
