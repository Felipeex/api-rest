export interface UserProps {
  id: string;
  email: string;
  name: string;
  photo: string;
  createAt: Date;
  updatedAt: Date;
}

export class User {
  constructor(props: UserProps) {
    Object.assign(this, props);

    const { name, email, photo, createAt, updatedAt }: UserProps = props;

    if (!name) {
      throw new Error("name is empty");
    }

    if (!email) {
      throw new Error("email is empty");
    }

    if (!photo) {
      throw new Error("photo is empty");
    }

    if (!createAt) {
      throw new Error("createAt is empty");
    }

    if (!updatedAt) {
      throw new Error("updatedAt is empty");
    }
  }
}
