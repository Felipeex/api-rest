export class AppError {
  public readonly code: number;
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.code = statusCode;
    this.message = message;
    this.statusCode = statusCode;
  }
}
