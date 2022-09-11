import crypto from "node:crypto";

export interface UserProps {
  id?: string;
  email: string;
  name: string;
  photo: string;
}

export class User {
  constructor(props: UserProps) {
    if (!props.id) {
      props.id = crypto.randomUUID();
    }

    Object.assign(this, props);
    const { name, email, photo }: UserProps = props;

    if (!name) {
      throw new Error("name is empty");
    }

    if (!email) {
      throw new Error("email is empty");
    }

    if (!photo) {
      throw new Error("photo is empty");
    }
  }
}
