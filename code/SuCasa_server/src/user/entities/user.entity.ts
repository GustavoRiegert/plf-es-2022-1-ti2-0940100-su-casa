import { Role } from '.prisma/client';

export class User {
  id?: string;
  email: string;
  username: string;
  password: string;
  name: string;
  role: Role;
}
