import { AppError } from "@errors/appError";

export interface UserProps {
  id?: string;
  email: string;
  name: string;
  photo: string;
}

export class User {
  constructor(props: UserProps) {
    Object.assign(this, props);
    const { name, email }: UserProps = props;

    if (!name) {
      throw new AppError("name is empty");
    }

    if (!email) {
      throw new AppError("email is empty");
    }
  }
}
