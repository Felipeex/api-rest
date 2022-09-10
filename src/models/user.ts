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
  }
}
