export interface UserProps {
  id?: string;
  email: string;
  name: string;
  photo: string;
}

export class User {
  constructor(props: UserProps) {
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
